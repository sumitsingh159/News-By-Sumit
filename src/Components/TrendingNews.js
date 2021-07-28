import React,{Component} from 'react';
import { ScrollView, View ,Text, ActivityIndicator,Image,TouchableOpacity} from "react-native";
import config from "../../config/config";

class TrendingNews extends Component {
   
       state = { 
           news: [],
        };
        componentDidMount(){
            fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${config.API_KEY}`).then(res=> 
                res.json()).then(response=>{
                    this.setState({
                        news: response.articles
                    })
                }).catch(error =>{
                    console.log(error);
                })
        }

    render() {
        return (
         <View>
             {
                 this.state.news.length===0? <ActivityIndicator color='white' 
                 size='large' /> :  <ScrollView 
                 horizontal={true} showsHorizontalScrollIndicator={false}>
                 {
                        this.state.news.map((news,index) => (
                            <TouchableOpacity style={{backgroundColor:'#B5392d'}} key={index} onPress={() => this.props.navigation.navigate('WebView', {
                                url: news.url
                            })}>
                            <View style={{margin:10,backgroundColor:'#B5392d'}}>
                                <Image source= {{uri: `${news.urlToImage}`}} style={{height:200,width:300,borderRadius: 40,backgroundColor:'#9b9fa1',borderWidth:3,borderColor:'#Dfd4d3'}} />
                           <View style={{paddingTop:10,paddingLeft:6,}}>
                            <Text style={{width:290,textAlign:'justify',paddingLeft:10,paddingRight:10,fontSize:20,backgroundColor:'#B5392d',borderRadius: 0,borderWidth:0,borderColor:'#000000',color:'#ffffff',fontWeight:'bold'}}>{news.title}</Text>
                            </View>
                            </View>
                            </TouchableOpacity>
                        ))
                 }
             </ScrollView>
             
             }
         </View>
        );
    }
}

export default TrendingNews;