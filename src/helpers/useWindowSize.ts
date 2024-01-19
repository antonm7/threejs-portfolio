// useWidth.ts
import { useEffect, useState, useCallback } from "react";

export default function useWidth() {
  const [width, setWidth] = useState<number | null>(window.innerWidth);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return width;
}
