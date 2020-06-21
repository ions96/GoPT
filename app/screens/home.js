import React from 'react';
import {ActivityIndicator, Text, View, StatusBar,SafeAreaView,FlatList,TouchableOpacity,} from 'react-native';
import WebCache from '../web/global/WebCache.js';

import WebServices from '../web/global/WebServices.js';

import Styles from '../styles/launchstyle';
import Stylesdark from '../styles/launchstyledark';

import WebLang from '../web/global/WebLang.js';
import GlobalStyles from '../custom/GlobalStyles.js';

import styled from 'styled-components';

const Container = styled.View`
 flex: 1;
 height:100%;
 width:100%;
 justify-content: center;
 align-items: center;
 background-color:'rgba(255,255,255,0.5)';
`;
 
export default class Launch extends React.Component {

    constructor(props){
        super(props);
         this.state ={ langcode: '',isLoading: true, }
    }

   async  componentDidMount() {

   	this.selectedtheme = await WebCache.getdatacache('selectedtheme');
    if (this.selectedtheme!='undefined' && this.selectedtheme!= null && this.selectedtheme!= '') {
     this.state.theme = this.selectedtheme;
    }
    else{
       this.state.theme = "light";
    }

    this.langcode = await WebCache.getdatacache('selectedlang');
    if (this.langcode!='undefined' && this.langcode!= null && this.langcode!= '') {
     this.state.langcode = this.langcode;
    }
    else{
       this.state.langcode = WebLang.defaultlang();
    }

    this.response =  await WebServices.getposts();

    StatusBar.setHidden(true);

    this.state.isLoading = false;
    this.forceUpdate();
  }

  static navigationOptions = {
        header: null,
  };
   handleClick (){
    console.warn("la prima faza nu are functie");
  };

  handleClicklight = async () => {
    this.setState({theme: "light"});
    const gselectedtheme= await WebCache.setdatacache('selectedtheme','light');
 
  };
  handleClickdark = async () => {    
    this.setState({theme: "dark"});
    const gselectedtheme= await WebCache.setdatacache('selectedtheme','dark');
  };


  myRenderPosts(item,index){
    var title = item.title.replace( /\n/g, '' );
    var body = item.body.replace( /\n/g, '' );
       return(
            <View style={(this.state.theme=='light')?Styles.viewitem:Stylesdark.viewitem}>
              <View style={(this.state.theme=='light')?Styles.viewrow:Stylesdark.viewrow}>
                <Text style={(this.state.theme=='light')?Styles.titleStyle:Stylesdark.titleStyle}>{title.substring(0, 40) + ((title.length>40)?"...":"")}</Text>
                <Text style={(this.state.theme=='light')?Styles.idStyle:Stylesdark.idStyle}>{WebLang.gl('_id',this.langcode) + item.id}</Text>
              </View>                             
                <Text style={(this.state.theme=='light')?Styles.bodyStyle:Stylesdark.bodyStyle}>{body.substring(0, 100) + ((body.length>100)?"...":"")}</Text>
            </View>
        );
    }



    render() {
      if(this.state.isLoading){
        return(
          <SafeAreaView style={{flex: 1,backgroundColor: '#ffffff'}}>
           <Container>
            <ActivityIndicator size={'large'} color="#ff2358" />
           </Container>
          </SafeAreaView>
        )
      }
      return (
        <SafeAreaView>
          <View style={(this.state.theme=='light')?Styles.contentView:Stylesdark.contentView}>

          <View style={(this.state.theme=='light')?Styles.viewselth:Stylesdark.viewselth}>
            <TouchableOpacity
               style={(this.state.theme=='light')?Styles.buttonlight:Stylesdark.buttonlight}
               onPress={() => this.handleClicklight()}
             >
               <Text style={(this.state.theme=='light')?Styles.textbuttonreset:Stylesdark.textbuttonreset}> {WebLang.gl('_light',this.langcode)}</Text>
             </TouchableOpacity>

            <TouchableOpacity
               style={(this.state.theme=='light')?Styles.buttondark:Stylesdark.buttondark}
               onPress={() => this.handleClickdark()}
             >
               <Text style={(this.state.theme=='light')?Styles.textbuttonreset:Stylesdark.textbuttonreset}> {WebLang.gl('_dark',this.langcode)}</Text>
             </TouchableOpacity>
          </View>




            <TouchableOpacity
               style={(this.state.theme=='light')?Styles.button:Stylesdark.button}
               onPress={() => this.handleClick()}
             >
               <Text style={(this.state.theme=='light')?Styles.textbuttonreset:Stylesdark.textbuttonreset}> {WebLang.gl('_reset',this.langcode)}</Text>
             </TouchableOpacity>

            <FlatList
              showsVerticalScrollIndicator ={false}
              keyExtractor={(item, index) => index.toString()}
              data={this.response}
              renderItem={({ item, index })=>
                 (this.myRenderPosts(item,index))
              }
            />

          </View>
        </SafeAreaView>
    );    
    }


}