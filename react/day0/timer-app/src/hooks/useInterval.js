import { useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
    const savedCallback = useRef();
    
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]); // whenever callback gets updated, save it in the ref

    useEffect(() => {
        function tick() {
            savedCallback.current();    // Invoke the saved callback
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id); // if delay changes, clearInterval is called on the id
        }
    }, [delay]);    // keep track of when delay changes
}