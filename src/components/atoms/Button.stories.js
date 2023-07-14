import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    height: { control: 'text' },
    width: { control: 'text' },
    fontSize: { control: 'text' },
    stylingType: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary'],
    },
    disabled: { control: 'boolean' },
  },
  tags: ['atoms', 'button', 'autodocs'],
};

export const Default = {
  args: {
    label: 'Click me',
    backgroundColor: '#7765e3',
    fontColor: '#ffffff',
    fontSize: '16px',
    stylingType: 'primary',
    disabled: false,
  },
};
