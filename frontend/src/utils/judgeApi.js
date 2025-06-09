import axios from 'axios';

const JUDGE0_API_URL = 'https://judge0-ce.p.rapidapi.com';
const RAPIDAPI_KEY = '3531de71camsh9d76ad7dc2fc2f8p18e1f4jsn98e414578b7d';

const headers = {
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'x-rapidapi-key': RAPIDAPI_KEY,
    'Content-Type': 'application/json',
};

export async function createSubmission(source_code, language_id = 63) {
    // language_id = 63 for JavaScript (Node.js)
    const body = {
        source_code: btoa(source_code), // base64 encode code
        language_id,
        stdin: '',
        // optional: expected_output, cpu_time_limit, etc.
    };

    const response = await axios.post(`${JUDGE0_API_URL}/submissions?base64_encoded=true&wait=false`, body, {
        headers,
    });
    return response.data; // contains { token }
}

export async function getSubmissionResult(token) {
    const response = await axios.get(`${JUDGE0_API_URL}/submissions/${token}?base64_encoded=true&fields=*`, {
        headers,
    });
    return response.data;
}
