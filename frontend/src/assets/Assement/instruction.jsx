import React from 'react';
import { useNavigate } from 'react-router-dom';


const Instructions = () => {
    const navigate = useNavigate();

    const startTest = () => {
        navigate('/test');  // Navigate to the test page after clicking 'Start Test'
    };

    return (
        <div className="instructions-container">
            <div className="instructions-header">
                <h2>Test Instructions</h2>
                <p>Please read the instructions carefully before starting the test:</p>
            </div>
            <div className="instructions-body">
                <ul>
                    <li>
                        <i className="fas fa-window-restore"></i>
                        <strong>Do not switch tabs</strong> during the test. The system will monitor your tab activity.
                    </li>
                    <li>
                        <i className="fas fa-expand"></i>
                        <strong>Stay in fullscreen mode</strong> throughout the test to avoid distractions.
                    </li>
                    <li>
                        <i className="fas fa-video"></i>
                        <strong>Webcam will be active</strong> to ensure that no cheating takes place. Ensure your webcam is working.
                    </li>
                    <li>
                        <i className="fas fa-clock"></i>
                        <strong>Time Limit</strong>: You have 60 minutes to complete the test. The timer will begin once you start.
                    </li>
                    <li>
                        <i className="fas fa-cogs"></i>
                        <strong>Questions Format</strong>: The test consists of both coding and multiple-choice questions. Be prepared for both.
                    </li>
                    <li>
                        <i className="fas fa-check-circle"></i>
                        <strong>Submission</strong>: The test will automatically be submitted once the timer runs out. Make sure to finish on time.
                    </li>
                </ul>
            </div>
            <div className="start-button-container">
                <button onClick={startTest} className="start-button">Start Test</button>
            </div>
        </div>
    );
};

export default Instructions;
