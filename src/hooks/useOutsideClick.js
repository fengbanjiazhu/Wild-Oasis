import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function name() {
      function handleClick(e) {
        // ref === modal
        // ref.current.contains(e.target) === clicked inside modal
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () => document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
