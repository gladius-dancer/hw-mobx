import {useState} from "react";
import listener from "../../store/listener";

export function useListener() {
    const [timerId, setTimerId] = useState<any>(null);

    const reset = () => {
        if (timerId) clearInterval(timerId);
        listener.reset();
    }

    const timer = () => {
        if (!timerId) {
            listener.timer("Timer starting")
            const timerId = setInterval(() => {
                listener.timer(new Date());
            }, 1000)
            setTimerId(timerId);
        }
    }

    return {reset, timer}
}