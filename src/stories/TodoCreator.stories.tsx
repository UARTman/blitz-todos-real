import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TodoTask } from "./TodoTask";
import { TodoCreator } from "./TodoCreator";

export default {
    title: 'Task creator',
    component: TodoCreator,

} as ComponentMeta<typeof TodoCreator>;

const Template: ComponentStory<typeof TodoCreator> = (args) => <TodoCreator {...args} />;

export const Main = Template.bind({});