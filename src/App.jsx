import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const Container = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentWrapper = styled.div`
  width: 55%;
  height: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8%;
`;
const TimeWrapper = styled.div`
  margin: 5%;
  width: 80%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid yellow;
  background-color: white;
`;
const Time = styled.div`
  font-size: 20px;
`;
function App() {
  const [timer, setTimer] = useState("00:00:00");
  const [calender, setCalender] = useState("0000년00월00일");
  const [day, setDay] = useState("");

  useEffect(() => {
    const Timer = setInterval(() => {
      const time = new Date();
      setTimer(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
      setCalender(
        `${time.getFullYear()}년${time.getMonth()}월${time.getDate()}일`
      );
      setDay(`${time.getDay()}`);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <TimeWrapper>
          <Time>{calender}</Time>
          <Time>{timer}</Time>
        </TimeWrapper>
        <InputTodo></InputTodo>
        <TodoList></TodoList>
      </ContentWrapper>
    </Container>
  );
}

export default App;
