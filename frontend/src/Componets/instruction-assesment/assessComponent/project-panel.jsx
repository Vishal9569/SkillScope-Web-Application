import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useAssessment } from '../../../context/AssessmentContext';

const ProjectPanel = ({ question }) => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [task, setTask] = useState(null);
    const iframeRef = useRef(null);
    const blobUrlRef = useRef(null);
    const { dispatch } = useAssessment();

    useEffect(() => {
        if (question) {
            setTask(question);
            if (question.startercode) {
                setCode(question.startercode);
            } else {
                setCode('');
            }
            setOutput('');
            setIsCorrect(null);
        }
    }, [question]);

    // Listen for console logs and errors from iframe
    useEffect(() => {
        function handleMessage(event) {
            if (event.source !== iframeRef.current?.contentWindow) return;

            if (event.data?.type === 'iframe-log') {
                setOutput((prev) => prev + event.data.message + '\n');
            } else if (event.data?.type === 'iframe-error') {
                setOutput((prev) => prev + 'Error: ' + event.data.message + '\n');
            }
        }
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    // Evaluate tests after iframe loads new code
    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const handleLoad = () => {
            if (!task?.evaluation) return;

            let passed = true;

            // Check required keywords
            (task.evaluation.mustInclude || []).forEach((keyword) => {
                if (!code.includes(keyword)) {
                    toast.error(`Missing keyword: ${keyword}`);
                    passed = false;
                }
            });

            // Run custom test cases
            (task.evaluation.customTests || []).forEach((test) => {
                try {
                    const result = iframe.contentWindow.eval(test.codeToRun);
                    if (result !== test.expected) {
                        toast.error(`Test failed: ${test.codeToRun}`);
                        passed = false;
                    }
                } catch (e) {
                    toast.error(`Error evaluating: ${test.codeToRun}`);
                    passed = false;
                }
            });

            setIsCorrect(passed);

            if (passed) {
                toast.success('All tests passed! 🎉');
            }
            setIsRunning(false);
        };

        iframe.addEventListener('load', handleLoad);
        return () => {
            iframe.removeEventListener('load', handleLoad);
        };
    }, [code, task]);

    const runCodeInIframe = (userCode) => {
        if (blobUrlRef.current) {
            URL.revokeObjectURL(blobUrlRef.current);
        }

        setOutput(''); // clear previous output before run

        const wrappedCode = `
      <script>
        (function() {
          const originalLog = console.log;
          console.log = function(...args) {
            const message = args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
            window.parent.postMessage({ type: 'iframe-log', message }, '*');
            originalLog.apply(console, args);
          };
          window.onerror = function(message, source, lineno, colno, error) {
            window.parent.postMessage({ type: 'iframe-error', message }, '*');
          };
        })();
      </script>
      <script>
        try {
          ${userCode}
        } catch (e) {
          window.parent.postMessage({ type: 'iframe-error', message: e.message }, '*');
        }
      </script>
    `;

        const blob = new Blob([wrappedCode], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        blobUrlRef.current = url;

        if (iframeRef.current) {
            iframeRef.current.src = url;
        }
    };

    const handleRunProject = () => {
        if (!task) {
            toast.error('No task loaded!');
            return;
        }
        toast.dismiss();
        setIsRunning(true);
        setIsCorrect(null);
        runCodeInIframe(code);
        // Tests & correctness evaluation triggered on iframe load event
    };

    return (
        <div className="container">
            {/* Top bar: Question description + Run & Evaluate button side by side */}
            <section className="top-bar">
                <div className="project-des">
                    <h3 className="project-title">{task?.title || 'Untitled Project'}</h3>
                    <p><strong>Description:</strong> {task?.description || 'N/A'}</p>
                </div>
                <button
                    className="btn btn-primary run-button"
                    onClick={handleRunProject}
                    disabled={isRunning}
                >
                    {isRunning ? (
                        <>
                            <Spinner animation="border" size="sm" /> Running...
                        </>
                    ) : (
                        'Run & Evaluate'
                    )}
                </button>
            </section>


            {/* Code Editor and Output side by side */}
            <section className="code-output-frame">
                <Editor
                    className="editor"
                    height="400px"
                    language="javascript"
                    value={code}
                    onChange={setCode}
                    options={{ minimap: { enabled: false }, fontSize: 14 }}
                    width="60%"
                />

                <div className="output-container">
                    <iframe
                        className="iframe"
                        id="sandbox"
                        ref={iframeRef}
                        sandbox="allow-scripts"
                        title="project-sandbox"
                    />
                    <pre
                        className="output-pre"
                        style={{
                            color: isCorrect === true ? '#0f0' : isCorrect === false ? '#f00' : '#0f0',
                            fontWeight: isCorrect !== null ? 'bold' : 'normal',
                            borderColor: isCorrect === true ? '#0f0' : isCorrect === false ? '#f00' : '#555',
                        }}
                    >
                        {output || 'Output will appear here...'}
                    </pre>
                </div>
            </section>
        </div>


    );
};

export default ProjectPanel;
