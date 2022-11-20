import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import {  ComponentMeta } from '@storybook/react-native';

import { Button as ButtonComponent,  } from '@components';

export const Basic = {
  args: {
    title: 'Hello World!!',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const Outlined = {
  args: {
    outlined: true,
  },
};

const docDescription = `
This component contains all buttons types.
`;

export default {
  title: 'Strivee/components/buttons/Button',
  component: ButtonComponent,
  argTypes: {
    size: { control: 'select', options: ['s', 'm', 'l'] },
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
  },
  args: {
    propertyA: 'Item One',
    title: 'title',
    titleOptions: {
      size: 't1',
      position: 'center',
      weight: 'bold',
    },
    smallWithIcon: false,
    disabled: false,
    size: 'm',
    backgroundColor: undefined,
    outlined: false,
    rounded: 's',
    leftIcon: {
      name: 'SvgIcon',
      color: 'red',
      size: 20,
    },
    rightIcon: {
      name: 'SvgIcon',
      color: 'red',
      size: 20,
    },
    loading: false,
    elevation: 1,
  },
  parameters: {
    docs: {
      description: {
        component: docDescription,
      },
    },
    notes: docDescription,
  },
  decorators: [withBackgrounds],
} as ComponentMeta<typeof ButtonComponent>;
