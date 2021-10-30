import { Box } from "@chakra-ui/react";
import React from "react";
import { Task } from "../types/Task";
import { TaskField } from "./TaskField";

interface TaskListProps {
  Tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskList: React.FC<TaskListProps> = ({ Tasks, setTasks }) => {
  return (
    <Box mt={8} mb={8}>
      {Tasks.map((task: Task) => {
        return (
          <TaskField
            Tasks={Tasks}
            setTasks={setTasks}
            TaskObj={task}
            key={task.id}
          />
        );
      })}
    </Box>
  );
};
