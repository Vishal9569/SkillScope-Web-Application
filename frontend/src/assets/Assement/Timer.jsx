import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onTimeUp }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        if (time === 0) return onTimeUp();

        const timer = setInterval(() => setTime((t) => t - 1), 1000);
        return () => clearInterval(timer);
    }, [time]);

    return <div>Time Left: {time}s</div>;
};

export default Timer;
