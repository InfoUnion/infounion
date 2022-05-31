import React from 'react'

import {
  Card,
  CardHeader,
  Button,
  Avatar,
  CardContent,
  CardActions
} from '@mui/material'

//import PersonIcon from '@mui/icons-material/Person' 
import CommentForm from './CommentForm'

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === 'editing'

  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === 'replying'

  const fiveMinutes = 300000
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed

  const canReply = Boolean(currentUserId)

  const canEdit = currentUserId === comment.userId && !timePassed

  const replyId = parentId || comment.id

  const createdAt = new Date(comment.createdAt).toLocaleDateString()

  return (
    <>
      <Card
        key={comment.id}
        className='comment'
        elevation={0}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#12512' }} aria-label='recipe'>
              {comment.username[0]}
            </Avatar>
          }
          title={comment.username}
          subheader={createdAt}
        />
        <CardContent>
          {!isEditing && <div className='comment-text'>{comment.body}</div>}
        </CardContent>
        <CardActions>
          {canReply && (
            <Button
              className='comment-action'
              onClick={() =>
                setActiveComment({ id: comment.id, type: 'replying' })}
            >
              Reply
            </Button>
          )}
          {canEdit && (
            <Button
              className='comment-action'
              onClick={() =>
                setActiveComment({ id: comment.id, type: 'editing' })}
            >
              Edit
            </Button>
          )}
          {canDelete && (
            <Button
              className='comment-action'
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </Button>
          )}
        </CardActions>

        {isEditing && (
          <CommentForm
            submitLabel='Update'
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null)
            }}
          />
        )}

        {isReplying && (
          <CommentForm
            submitLabel='Reply'
            hasCancelButton
            handleSubmit={(text) => addComment(text, replyId)}
            handleCancel={() => {
              setActiveComment(null)
            }}
          />
        )}

        <CardContent>
          {replies.length > 0 && (
            <div className='replies'>
              {replies.map((reply) => (
                <Comment
                  comment={reply}
                  key={reply.id}
                  setActiveComment={setActiveComment}
                  activeComment={activeComment}
                  updateComment={updateComment}
                  deleteComment={deleteComment}
                  addComment={addComment}
                  parentId={comment.id}
                  replies={[]}
                  currentUserId={currentUserId}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}

export default Comment
