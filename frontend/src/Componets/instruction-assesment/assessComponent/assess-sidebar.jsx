import React from 'react';

const Sidebar = ({ topics, activeTopic, setActiveTopic }) => (
    <div className="assessment-sidebar">
        <div id="list-example" className="list-group">
            <button className='Topic'>Topics</button>
            {topics.map((topic) => (
                <button
                    key={topic.key}
                    type="topic-btn"
                    className={`list-group-item item list-group-item-action ${activeTopic === topic.key ? 'active' : ''}`}
                    onClick={() => setActiveTopic(topic.key)}
                >
                    {topic.label}
                    {topic.count > 0 && <span className="badge badge-secondary ml-2">{topic.count}</span>}
                </button>
            ))}
        </div>
    </div>
);

export default Sidebar;