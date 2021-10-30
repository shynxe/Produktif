import { AddIcon } from "@chakra-ui/icons";
import { Flex, FormControl, IconButton, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { INPUT_PLACEHOLDER } from "../constants";
import { Task } from "../types/Task";
import { MotionBox } from "./Motions";

interface InputTaskProps {
  Tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const InputTask: React.FC<InputTaskProps> = ({ Tasks, setTasks }) => {
  const [TaskInput, setTaskInput] = useState<string>("");

  const taskInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const taskAddHandler = (e: any) => {
    e.preventDefault();
    setTasks([...Tasks, new Task(TaskInput)]);
    setTaskInput("");
  };

  return (
    <MotionBox whileHover={{ scale: 1.05 }}>
      <form onSubmit={taskAddHandler} autoComplete="off">
        <FormControl id="taskinput">
          <Flex>
            <Input
              onChange={taskInputHandler}
              mr={2}
              variant="filled"
              placeholder={INPUT_PLACEHOLDER}
              value={TaskInput}
            />
            <IconButton
              aria-label="done"
              icon={<AddIcon />}
              size="md"
              variant="solid"
              type="submit"
            />
          </Flex>
        </FormControl>
      </form>
    </MotionBox>
  );
};
