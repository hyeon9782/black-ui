import { useEffect, useState } from "react";

const useClipboard = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(value);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 1500);
  };

  useEffect(() => {
    return () => {
      setHasCopied(false);
    };
  }, []);

  return { onCopy, value, setValue, hasCopied };
};

export default useClipboard;
