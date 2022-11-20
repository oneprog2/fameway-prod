import {AppRegistry} from 'react-native';

import {name as appName} from './package.json';

import App from './App';

AppRegistry.registerComponent(appName, () => App);
if (process.env.NODE_ENV !== 'test') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root')
  });
}
