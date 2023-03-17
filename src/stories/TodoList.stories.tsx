import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TodoList } from "./TodoList";

export default {
    title: "Task list",
    component: TodoList
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;

export const Main = Template.bind({});
Main.args = {
    tasks: [
        {
            id: 0,
            done: false,
            title: "Walk the dog"
        },
        {
            id: 1,
            done: true,
            title: "Code the storybook"
        },
        {
            id: 2,
            done: false,
            title: "Eat a lunch"
        }
    ]
}