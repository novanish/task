import { Callback, debounce } from "@/lib/debounce";
import { useEffect, useMemo, useRef } from "react";

export function useDebounce<T extends Callback>(cb: T, ms = 500) {
  const ref = useRef(cb);

  useEffect(() => {
    ref.current = cb;
  }, [cb]);

  return useMemo(() => {
    // eslint-disable-next-line react-hooks/refs
    return debounce((...args: Parameters<T>) => ref.current(...args), ms);
  }, [ms]);
}
