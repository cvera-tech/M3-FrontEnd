import React from 'react';

export default function TimeDisplay(props) {
    const timeInSeconds = props.time;
    const minutes = Math.trunc(timeInSeconds / 60);
    const minutesString = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    const seconds = timeInSeconds % 60;
    const secondsString = (seconds < 10) ? `0${seconds}` : `${seconds}`;
    const timeString = `${minutesString}:${secondsString}`;
    return (
        <span>{timeString}</span>
    );
}