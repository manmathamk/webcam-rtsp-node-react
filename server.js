

const Stream = require("node-rtsp-stream");

// First RTSP stream
const stream1 = new Stream({
  name: "camera_stream_1",
  streamUrl: "rtsp://username:password@192.168.2.16:554/stream1",
  wsPort: 9999, // WebSocket port for the first stream
  ffmpegOptions: {
    "-preset": "ultrafast",
    "-tune": "zerolatency",
    "-fflags": "nobuffer",
    "-r": 30, // Frame rate
    "-s": "1280x720", // Resolution
    "-b:v": "800k", // Bitrate
  },
});

console.log("Streaming RTSP feed 1 via WebSocket on ws://localhost:9999");

// Second RTSP stream
const stream2 = new Stream({
  name: "camera_stream_2",
  streamUrl: "rtsp://username:password@192.168.2.15:554/stream1",
  wsPort: 9998, // WebSocket port for the second stream
  ffmpegOptions: {
    "-preset": "ultrafast",
    "-tune": "zerolatency",
    "-fflags": "nobuffer",
    "-r": 30, // Frame rate
    "-s": "1280x720", // Resolution
    "-b:v": "800k", // Bitrate
  },
});

console.log("Streaming RTSP feed 2 via WebSocket on ws://localhost:9998");
