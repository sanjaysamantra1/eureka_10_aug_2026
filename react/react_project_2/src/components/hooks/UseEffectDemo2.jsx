import { useEffect, useState } from "react";

export default function UseEffectDemo2() {
    const [userId, setUserId] = useState(1);
    const [commentId, setCommentId] = useState(1);

    const fetchUserData = (userId)=>{
        console.log('Fetching user data from API')
    }
    const fetchCommentData = (userId)=>{
        console.log('Fetching comment data from API')
    }

    useEffect(() => {
        fetchUserData(userId)
    },[userId]);

    useEffect(() => {
        fetchCommentData(commentId)
    },[commentId]);

    return <>
        <div>UseEffectDemo-</div>
        <div>userId:{userId}</div>
        <div>commentId:{commentId}</div>

        <button onClick={() => setUserId(userId + 1)}>update userId</button>
        <button onClick={() => setCommentId(commentId + 1)} className="mx-2">update commentid</button>
    </>
}
