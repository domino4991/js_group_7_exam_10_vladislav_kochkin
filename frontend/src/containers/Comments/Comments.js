import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNewComment, changeValueComment, deleteComment, getComments} from "../../store/actions/commentsActions";
import CommentItem from "../../components/CommentItem/CommentItem";
import CommentsForm from "../../components/UI/CommentsForm/CommentsForm";
import './Comments.css';

const Comments = props => {
    const {
        comments,
        loading,
        error,
        comment
    } = useSelector(state => state.comments);
    const dispatch = useDispatch();
    const id = props.id;

    useEffect(() => {
        dispatch(getComments(id));
    }, [dispatch, id]);

    return (
        <div className="Comments">
            <h3 style={{fontSize: '24px'}}>Comments</h3>
            {comments.length !== 0 ? comments.map(item => <CommentItem
               key={item.id}
               author={item.author}
               comment={item.comment}
               clicked={() => dispatch(deleteComment(item.id, comments))}
            />) : <p>Комментариев нет</p>}
            <CommentsForm
                submited={e => dispatch(addNewComment(e, id, comments, comment))}
                changed={e => dispatch(changeValueComment(e))}
                author={comment.author}
                comment={comment.comment}
            />
        </div>
    );
};

export default Comments;