import './Slot.css'

import { useState } from 'react';
import { useEffect } from 'react';

export default function Slot() {
    const [score, setScore] = useState(0);
    const [interval, setInterval] = useState([300, 300, 300]);
    const [timers, setTimers] = useState([]);
    const [results, setResults] = useState([]);

    const [slot1Value, setSlot1Value] = useState(0);
    const [slot2Value, setSlot2Value] = useState(0);
    const [slot3Value, setSlot3Value] = useState(0);


    // ----For Running The Slot----

    const runSlot = (num) => {
        if (num === 0) {
            setSlot1Value((prevValue) => (prevValue + 1) % 10);
        } else if (num === 1) {
            setSlot2Value((prevValue) => (prevValue + 1) % 10);
        } else if (num === 2) {
            setSlot3Value((prevValue) => (prevValue + 1) % 10);
        }

        // count number of the slot
        const nextValue = (num === 0 ? slot1Value : num === 1 ? slot2Value : slot3Value) + 1;
        if (nextValue <= 9) {
            timers[num] = setTimeout(() => {
                runSlot(num);
            }, interval[num]);
        }
    };

    useEffect(() => {
        // コンポーネントがマウントされた後に実行されるコード
        for (let i = 0; i < 3; i++) {
            runSlot(i);
        }

        return () => {
            // コンポーネントがアンマウントされた時にタイマーをクリア
            for (let i = 0; i < 3; i++) {
                clearTimeout(timers[i]);
            }
        };
    }, []);


    // ----Stop The Slot----

    // スロットが揃ったかどうかをチェックする関数
    const checkSlotsMatch = () => {
        return slot1Value === slot2Value && slot2Value === slot3Value;
    };

    // push the stopbutton
    const stopButton = (event) => {
        clearTimeout(timers[0]);
        clearTimeout(timers[1]);
        clearTimeout(timers[2]);

        if (checkSlotsMatch()) {
            // GAME CLEAR
            setScore(score + 100); // add score


            // pop up message
            showNotification('Game Clear');


        } else {
            // GAME OVER pop up message
            showNotification('Game Over');
        }

    };

    // pop up message
    const showNotification = (message) => {
        if ('Notification' in window) {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    new Notification(message);
                }
            });
        }
    };


    // ----Reset The Slot----

    const resetButton = (event) => {
        // stop the slots
        clearTimeout(timers[0]);
        clearTimeout(timers[1]);
        clearTimeout(timers[2]);


        // initialize 初期化
        setScore(0);
        setTimers([]);
        setResults([]);
        setInterval([300, 300, 300])

        // slot restart
        for (let i = 0; i < 3; i++) {
            runSlot(i);
        }
    }

    return (
        <div className="game">

            <p className="slot-score">SCORE: <span id="score">{score}</span></p>

            <div id="slot0" className="slot">{slot1Value}</div>

            <div id="slot1" className="slot">{slot2Value}</div>

            <div id="slot2" className="slot">{slot3Value}</div>

            <div>
                <button id="stop" onClick={stopButton}>STOP</button>
            </div>

            <button id="reset" onClick={resetButton}>RESET</button>

        </div>
    )
}
