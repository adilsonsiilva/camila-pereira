
import { useState, useEffect, useCallback } from 'react';

export const useSecretCode = (secretCode: string): boolean => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const code = secretCode.toLowerCase();
    const key = e.key.toLowerCase();
    
    if (key === code[count]) {
      setCount(prevCount => prevCount + 1);
    } else {
      setCount(0);
    }
  }, [count, secretCode]);

  useEffect(() => {
    if (count === secretCode.length) {
      setSuccess(true);
      setCount(0);
    }
  }, [count, secretCode.length]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  // This allows resetting the success state from the component using the hook
  useEffect(() => {
    if(success) {
      const timer = setTimeout(() => setSuccess(false), 1); // Reset after a tick to allow modal to open
      return () => clearTimeout(timer);
    }
  }, [success]);

  return success;
};
