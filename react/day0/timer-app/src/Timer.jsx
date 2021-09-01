/**
 * Apparently, using setInterval() with React Hooks is way more complicated than I thought
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * 
 * The issue lies in the fact that we'd need to pass in the current value of the state variable at
 * every iteration of the setInterval callback function. So what I thought was a straightforward
 * problem turned out to require a custom hook.
 * 
 * UPDATE 8/31
 * Apparently I just didn't understand React Hooks.
 */
import React, { /* useEffect, useRef, */useState } from 'react';
import TimeDisplay from './TimeDisplay';
import useInterval from './hooks/useInterval';

export default function Timer() {
    // Durations in seconds
    const COUNTDOWN = 10;
    const PAUSE = 2;

    const [runCount, setRunCount] = useState(0);
    const [pauseCount, setPauseCount] = useState(0);
    const [currentTime, setCurrentTime] = useState(COUNTDOWN);
    const [running, setRunning] = useState(false);
    // const [intervalId, setIntervalId] = useState(null);
    const [paused, setPaused] = useState(false);
    // const paused = useRef();

    
    useInterval(() => {
        setCurrentTime((previousTime) => {
            if(previousTime === 0)
            if(paused) {
                    setPaused(false);
                    setRunCount(previousCount => previousCount + 1);
                    return COUNTDOWN;
                }
                else {
                    setPaused(true);
                    setPauseCount(previousCount => previousCount + 1);
                    return PAUSE;
                }
                else
                return previousTime - 1;
            });
        }, running ? 1000 : null);  // This hook only updates when the running state changes
        
        function startRunning() {
            if(!running) setRunCount(previousCount => previousCount + 1);   // Increment runCount only if the timer wasn't already running
            setRunning(true);
    }
    
    function stopRunning() {
        setCurrentTime(COUNTDOWN);
        setPaused(false);
        setRunning(false);
    }
    
    return (
        <div>
            <h1>Timer</h1>
            <div><TimeDisplay time={currentTime} /></div>
            {/* <div>{running ? 'counting down' : 'not counting down'}</div> */}
            <div>Current State: {running ? paused ? 'paused' : 'running' : 'stopped'}</div>
            <div>Number of times timer was in "Run" state: {runCount}</div>
            <div>Number of times timer was in "Pause" state: {pauseCount}</div>
            <button onClick={startRunning}>Start</button>
            <button onClick={stopRunning}>Stop</button>
        </div>
    );
}

// Initialization
// useEffect(() => {
//     paused.current = false;
// }, []);

// useEffect(() => {
//     if(currentTime === 0) {
//         // if (paused) {
//         //     setCurrentTime(COUNTDOWN);
//         //     setPauseCount(pauseCount + 1);
//         //     paused.current = false;
//         // }
//         setCurrentTime(COUNTDOWN);
//     }
// }, [currentTime]);

// function startCountdown() {
    //     console.log('start button clicked');
    //     setCountdowns(countdowns + 1);
    //     setRunning(true);
    //     setPaused(false);
    //     setCurrentTime(currentTime => COUNTDOWN);
    
    //     // Update currentTime every second
    //     const id = setInterval(updateCurrentTime, 1000);
    //     setIntervalId(id);
    // }
    
    // function stopCountdown() {
//     console.log('stop button clicked');
//     setRunning(false);
//     setPaused(false);
//     clearInterval(intervalId);
// }

// function updateCurrentTime() {
//     // if (currentTime <= 0) {
//     //     if (running === true) {
//     //         // Pause the timer
//     //         setRunning(false);
//     //         setPaused(true);
//     //         setPauses(pauses + 1);
//     //         setCurrentTime(PAUSE);
//     //     } else {
//     //         // Start the timer again
//     //         setRunning(true);
//     //         setPaused(false);
//     //         setCountdowns(countdowns + 1);
//     //         setCurrentTime(COUNTDOWN);
//     //     }
//     // } else {
//     //     setCurrentTime(currentTime - 1);
//     // }
//     console.log('inside updateCurrentTime()');
//     if (currentTime > 0) setCurrentTime(currentTime => currentTime - 1);
//     console.log(currentTime);
// }