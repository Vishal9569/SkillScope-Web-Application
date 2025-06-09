import Editor from '@monaco-editor/react';
import { useState } from 'react';

function CodeEditorQuestion({ question, onSubmitCode }) {
  const [code, setCode] = useState(question.defaultCode || '');
  return (
    <div>
      <h4>{question.question}</h4>
      <Editor
        height="300px"
        language={question.language}
        value={code}
        onChange={(value) => setCode(value)}
      />
      <button onClick={() => onSubmitCode(code)}>Submit Code</button>
    </div>
  );
}

export default CodeEditorQuestion;
