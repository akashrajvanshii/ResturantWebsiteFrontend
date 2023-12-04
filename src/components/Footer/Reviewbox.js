import React from 'react';
import './reviewbox.css';

const ReviewBox = ({ review }) => {
    return (
        <div style={styles.reviewBox}>
            <h3 className="cname">{review.customer_name}</h3>
            <p className="cstar"><strong>Rating:</strong> {review.rating}</p>
            <p className="ccomment"><strong>Comment:</strong> {review.comment}</p>
        </div>
    );
};

const styles = {
    reviewBox: {
        display: 'grid',
        // gap: '100px',
        margintop: '200px',
        margin: "50px",
        paddingTop: '10px',
        border: '1px solid #FFBB00',
        borderRadius: '2px',
        padding: '15px',
        width:"400px",
        backgroundColor: 'black',
        height: '200px',

        // margin: 'auto',
    },
};

export default ReviewBox;