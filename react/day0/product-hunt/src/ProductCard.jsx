import { useEffect, useState } from "react";
import VoteButton from "./VoteButton";
export default function ProductCard(props) {
    const [upvotes, setUpvotes] = useState(props.upvotes);
    const [downvotes, setDownvotes] = useState(props.downvotes);
    const [vote, setVote] = useState(props.vote);
    function voteUp() {
        setVote(previous => {
            // These if blocks make sure we can't upvote the same item multiple times
            if(previous === '') {
                setUpvotes(previous => previous + 1);
                return 'up';
            } else if(previous === 'down') {
                setUpvotes(previous => previous + 1);
                setDownvotes(previous => previous - 1);
                return 'up';
            } else {
                return previous;
            }
        });
    }
    function voteDown() {
        setVote(previous => {
            // These if blocks make sure we can't downvote the same item multiple times
            if(previous === '') {
                setDownvotes(previous => previous + 1);
                return 'down';
            } else if(previous === 'up') {
                setDownvotes(previous => previous + 1);
                setUpvotes(previous => previous - 1);
                return 'down';
            } else if(previous === 'down'){
                setDownvotes(previous => previous - 1);
                return '';
            }
        });
    }
    
    // useEffect(() => {
    //     if(vote === 'up') {
    //         setUpvotes(previous => previous + 1);
    //     } else if(vote === 'down') {
    //         setDownvotes(previous => previous + 1);
    //     }
    // }, [vote]);

    return (
        <div>
            <h3>{props.name}</h3>
            <div>Upvotes: {upvotes}</div>
            <div>Downvotes: {downvotes}</div>
            <VoteButton direction='up' onClick={voteUp} voted={vote === 'up'}/>
            <VoteButton direction='down' onClick={voteDown} voted={vote === 'down'}/>
        </div>
    );
}