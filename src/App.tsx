import * as React from "react";
import { Button, Center, ChakraProvider, Container } from "@chakra-ui/react";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";
import { Wrapper } from "./components/Wrapper";
import { Stats } from "./components/Stats";
import theme from "./theme";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Task } from "./types/Task";
import { useEffect, useState } from "react";
import { getTimeDiff } from "./utils";
import { TASKS_STORAGE_KEY } from "./constants";

const timeStarted = new Date();
let interval: NodeJS.Timeout;

interface AppProps {
  withLocalStorage?: "true" | "false";
}

export const App: React.FC<AppProps> = ({ withLocalStorage = "true" }) => {
  const [Tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (withLocalStorage !== "true") return;
    console.log(withLocalStorage);
    const jsonString = localStorage.getItem(TASKS_STORAGE_KEY) || "";
    if (jsonString === "") return;
    setTasks(JSON.parse(jsonString));
  }, [withLocalStorage]);

  useEffect(() => {
    if (withLocalStorage !== "true") return;
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(Tasks));
  }, [Tasks, withLocalStorage]);

  const [productiveTime, setProductiveTime] = useState<string>(
    getTimeDiff(timeStarted, new Date())
  );

  console.log(productiveTime);

  clearInterval(interval);
  interval = setInterval(() => {
    setProductiveTime(getTimeDiff(timeStarted, new Date()));
  }, 1000);

  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Wrapper>
          <InputTask Tasks={Tasks} setTasks={setTasks} />
          <TaskList Tasks={Tasks} setTasks={setTasks} />
        </Wrapper>
      </Container>

      {/* make this into a footer */}
      <Stats productiveTime={productiveTime} />

      <Center>
        <ColorModeSwitcher />
      </Center>
      <Center>
        <Button>new board</Button>
      </Center>
    </ChakraProvider>
  );
};
