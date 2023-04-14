/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/screen/navigation';
import {name as appName} from './app.json';
import HomePage from './src/screen/homemarlin';
import MyTabs from './src/screen/bottomNav';

AppRegistry.registerComponent(appName, () => App);
