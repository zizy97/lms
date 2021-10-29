import React, { useState } from "react";

import {
  Button,
  Container,
  FlexRow,
} from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";

import Input from "../../../components/Input";

export default function AddBookDialog({ handleClose, show }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const clearInput = () => {
    setTitle("");
    setAuthor("");
  };

  const sendDone = () => {
    if (title !== "" && author !== "") {
      const data = { title, author };
      clearInput();
      handleClose(true, data);
    } else if (title === "") {
      window.alert("Please enter a title to add");
    } else {
      window.alert("Please enter the author of the book to add");
    }
  };

  const sendCancel = () => {
    clearInput();
    handleClose(false, null);
  };

  return (
    <Modal show={show}>
      <DialogBox>
        <h2>Add Book</h2>
        <p>Enter the below details of the book</p>
        <Container alignItems="center" disableFullWidth>
          <Input
            label={"Title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            name="title"
            required
            minLength="1"
          />
          <Input
            label={"Author"}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            id="author"
            name="author"
            required
            minLength="1"
          />
        </Container>

        <FlexRow>
          <Button onClick={sendDone}>Done</Button>
          <Button onClick={sendCancel} color="secondary">
            Cancel
          </Button>
        </FlexRow>
      </DialogBox>
    </Modal>
  );
}
