// import {AsyncStorage} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'

 class _WebCache {

  setobjectcache = async (name, obj) => {
    await AsyncStorage.setItem(name, JSON.stringify(obj));
  };

  getobjectcache = async (name) => {
    ob = await AsyncStorage.getItem(name);
    if (ob===null){
      return null;
    }
    obe = JSON.parse(ob);
    return obe;
  }; 

   setdatacache = async (name, data) => {
    await AsyncStorage.setItem(name, data);
  };

  getdatacache = async (name) => {
    data = await AsyncStorage.getItem(name);
    if (data===null){
      return null;
    }
    return data;
  };

   clearallcache = async () => {
    await AsyncStorage.clear();
  };

}

const WebCache = new _WebCache();
export default WebCache;