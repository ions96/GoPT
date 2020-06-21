import LightMode from './lightmode.json';
import DarkMode from './darkmode.json';
import WebCache from '../web/global/WebCache.js';
// const as = 55;
const obj = {
  async getName() {
  	const sele = await WebCache.getdatacache('selectedtheme');
    return sele;
  }
}

 class _GlobalStyles {

	constructor(){
		this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {    
      this.seltheme = await WebCache.getdatacache('selectedtheme'); 
  	};

  getselectedtheme() {
      const selectedtheme = this.seltheme;
      if (selectedtheme=='dark') {
      	return DarkMode;
      }
      else{
      	return LightMode;
      }
    }

}

const GlobalStyles = new _GlobalStyles();
export default GlobalStyles;

