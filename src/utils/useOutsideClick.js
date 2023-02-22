import { useEffect, useRef, useState } from "react";

const useOutsideClick = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event?.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);
  return {
    open,
    setOpen,
    reference: ref,
  };
};

export default useOutsideClick;
