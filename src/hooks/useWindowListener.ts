import { useEffect } from 'react';

interface WindowListener {
  (event: Event): void;
}

export function useWindowListener(eventType: string, listener: WindowListener): void {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}
