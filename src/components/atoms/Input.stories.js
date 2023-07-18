import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    onChange: { action: 'onChange' },
    height: { control: 'text' },
    width: { control: 'text' },
    fontSize: { control: 'text' },
    border: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: { control: 'text' },
  },
  tags: ['atoms', 'input', 'autodocs'],
};

export const Default = {
  args: {
    placeholder: 'Placeholder',
    height: '50px',
    width: '300px',
    fontSize: '16px',
    border: true,
    disabled: false,
    type: 'text',
  },
};
