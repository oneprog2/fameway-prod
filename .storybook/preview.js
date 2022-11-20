import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
export const decorators = [withBackgrounds];
export const parameters = {
  backgrounds: [
      {
        name: 'white',
        value: '#FFFFFF',
        default: true
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'green',
        value: '#00915A'
      },
      {
        name: 'grey',
        value: '#F5F5F5'
      },
    ],
};
