import React, { createContext, useEffect, useRef, useState } from 'react';
export const WebsocketContext = createContext([false, null, () => {}]);
interface ChildrenProps{
    children:React.ReactNode
}
const WebsocketProvider = ({children}:ChildrenProps) => {
  const [isReady, setIsReady] = useState(false);
  const [val, setVal] = useState(null);

  const ws = useRef<null|any>(null);

  useEffect(() => {
    const socket = new WebSocket('wss://ws.bitstamp.net');

    socket.onopen = () => setIsReady(true);
    socket.onclose = () => setIsReady(false);
    socket.onmessage = (event) => setVal(event.data);

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, []);
  const ret = [isReady, val, ws.current?.send.bind(ws.current)];
  return (
    <WebsocketContext.Provider value={ret}>
      {children}
    </WebsocketContext.Provider>
  );
};

export default WebsocketProvider;