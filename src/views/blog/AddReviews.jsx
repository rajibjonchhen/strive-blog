import React from "react";

const AddReviews = () => {

    return(<div className="d-flex flex-column p-5 bg-secondary h-100">
        <h3>Leave your review</h3>
        <label for='comment'>Comment</label>
        <textarea id="comment" />
        <label for='rate'>Rate the post</label>
        <div className="d-flex justify-content-between align-items-center">
        <label for='rate'>1</label>
        <input type="radio" name="rate"/>
        <label for='rate'>2</label>
        <input type="radio" name="rate"/>
        <label for='rate'>3</label>
        <input type="radio" name="rate"/>
        <label for='rate'>4</label>
        <input type="radio" name="rate"/>
        <label for='rate'>5</label>
        <input type="radio" name="rate"/>
        </div>

    </div>)
}

export default AddReviews 