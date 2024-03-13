import { io } from 'socket.io-client';
import React from 'react';
import { LocalStorage } from '../utils/LocalStorage';

export const socket = io(String(process.env.REACT_APP_HOST_SOCKET), {
  // transports: ['websocket','pooling', 'flashsocket' ],
  reconnectionDelay: 1000, // defaults to 1000
  reconnectionDelayMax: 5000, // defaults to 5000,
  extraHeaders:{
    'authorization': `Bearer ${LocalStorage.getAccessToken()?.toString()}`,
  },
  withCredentials: true,
  key:`Bearer ${LocalStorage.getAccessToken()?.toString()}`,
  auth:{
    Authorization:LocalStorage.getAccessToken()
  }
});

export const SocketContext = React.createContext<any>(null);