import { useState } from "react";
import {
  TextField,
  Button,
} from '@mui/material';

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        // multiline
        // maxRows={1}
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={onSubmit} disabled={isTextareaDisabled}>
        {submitLabel}
      </Button>
      {hasCancelButton && (
        <Button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      )}
    </form>
  );
};

export default CommentForm;