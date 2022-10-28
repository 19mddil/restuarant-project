import React from 'react';
import dateFormat from 'dateformat';

const LoadComments = props => {
    return (
        props.comments.map(comment => {
            return (
                <div key={comment.id} style={{ textAlign: "right" }}>
                    <hr />
                    <h5 style={{ textAlign: "left" }}>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p>Rating: {comment.rating}</p>
                    <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                </div >
            );
        })
    );
}

export default LoadComments;