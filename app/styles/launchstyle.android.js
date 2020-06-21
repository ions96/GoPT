import { StyleSheet,Dimensions} from 'react-native';

// import GlobalStyles from '../custom/GlobalStyles.js';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let widthrow = deviceWidth - 40;

// var theme = GlobalStyles.getselectedtheme();



import LightMode from '../custom/lightmode.json';

export default StyleSheet.create(
{
  viewitem: {
    padding:10,
    backgroundColor:LightMode.itemback,
    marginBottom:10,
},
  contentView: {
    padding:10,
    backgroundColor:LightMode.homeback,
},

  viewselth: {
    padding:10,
    width:"100%",
    flexDirection:'row',
},

  buttonlight: {
    width:"50%",    
    alignItems:'center',
    backgroundColor:LightMode.backbuttonreset,
    borderWidth:3,
    borderColor:LightMode.black,
},

  buttondark: {
    width:"50%",
    alignItems:'center',
    backgroundColor:LightMode.backbuttonneutru,
},
button: {
    padding:10,
    backgroundColor:LightMode.backbuttonreset,
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
    color:LightMode.hometexttitle,
    width:"80%"
},
  bodyStyle: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color:LightMode.hometextbody,
},
  idStyle: {    
    fontWeight: 'bold',
    fontSize: 16,
     color:LightMode.hometextid,
    textDecorationLine: 'underline',
},
  textbuttonreset: {
    fontSize: 22,
     color:LightMode.hometextbuton,
},


    
});