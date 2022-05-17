import React, {FC, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface TimerProps {
    currentPlayer: Player
    restart: () => void
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}: TimerProps) => {
    const [blackTime, setBlackTime] = useState<number>(300)
    const [whiteTime, setWhiteTime] = useState<number>(300)

    const timer = useRef<null | ReturnType<typeof setInterval>>(null)
    const startTimer = () => {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer.color === Colors.WHITE ? decrimentWhitePlayer : decrimentBlackPlayer
        timer.current = setInterval(callback, 1000)
    }
    const decrimentWhitePlayer = () => {
        setWhiteTime(prev => prev - 1)
    }
    const decrimentBlackPlayer = () => {
        setBlackTime(prev => prev - 1)
    }

    return (
        <div>
            <div>
                <button onClick={restart}>Restart GAME</button>
            </div>
            <h2>
                Black- {blackTime}
            </h2>
            <h2>
                White- {whiteTime}
            </h2>
        </div>
    );
};

export default Timer;