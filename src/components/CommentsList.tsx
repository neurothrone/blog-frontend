import Comment from "../types/comment.ts";

interface CommentsListProps {
  comments: Comment[];
}

const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <>
      <h3>Comments:</h3>
      {comments.map(comment => (
        <div key={comment.postedBy}>
          <h4>{comment.postedBy}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
};

export default CommentsList;
