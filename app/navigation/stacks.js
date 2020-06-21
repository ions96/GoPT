import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/home.js';



 class _Stacks {

  getHomeStackbotom(){
    return createStackNavigator({Launch: HomeScreen});
  }

}

const Stacks = new _Stacks();
export default Stacks;

