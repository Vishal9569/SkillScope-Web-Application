import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Header from './assessComponent/assess-header';
import QuestionPanel from './assessComponent/Ques-panel';
import CodingPanel from './assessComponent/coding-panel';
import ProjectPanel from './assessComponent/project-panel';

import { useAssessment } from '../../context/AssessmentContext';

const Assessment = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useAssessment();
    const { questions, loading, error } = state;
    const manualSubmitRef = useRef(false);
    const [activeTopic, setActiveTopic] = useState('mcq');
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes countdown in seconds
    const [isFullscreen, setIsFullscreen] = useState(document.fullscreenElement != null);

    const hasSubmittedRef = useRef(false);

    const topics = [
        { key: 'mcq', label: 'MCQ', count: questions.mcq?.length || 0 },
        { key: 'coding', label: 'Coding', count: questions.coding?.length || 0 },
        { key: 'project', label: 'Project', count: questions.project?.length || 0 },
    ];

    // Handle errors & empty questions
    useEffect(() => {
        if (error) {
            toast.error(error);
            navigate('/');
        }
    }, [error, navigate]);

    useEffect(() => {
        if (
            !loading &&
            !questions.mcq.length &&
            !questions.coding.length &&
            !questions.project.length
        ) {
            toast.error('No questions available, redirecting...');
            navigate('/');
        }
    }, [loading, questions, navigate]);

    // Timer countdown
    useEffect(() => {
        if (timeLeft === 0 && !hasSubmittedRef.current) {
            toast.info('Time is over! Submitting your test...');
            handleFinalSubmit('Timer expired. Test submitted.');
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    // Reset question index on topic change
    useEffect(() => {
        setActiveIndex(0);
    }, [activeTopic]);

    // Fullscreen change listener to auto-submit on exit and block UI
    useEffect(() => {
        const handleFullscreenChange = () => {
            const fs = document.fullscreenElement != null;
            setIsFullscreen(fs);

            if (!fs) {
                // Exited fullscreen - auto-submit & redirect immediately
                handleFinalSubmit('Test submitted due to exiting fullscreen.');
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    // Submit answer for MCQ, project, coding
    const handleAnswerSubmit = (questionId, answer) => {
        dispatch({
            type: 'SUBMIT_ANSWER',
            payload: { questionId, answer },
        });
        toast.success('Answer recorded');
    };

    // Final submit (manual or auto)
    const handleFinalSubmit = (message = 'Test submitted!') => {
        if (hasSubmittedRef.current) return;

        hasSubmittedRef.current = true;
        dispatch({ type: 'END_ASSESSMENT' });
        setIsSubmitting(true);

        toast.info(message);

        setTimeout(() => {
            navigate('/feedback');
        }, 3000); // 3 seconds delay before redirect
    };

    // Manual submit button handler (from header)
    const handleManualSubmit = async () => {
        if (document.fullscreenElement) await document.exitFullscreen();
        handleFinalSubmit('Test submitted by user.');
    };

    // Move to next question for current topic
    const handleNext = () => {
        const currentQuestions = questions[activeTopic] || [];
        if (activeIndex < currentQuestions.length - 1) {
            setActiveIndex((prev) => prev + 1);
        }
    };

    // Move to previous question
    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
        }
    };

    // Handle code submission for coding panel
    const handleSubmitCode = async (code) => {
        setIsSubmitting(true);
        try {
            // simulate API call
            await new Promise((res) => setTimeout(res, 1000));
            toast.success('Code submitted!');
        } catch (err) {
            toast.error('Submission failed');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle auto-submit on fullscreen exit (but not if manually submitted)
    if (!document.fullscreenElement && !hasSubmittedRef.current && !manualSubmitRef.current) {
        hasSubmittedRef.current = true;
        handleFinalSubmit("Test submitted due to exiting fullscreen.");
        return null;
    }

    // If not in fullscreen, show UI message
    if (!isFullscreen) {
        navigate('/feedback');
        return (<>

            <div style={{ padding: 20, textAlign: 'center' }}>
                <h2>Test Will be submitted due to exict FullScreen Mode !.</h2>
            </div>
        </>
        );
    }


    if (loading) return <div>Loading questions...</div>;

    const currentQuestions = questions[activeTopic] || [];
    const currentQuestion = currentQuestions[activeIndex] || null;

    return (
        <div className="page">
            <Header
                timeLeft={timeLeft}
                topics={topics}
                activeTopic={activeTopic}
                setActiveTopic={setActiveTopic}
                isSubmitting={isSubmitting}
                currentQuestionIndex={activeIndex}
                totalQuestions={currentQuestions.length}
                onSubmitTest={handleManualSubmit} // pass manual submit handler for header button
            />

            <div className="content">
                {activeTopic === 'mcq' && currentQuestion && (
                    <QuestionPanel
                        question={currentQuestion}
                        questionIndex={activeIndex}
                        totalQuestions={currentQuestions.length}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        onSubmit={(answer) => handleAnswerSubmit(currentQuestion.id, answer)}
                    />
                )}

                {activeTopic === 'coding' && currentQuestion && (
                    <CodingPanel
                        question={currentQuestion}
                        onSubmitCode={handleSubmitCode}
                        onNext={handleNext}
                    />
                )}

                {activeTopic === 'project' && currentQuestion && (
                    <ProjectPanel question={currentQuestion} />
                )}
            </div>
        </div>
    );
};

export default Assessment;
