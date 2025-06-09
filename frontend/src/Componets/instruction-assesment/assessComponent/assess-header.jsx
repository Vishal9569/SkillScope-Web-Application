import React, { useRef, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Sidebar from './assess-sidebar';

const Header = ({
    timeLeft,
    topics,
    activeTopic,
    setActiveTopic,
    isSubmitting,
    currentQuestionIndex,
    totalQuestions,
    onSubmitTest // 👈 new prop
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const enableWebcam = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) videoRef.current.srcObject = stream;
            } catch (err) {
                console.error('Webcam error:', err);
            }
        };

        enableWebcam();

        return () => {
            const stream = videoRef.current?.srcObject;
            stream?.getTracks().forEach(track => track.stop());
        };
    }, []);

    const formatTime = (sec) =>
        `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;

    const handleSubmitClick = async () => {
        if (document.fullscreenElement) {
            await document.exitFullscreen();
        }

        if (typeof onSubmitTest === 'function') {
            onSubmitTest(); // 👈 delegate submission to parent component
        }
    };

    return (
        <div className="main-heading">
            <div className="main1">
                <div className="sub-heading">
                    <div className="heading">
                        <h2>Frontend Developer <strong>Assessment</strong></h2>
                    </div>
                    <div className="heading-content">
                        <div className="progress-tab">
                            <div className="sidebar">
                                <Sidebar
                                    topics={topics}
                                    activeTopic={activeTopic}
                                    setActiveTopic={setActiveTopic}
                                />
                            </div>
                            <div className="timer">
                                <AccessTimeIcon className="icon" />
                                <span>{formatTime(timeLeft)}</span>
                            </div>
                        </div>

                        <div className="header-assesment">
                            <div className="progressbar">
                                <span className="progress-span">
                                    Progress: Question {currentQuestionIndex + 1} of {totalQuestions}
                                </span>
                            </div>
                            <div className="submit">
                                <button
                                    type="button"
                                    className="btn btn-success submit-btn"
                                    onClick={handleSubmitClick}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" />
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit Test'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="webcam-box">
                    <div className="webcam-preview">
                        <FaCamera className="webcam-icon" />
                        <video ref={videoRef} autoPlay muted playsInline className="cam-view" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
