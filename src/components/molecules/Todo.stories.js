import Todo from './Todo';

export default {
  title: 'Molecules/Todo',
  component: Todo,
  argTypes: {
    content: { control: 'text' },
    done: { control: 'boolean' },
    createdAt: { control: 'date' },
    completedAt: { control: 'date' },
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    fontSize: { control: 'text' },
    buttonBackgroundColor: { control: 'color' },
    buttonFontColor: { control: 'color' },
    buttonLabel: { control: 'text' },
    buttonWidth: { control: 'text' },
    buttonOnClick: { action: 'Button clicked!' },
    buttonDisabled: { control: 'boolean' },
    height: { control: 'text' },
    width: { control: 'text' },
    padding: { control: 'text' },
  },
  tags: ['molecules', 'todo', 'autodocs'],
};

export const Default = {
  args: {
    content: 'This is a todo',
    done: false,
    createdAt: '2023-07-01T00:00:00.000Z',
    backgroundColor: '#c8adc0',
    fontColor: '#000000',
    fontSize: '16px',
    buttonBackgroundColor: '#7765e3',
    buttonFontColor: '#ffffff',
    buttonLabel: 'Complete Todo',
    buttonDisabled: false,
    height: '80px',
    width: '700px',
    padding: '1rem',
  },
};
