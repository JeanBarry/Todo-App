import TodoInput from './TodoInput';

export default {
  title: 'Molecules/TodoInput',
  component: TodoInput,
  argTypes: {
    backgroundColor: { control: 'color' },
    height: { control: 'text' },
    width: { control: 'text' },
    fontSize: { control: 'text' },
    inputWidth: { control: 'text' },
    inputPlaceholder: { control: 'text' },
    onButtonClick: { action: 'Todo added' },
    buttonLabel: { control: 'text' },
    border: { control: 'boolean' },
  },
  tags: ['molecules', 'todo', 'autodocs'],
};

export const Default = {
  args: {
    backgroundColor: '#edd3c4',
    width: '700px',
    inputWidth: '545px',
    fontSize: '16px',
    inputPlaceholder: 'What do you want to do?',
    buttonLabel: 'Add Todo',
    border: false,
  },
};
