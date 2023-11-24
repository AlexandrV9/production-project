import { RefObject, useCallback, useRef, useState } from 'react';

interface ResUseCopy {
  onCopy: () => void;
  isCopied: boolean;
  refElement?: RefObject<HTMLElement>;
}

export function useCopy(text?: string): ResUseCopy {
  const [isCopied, setIsCopied] = useState(false);

  const refElement = useRef<HTMLElement>(null);

  const onCopy = useCallback(async () => {
    try {
      
      let textToCopy;

      if (text) {
        textToCopy = text;
      } else if (refElement?.current) {
        textToCopy = refElement?.current?.innerText;
      } else {
        throw new Error();
      }

      await navigator.clipboard.writeText(textToCopy);

      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      console.error('Не удалось скопировать текст в буфер обмена:', error);
    }
  }, [text]);

  return { onCopy, isCopied, refElement };
}
