import { io } from 'socket.io-client';

// Compute the URL based on the environment
const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : undefined;

const socketOptions = {
  autoConnect: false,
  cors: {
    origin: "http://localhost:3000",
  },
};

export const socket = io(URL, socketOptions);
