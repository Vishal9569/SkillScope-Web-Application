import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { createSubmission, getSubmissionResult } from '../../../utils/judgeApi';

const CodingPanel = ({ onSubmitCode, question, onNext }) => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const defaultCode =
            `// Input: ${question?.evaluation?.customTests?.[0]?.input || 'N/A'}\n` +
            `// Expected Output: ${question?.evaluation?.customTests?.[0]?.expectedOutput || 'N/A'}\n` +
            `// Write your code here...`;
        setCode(defaultCode);
        setOutput('');
    }, [question?.id]);

    const handleRunCode = async () => {
        setIsRunning(true);
        setOutput('');

        try {
            const { token } = await createSubmission(code);
            let result = null;

            while (true) {
                result = await getSubmissionResult(token);
                if (result.status.id >= 3) break;
                await new Promise((r) => setTimeout(r, 1000));
            }

            if (result.stdout) {
                setOutput(atob(result.stdout));
            } else if (result.compile_output) {
                setOutput(`Compile Error:\n${atob(result.compile_output)}`);
            } else if (result.stderr) {
                setOutput(`Runtime Error:\n${atob(result.stderr)}`);
            } else {
                setOutput('No output');
            }
        } catch (error) {
            setOutput('Error running code');
        } finally {
            setIsRunning(false);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setOutput('');

        try {
            const { token } = await createSubmission(code);
            let result = null;

            while (true) {
                result = await getSubmissionResult(token);
                if (result.status.id >= 3) break;
                await new Promise((r) => setTimeout(r, 1000));
            }

            let resultOutput = '';
            if (result.stdout) {
                resultOutput = atob(result.stdout).trim();
            } else if (result.compile_output) {
                resultOutput = `Compile Error:\n${atob(result.compile_output)}`;
            } else if (result.stderr) {
                resultOutput = `Runtime Error:\n${atob(result.stderr)}`;
            } else {
                resultOutput = 'No output';
            }

            setOutput(resultOutput);

            const expectedOutput = question?.evaluation?.customTests?.[0]?.expectedOutput?.trim();
            const isCorrect = resultOutput === expectedOutput;

            toast[isCorrect ? 'success' : 'error'](
                isCorrect ? 'Correct Answer' : 'Incorrect Output'
            );

            // Submit code to parent and store result
            await onSubmitCode({
                code,
                questionId: question.id,
                output: resultOutput,
                isCorrect,
            });

            // Move to next question
            onNext?.();

        } catch (err) {
            toast.error('Submission failed');
            setOutput('Error submitting code');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSkip = () => {
        onNext?.();
    };

    return (
        <div className="coding-content">
            <div className="coding-subcontent">
                <div className="code-ques-tab mb-3">
                    <strong>{question?.title || 'Question'}:</strong>
                    <div>{question?.description || 'No question available'}</div>
                </div>

                <div className="editor-op">
                    <div className="ques-editor">
                        <Editor
                            className="editor"
                            height="400px"
                            defaultLanguage="javascript"
                            value={code}
                            onChange={setCode}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                            }}
                        />
                    </div>

                    <div className="output-btndiv mt-3">
                        <div className="op-window mb-3">
                            <pre className="output">{output || 'Output will appear here'}</pre>
                        </div>

                        <div className="coding-btn">
                            <button className="btn btn-primary" onClick={handleRunCode} disabled={isRunning}>
                                {isRunning ? 'Running...' : 'Run'}
                            </button>

                            <button className="btn btn-success" onClick={handleSubmit} disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit & Continue'}
                            </button>

                            <button className="btn btn-secondary" onClick={handleSkip}>
                                Next
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodingPanel;
