import React, { useEffect, useState } from 'react';
import { useAssessment } from '../../context/AssessmentContext';

const Feedback = () => {
    const { state } = useAssessment();
    const { questions, userAnswers, assessmentStartTime, assessmentEndTime } = state;

    const [feedbackData, setFeedbackData] = useState(null);

    useEffect(() => {
        // Stop webcam streams on feedback page load
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    stream.getTracks().forEach(track => track.stop());
                })
                .catch(() => {
                    // Ignore errors here
                });
        }
    }, []);

    useEffect(() => {
        if (!questions || !userAnswers) return;

        const allQuestions = [...questions.mcq, ...questions.coding, ...questions.project];

        const resultById = (q) => {
            const userAnswer = userAnswers[q.id];
            if (userAnswer === undefined || userAnswer === '') return 'unanswered';
            return userAnswer.isCorrect ? 'correct' : 'wrong';
        };

        const questionResults = allQuestions.map((q) => ({
            id: q.id,
            type: ['mcq', 'coding', 'project'].find(section => questions[section].some(sq => sq.id === q.id)),
            title: q.title || q.description?.slice(0, 30) || 'Untitled',
            result: resultById(q),
        }));

        const correctCount = questionResults.filter(r => r.result === 'correct').length;
        const wrongCount = questionResults.filter(r => r.result === 'wrong').length;
        const unansweredCount = questionResults.filter(r => r.result === 'unanswered').length;

        const formatTime = (sec) => {
            const minutes = Math.floor(sec / 60);
            const seconds = sec % 60;
            return `${minutes}m ${seconds}s`;
        };

        const timeTakenSec = Math.floor((assessmentEndTime - assessmentStartTime) / 1000);

        const sectionStats = ['mcq', 'coding', 'project'].reduce((acc, type) => {
            const sectionQs = questions[type];
            const total = sectionQs.length;
            const correct = sectionQs.filter(q => userAnswers[q.id]?.isCorrect).length;
            const wrong = sectionQs.filter(q => userAnswers[q.id] && userAnswers[q.id].isCorrect === false).length;
            const unanswered = total - correct - wrong;

            acc[type] = { total, correct, wrong, unanswered };
            return acc;
        }, {});

        const recommendations = [];

        if (sectionStats.mcq.correct / (sectionStats.mcq.total || 1) < 0.7) {
            recommendations.push("Improve MCQ accuracy by revisiting core concepts.");
        }
        if (sectionStats.coding.correct / (sectionStats.coding.total || 1) < 0.7) {
            recommendations.push("Practice coding problems on LeetCode, HackerRank, or Codeforces.");
        }
        if (sectionStats.project.unanswered > 0) {
            recommendations.push("Make sure to complete and submit project questions for evaluation.");
        }

        setFeedbackData({
            questionResults,
            correctCount,
            wrongCount,
            unansweredCount,
            totalQuestions: allQuestions.length,
            timeTaken: formatTime(timeTakenSec),
            sectionStats,
            recommendations,
        });
    }, [questions, userAnswers, assessmentStartTime, assessmentEndTime]);

    if (!feedbackData) return <div>Generating feedback...</div>;

    const {
        questionResults,
        correctCount,
        wrongCount,
        unansweredCount,
        totalQuestions,
        timeTaken,
        sectionStats,
        recommendations
    } = feedbackData;

    return (
        <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '10px' }}>
            <h1>Assessment Feedback</h1>

            <section style={{ marginBottom: '1.5rem' }}>
                <p><strong>Total Questions:</strong> {totalQuestions}</p>
                <p><strong>Correct:</strong> {correctCount}</p>
                <p><strong>Wrong:</strong> {wrongCount}</p>
                <p><strong>Unanswered:</strong> {unansweredCount}</p>
                <p><strong>Time Taken:</strong> {timeTaken}</p>
                <p><strong>Score:</strong> {(correctCount / totalQuestions * 100).toFixed(2)}%</p>
            </section>

            <h2>Section Analysis</h2>
            {['mcq', 'coding', 'project'].map((type) => (
                <div key={type} style={{ marginBottom: '1rem' }}>
                    <strong>{type.toUpperCase()}:</strong> {sectionStats[type].correct} correct, {sectionStats[type].wrong} wrong, {sectionStats[type].unanswered} unanswered out of {sectionStats[type].total}
                </div>
            ))}

            <h2>Question Breakdown</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Type</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {questionResults.map((q) => (
                        <tr key={q.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{q.type}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{q.title}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', color: q.result === 'correct' ? 'green' : q.result === 'wrong' ? 'red' : 'gray' }}>
                                {q.result.toUpperCase()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Recommendations</h2>
            {recommendations.length > 0 ? (
                <ul>
                    {recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                    ))}
                </ul>
            ) : (
                <p>✅ Excellent work! You performed well across all sections.</p>
            )}
        </div>
    );
};

export default Feedback;
