/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import DuyScreen from "./screens/DuyScreen";
import IntroScreen from "./screens/IntroScreen";
import {name as appName} from './app.json';


// AppRegistry.registerComponent(appName, () => () => <DuyScreen x = {3} y={6}
// fruit={{
//     name: 'Banana',
//     quality: 'Excelent',
// }}/>);
// AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => IntroScreen);
