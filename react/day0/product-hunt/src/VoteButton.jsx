export default function VoteButton(props) {
    const direction = props.direction;
    let output = '';
    let buttonClass = '';
    if(direction === 'up') {
        output = '↑'; // &#8593;
        if (props.voted === true) {
            buttonClass = 'upvote-selected';
        }
    } else if (direction === 'down') {
        output = '↓'; // &#8595;
        if (props.voted === true) {
            buttonClass = 'downvote-selected';
        }
    } else {
        output = 'UNKNOWN';
    }
    // if (props.voted === 'up') {
    //     buttonClass = 'upvote-selected';
    // } else if (props.voted === 'down') {
    //     buttonClass = 'downvote-selected';
    // }
    
    return (
        <button onClick={props.onClick} className={buttonClass}>{output}</button>
    );  
}