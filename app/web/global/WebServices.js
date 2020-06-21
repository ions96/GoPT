import DeviceInfo from 'react-native-device-info';
import WebCache from './WebCache.js';
import WebConfig from './WebConfig.js';
// import WebJwt from './WebJwt.js';
import React from 'react';

 class _WebServices extends React.Component{
  //----------------------------------------------------------------------------------------

 async signin(head,userobj) {

      var url = WebConfig.getserverUrl() + WebConfig.getsigninUrl();
      var dataToSend = new Object();


        if(userobj.identifier!=null && userobj.identifier!='undefined'){
             dataToSend['login'] = userobj.identifier;
        }
        if(userobj.password!=null && userobj.password!='undefined'){
             dataToSend['password'] = userobj.password;
        }

        if(head.uid!=null && head.uid!='undefined'){
           dataToSend['device_id'] = head.uid;
        } 
        if(head.apptoken!=null && head.apptoken!='undefined'){
           dataToSend['firebase_token'] = head.apptoken;
        }
        if(head.sn!=null && head.sn!='undefined'){
           dataToSend['_head[sn]'] = head.sn;
        }
        if(head.lc!=null && head.lc!='undefined'){
           dataToSend['_head[lc]'] = head.lc;
        }

        var formBody = [];
          for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
          }
        formBody = formBody.join('&');

       const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: formBody,
        })
       const json = await response.json();
      return json;
  };

 

//----------------------------------------------------------------------------------------
 async logout(head) {
      url = WebConfig.getserverUrl() + WebConfig.getlogout();
       const response = await fetch(url,{headers:head
    })
       const json = await response.json();
      return json;
  };
//----------------------------------------------------------------------------------------  
 

//----------------------------------------------------------------------------------------
 async getposts(head) {
     var url = WebConfig.getpostsUrl();
       const response = await fetch(url,{headers:head
    })
       const json = await response.json();
      return json;
  };
//----------------------------------------------------------------------------------------  
 



}

const WebServices = new _WebServices();
export default WebServices;