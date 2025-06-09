import React, { useState } from 'react';

const CodeEditor = ({ codeQuestion, setCodeAnswer }) => {
    return (
        <div>
            <h3>{codeQuestion.title}</h3>
            <p>{codeQuestion.description}</p>
            <textarea
                rows={10}
                placeholder="Write your code here"
                onChange={(e) => setCodeAnswer(e.target.value)}
            />
        </div>
    );
};

export default CodeEditor;
