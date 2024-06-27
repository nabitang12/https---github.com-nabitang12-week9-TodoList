import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import styled from "styled-components";

const List = styled.li`
  width: 100%;
  list-style-type: none;
  display: flex;
`;
const TodoList = () => {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(todolist);

  const todoListView = todolist.map((todo, idx) => (
    <List key={todolist[idx].id}>
      <input
        type="checkbox"
        onChange={() => dispatch(complete(todolist[idx].id))}
      />
      <div>
        {todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}
      </div>
      <button type="button" onClick={() => dispatch(remove(todolist[idx].id))}>
        삭제
      </button>
    </List>
  ));

  return (
    <>
      <ul>{todoListView}</ul>
    </>
  );
};

export default TodoList;
