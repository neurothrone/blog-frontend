import { useState } from "react";
import Comment from "../types/comment.ts";

interface AddCommentFormProps {
  onAddComment: (comment: Comment) => void;
}

const AddCommentForm = ({ onAddComment }: AddCommentFormProps) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function addComment() {
    onAddComment({ postedBy: name, text: comment });
    setName("");
    setComment("");
  }

  return (
    <div>
      <h3>Add a Comment</h3>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name..."
        required
        minLength={3}
        maxLength={20}
        pattern="[a-zA-Z ]+"
        title="Only letters and spaces are allowed"
        autoFocus
        autoComplete="off"
        spellCheck="false"
        autoCapitalize="off"
        autoCorrect="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        placeholder="Enter your comment here..."
        required
        minLength={10}
        maxLength={500}
        rows={5}
        cols={30}
        value={comment}
        onChange={(e) => setComment(e.target.value)}/>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
