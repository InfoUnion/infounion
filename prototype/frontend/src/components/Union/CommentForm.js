import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  CardActions,
  Card,
  Divider
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
    <React.Fragment>
      <Card
        elevation={0}>
        <TextField
          fullWidth
          label='Comment'
          multiline
          rows={3}
          value={text}
          onSubmit={onSubmit}
          onChange={(e) => setText(e.target.value)}
        />
        <CardActions>
          <Button
            onClick={onSubmit}
            disabled={isTextareaDisabled}
          >
            {submitLabel}
          </Button>

          {hasCancelButton && (
            <Button
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default CommentForm;