import React, { useState, useEffect, useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function Input(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(addTodo)
    props.onSubmit({
      id: uuidv4(),
      text: input,
    });
    setInput("");
  };
  // console.log(input)
  return (
    <Form>
      <Row>
        <Col className="mb-5">
          {props.edit ? <><Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
              type="text"
              placeholder="Enter task"
              value={input}
              name="text"
              onChange={handleChange}
              ref={inputRef}
              style={{width: "80%", margin: 'auto'}}
            />
          </Form.Group>
       
          <Button className="input-btn" onClick={handleSubmit}>
            Update
          </Button></> : <><Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
              type="text"
              placeholder="Enter task"
              value={input}
              name="text"
              onChange={handleChange}
              ref={inputRef}
              style={{width: "80%", margin: 'auto'}}
            />
          </Form.Group>
       
          <Button className="input-btn" onClick={handleSubmit}>
            Add Task
          </Button></>}
        </Col>
      </Row>
    </Form>
  );
}

export default Input;
