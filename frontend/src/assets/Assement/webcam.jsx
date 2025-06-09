import React, { useRef, useEffect } from 'react';

const WebcamFeed = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoRef.current.srcObject = stream;
            })
            .catch(console.error);
    }, []);

    return <video ref={videoRef} autoPlay style={{ width: '200px' }} />;
};

export default WebcamFeed;
