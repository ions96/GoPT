 import {Dimensions } from 'react-native';
 // import WebCache from '../global/WebCache.js';

 class _WebLang {

 	async  getlangcache() {
      const getlangcach = await WebCache.getdatacache('selectedlang');
      return getlangcach;
    }

 	// getlangcode(){
 	//  this.getlangcache();
 	//  if (this.lng!= null && this.lng != 'undefined') {
 	//  	return  this.lng ;
 	//  }
 		
 	// }

 	defaultcarency(){
 		defcar = 'ron';
 		return defcar;
 	}

 	defaultlang(){
 		deflang = 'ro';
 		return deflang;
 	}

 	gl(key , lc){

 		if (this.ltext[key] == undefined) {
 			return key;
 		}

 		// lc = this.getlangcode();
 		var va = this.ltext[key];


 		if (va[lc] != undefined) {
 			return va[lc];
 		}

 		if (va['_default']!= undefined) {
 			return va['_default'];
 		}

 		return key;
 	}

 	ltext = {
 		'exemp' : {
 			'en': 'example',
 			'ro': 'exemplu',
 			'_default': 'exe',
 		},
 		'_id' : {
 			'en': 'ID: ',
 			'ro': 'ID: ',
 			'_default': 'id',
 		},
 		'_reset' : {
 			'en': 'RESET',
 			'ro': 'RESET',
 			'_default': 'reset',
 		},
 		'_dark' : {
 			'en': 'DARK',
 			'ro': 'DARK',
 			'_default': 'dark',
 		},
 		'_light' : {
 			'en': 'LIGHT',
 			'ro': 'LIGHT',
 			'_default': 'light',
 		},

 	};



}

const WebLang = new _WebLang();
export default WebLang;