import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaInfoCircle, FaCamera, FaClock, FaCheckCircle } from 'react-icons/fa';
import { useAssessment } from '../../context/AssessmentContext';

const Instructions = () => {
    const navigate = useNavigate();
    const { fetchQuestionsByCategory, state } = useAssessment();
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    const [loading, setLoading] = useState(false);

    const requestWebcamAccess = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            stream.getTracks().forEach(track => track.stop());
            return true;
        } catch {
            toast.error("Webcam access is required to start the test.");
            return false;
        }
    };

    const handleStartTest = async () => {
        const allowed = await requestWebcamAccess();
        if (!allowed) return;

        try {
            await document.documentElement.requestFullscreen();
        } catch {
            alert("Please allow fullscreen to proceed.");
            return;
        }

        setLoading(true);

        // Use the context fetch method and wait for result
        const success = await fetchQuestionsByCategory(category);

        setLoading(false);

        if (success) {
            navigate('/mock-assesment');
        } else {
            toast.error(state.error || 'Failed to load questions.');
        }
    };

    return (
        <div className="instructions-container">
            <div className="instructions-header">
                <h2><FaInfoCircle className="me-2" /> Assessment Instructions</h2>
                <p>Please read the following instructions carefully before starting the test.</p>
            </div>

            <div className="instructions-body">
                <ul>
                    <li><FaCheckCircle className='inst-icon' /><span>Read all questions carefully before answering.</span></li>
                    <li><FaClock className='inst-icon' /><span>The total duration of the assessment is <strong>30 minutes</strong>.</span></li>
                    <li><FaCamera className='inst-icon' /><span>Your webcam will be used for live proctoring. Ensure it is functional.</span></li>
                    <li><FaCheckCircle className='inst-icon' /><span>Do not refresh or switch tabs during the test.</span></li>
                    <li><FaCheckCircle className='inst-icon' /><span>You can navigate between questions using "Previous" and "Next" buttons.</span></li>
                    <li><FaCheckCircle className='inst-icon' /><span>Once you click "Submit", your answers will be finalized.</span></li>
                </ul>
            </div>

            <div style={{ marginTop: '30px' }}>
                <button className="btn btn-success btn-lg" onClick={handleStartTest} disabled={loading}  >

                    {loading ? "Starting..." : "Start Test"}
                </button>
            </div>
        </div>
    );
};

export default Instructions;
