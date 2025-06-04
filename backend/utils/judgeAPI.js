const axios = require("axios");

const JudgeAPI = async (code, language) => {
    try {
        const response = await axios.post(
            "https://judge0-ce.p.rapidapi.com/submissions",
            {
                source_code: code,
                language_id: getLangId(language),
                stdin: "", // Optional input
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
                    "X-RapidAPI-Key": process.env.JUDGE_API_KEY,
                },
            }
        );

        const token = response.data.token;

        // Wait for result
        await new Promise(r => setTimeout(r, 3000));
        const result = await axios.get(
            `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
            {
                headers: {
                    "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
                    "X-RapidAPI-Key": process.env.JUDGE_API_KEY,
                },
            }
        );

        return {
            success: result.data.status.description === "Accepted",
            output: result.data.stdout,
            error: result.data.stderr || result.data.compile_output,
        };
    } catch (err) {
        console.error("Judge API error:", err.message);
        return { success: false };
    }
};

function getLangId(lang) {
    const map = {
        python: 71,
        javascript: 63,
        c: 50,
        cpp: 54,
        java: 62,
    };
    return map[lang.toLowerCase()] || 63;
}

module.exports = JudgeAPI;
