import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TodoTask } from "./TodoTask";

export default {
    title: 'Task',
    component: TodoTask,

} as ComponentMeta<typeof TodoTask>;

const Template: ComponentStory<typeof TodoTask> = (args) => <TodoTask {...args} />;

export const Main = Template.bind({});
Main.args = {
    task: {
        title: 'Test task',
        done: false,
        id: 0,
    }
};