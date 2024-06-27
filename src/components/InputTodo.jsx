import React from "react";
import { useState } from "react";
import { add } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
`;
const InputWrapper = styled.form`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const TextWrapper = styled.input`
  width: 80%;
  border-radius: 15px;
  outline: none;
  padding: 2%;
`;
const SubmitWrapper = styled.input`
  width: 10%;
  border-raidus: 50%;
`;
const InputTodo = () => {
  const dispatch = useDispatch();

  const [todolist, setTodolist] = useState({
    id: 0,
    text: "",
  });

  const handleText = (e) => {
    setTodolist({ text: e.target.value });
  };
  const onReset = () => {
    setTodolist({ text: "" });
  };

  return (
    <Container>
      <InputWrapper
        onSubmit={(e) => {
          e.preventDefault();
          if (todolist.text !== "") {
            dispatch(add(todolist.text));
          } else {
            alert("할 일을 입력해!");
          }
          onReset();
        }}
      >
        <TextWrapper type="text" value={todolist.text} onChange={handleText} />
        <SubmitWrapper type="submit" value="+" />
      </InputWrapper>
    </Container>
  );
};

export default InputTodo;
