import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../reducers/TaskSlice";

const TaskList = () => {
    const dispatch = useDispatch();
    const { task, loadingStatus } = useSelector((state) => state.task);

    useEffect(() => {
        console.log(loadingStatus);
        if (loadingStatus === "") {
            dispatch(getTask());
        }
    }, [loadingStatus, dispatch]);

    return (
        <div>
            <h2>TaskList</h2>
            {loadingStatus === "loading" && <div>Loading</div>}
            {loadingStatus === "failed" && <div>Error loading task</div>}
            {loadingStatus === "succeeded" && (
                <ul>
                    {task.map((task) => (
                        <li key={task.id}>
                            {task.title} - {task.completed ? "Completed" : "In progress"}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;