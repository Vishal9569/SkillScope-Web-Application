import React, { createContext, useReducer, useContext } from 'react';

const AssessmentContext = createContext();

const initialState = {
    questions: {
        mcq: [],
        coding: [],
        project: [],
    },
    userAnswers: {},
    assessmentStartTime: null,
    assessmentEndTime: null,
    loading: false,
    error: null,
    projectCorrectness: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_QUESTIONS_START':
            return { ...state, loading: true, error: null };

        case 'FETCH_QUESTIONS_SUCCESS':
            return {
                ...state,
                questions: action.payload,
                loading: false,
                error: null,
                assessmentStartTime: Date.now(),
                userAnswers: {},
                assessmentEndTime: null,
            };

        case 'FETCH_QUESTIONS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'SUBMIT_ANSWER':
            return {
                ...state,
                userAnswers: {
                    ...state.userAnswers,
                    [action.payload.questionId]: {
                        answer: action.payload.answer,
                        isCorrect: action.payload.isCorrect,
                    },
                },
            };


        case 'SET_PROJECT_CORRECTNESS':
            return {
                ...state,
                projectCorrectness: action.payload,
            };


        case 'END_ASSESSMENT':
            return {
                ...state,
                assessmentEndTime: Date.now(),
            };

        default:
            return state;
    }
};

export const AssessmentProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchQuestionsByCategory = async (category) => {
        dispatch({ type: 'FETCH_QUESTIONS_START' });

        const token = localStorage.getItem('token') || localStorage.getItem('authToken');
        if (!token) {
            dispatch({ type: 'FETCH_QUESTIONS_FAILURE', payload: 'No auth token found.' });
            return false;
        }

        const headers = { Authorization: `Bearer ${token}` };
        const BASE_URL = 'https://skillscope.onrender.com/api/data';

        const mcqTypesMap = {
            backend: ['js', 'mongodb', 'sql', 'restapi'],
            frontend: ['html', 'css', 'js', 'react'],
            fullstack: ['html', 'css', 'js', 'react', 'mongodb', 'mysql', 'restapi'],
        };

        const mcqTypes = mcqTypesMap[category] || [];

        try {
            // Fetch MCQs
            const mcqPromises = mcqTypes.map(type =>
                fetch(`${BASE_URL}/all-question?type=${type}`, { headers }).then(res => res.json())
            );
            const mcqResults = await Promise.all(mcqPromises);
            let mcqData = mcqResults.flat();

            mcqData = mcqData.sort(() => 0.5 - Math.random()).slice(0, 20);


            // Fetch coding & project questions
            const codingRes = await fetch(`${BASE_URL}/coding-question?category=${category}`, { headers });
            const projectRes = await fetch(`${BASE_URL}/project-question?category=${category}`, { headers });

            if (!codingRes.ok || !projectRes.ok) {
                const codingText = await codingRes.text();
                const projectText = await projectRes.text();
                throw new Error(`Failed fetching coding/project questions: ${codingText}, ${projectText}`);
            }

            let [codingData, projectData] = await Promise.all([
                codingRes.json(),
                projectRes.json(),
            ]);

            codingData = codingData.sort(() => 0.5 - Math.random()).slice(0, 3);
            projectData = projectData.sort(() => 0.5 - Math.random()).slice(0, 1);

            const questions = {
                mcq: mcqData,
                coding: codingData,
                project: projectData,
            };

            dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: questions });
            return true;

        } catch (err) {
            dispatch({ type: 'FETCH_QUESTIONS_FAILURE', payload: err.message });
            return false;
        }
    };

    return (
        <AssessmentContext.Provider value={{ state, dispatch, fetchQuestionsByCategory }}>
            {children}
        </AssessmentContext.Provider>
    );
};

export const useAssessment = () => useContext(AssessmentContext);
