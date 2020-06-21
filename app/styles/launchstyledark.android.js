import { StyleSheet,Dimensions} from 'react-native';

// import GlobalStyles from '../custom/GlobalStyles.js';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let widthrow = deviceWidth - 40;

// var theme = GlobalStyles.getselectedtheme();

import DarkMode from '../custom/darkmode.json';

export default StyleSheet.create(
{ 
  viewitem: {
    padding:10,
    backgroundColor:DarkMode.itemback,
    marginBottom:10,
},
  contentView: {
    padding:10,
    backgroundColor:DarkMode.homeback,
},

  viewselth: {
    padding:10,
    width:"100%",
    flexDirection:'row',
},
  buttonlight: {
    width:"50%",    
    alignItems:'center',
    backgroundColor:DarkMode.backbuttonneutru,
},
  buttondark: {
    width:"50%",
    alignItems:'center',
    backgroundColor:DarkMode.backbuttonreset,
    borderWidth:3,
    borderColor:DarkMode.white,
},
button: {
    padding:10,
    backgroundColor:DarkMode.backbuttonreset,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:2,
    marginBottom:20
},
  viewrow: {
    flexDirection:'row',
    width:widthrow,
    justifyContent: 'space-between',
},
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color:DarkMode.hometexttitle,
    width:"80%"
},
  bodyStyle: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color:DarkMode.hometextbody,
},
  idStyle: {    
    fontWeight: 'bold',
    fontSize: 16,
     color:DarkMode.hometextid,
    textDecorationLine: 'underline',
},
  textbuttonreset: {
    fontSize: 22,
     color:DarkMode.hometextbuton,
},


    
});