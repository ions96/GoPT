 import {Dimensions } from 'react-native';

 class _WebConfig {

 	isTest = true;

 	serverUrlTest = "";
	serverUrlProd = "";

 	postsUrlTest = "https://jsonplaceholder.typicode.com/posts/";
	postsUrlProd = "https://jsonplaceholder.typicode.com/posts/";

	

  	getserverUrl() {
	  	if(this.isTest == true){
			return this.serverUrlTest;
	  	}
		return this.serverUrlProd;
	}
  	getpostsUrl() {
	  	if(this.isTest == true){
			return this.postsUrlTest;
	  	}
		return this.postsUrlProd;
	}
  


}

const WebConfig = new _WebConfig();
export default WebConfig;