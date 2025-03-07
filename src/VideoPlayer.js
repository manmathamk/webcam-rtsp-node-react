import React, { useEffect, useRef } from 'react';

const RTSPStream = () => {
    const canvasRef1 = useRef(null); // Ref for the first video canvas
    const canvasRef2 = useRef(null); // Ref for the second video canvas

    useEffect(() => {
        // Load JSMpeg library dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/phoboslab/jsmpeg/jsmpeg.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Initialize the first JSMpeg player for the first stream
            const player1 = new window.JSMpeg.Player("ws://localhost:9999", {
                canvas: canvasRef1.current,
                autoplay: true,
                loop: true,
            });

            // Initialize the second JSMpeg player for the second stream
            const player2 = new window.JSMpeg.Player("ws://localhost:9998", {
                canvas: canvasRef2.current,
                autoplay: true,
                loop: true,
            });
        };

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '60vh', padding: '20px', boxSizing: 'border-box' }}>
            <h2>Live RTSP Streams</h2>
            <div style={{ display: 'flex', gap: '20px', width: '100%', height: '80%' }}>
                <div style={{ flex: 1, position: 'relative', width: '50%', height: '100%' }}>
                    <h3>Stream 1</h3>
                    <canvas
                        ref={canvasRef1}
                        style={{ width: '100%', height: '100%', backgroundColor: 'black' }}
                    ></canvas>
                </div>
                <div style={{ flex: 1, position: 'relative', width: '50%', height: '100%' }}>
                    <h3>Stream 2</h3>
                    <canvas
                        ref={canvasRef2}
                        style={{ width: '100%', height: '100%', backgroundColor: 'black' }}
                    ></canvas>
                </div>
            </div>
        </div>
    );
};

export default RTSPStream;
