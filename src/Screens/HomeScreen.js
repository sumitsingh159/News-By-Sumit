import React,{Component} from "react";
import {Text,TouchableOpacity,View,Linking} from "react-native";
import config from "../../config/config";
import Categories from "../Components/Categories";
import TrendingNews from "../Components/TrendingNews";

class HomeScreen extends Component {
//    componentDidMount(){
//        console.log(config.API_KEY)
//    }

    render() {
        return (
            <View style={{backgroundColor:'black'}}>

                <Categories navigation={this.props.navigation}/>
                <TrendingNews navigation={this.props.navigation}/>
                <Text>HomeScreens</Text>
                <View style={{backgroundColor:'white',flexDirection:'column',height:10000,alignItems:'center',alignContent:'center',paddingTop:20}}>
                <Text style={{fontWeight:'bold',fontSize:24,paddingTop:50}}>SUMIT SINGH</Text>
                <View style={{paddingTop:20}}>
                <TouchableOpacity style={{height:50,width:270,paddingTop:10,backgroundColor:'black',alignContent:'center',alignItems:'center',borderRadius:30,alignSelf:'center'}}
                onPress={ ()=>{ Linking.openURL('https://www.instagram.com/sumitsingh159/')}}>
                    <Text style={{fontSize:24,color:'white',fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',paddingTop:-50,textAlign:'justify',paddingBottom:60}}>Profile</Text>
                </TouchableOpacity>
                </View></View>
            </View>
        );
    }
}

export default HomeScreen;