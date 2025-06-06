import { useEffect } from 'react';

export function useWindowListener(eventType: string, listener: EventListener): void {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}
