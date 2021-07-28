// import React, {Component} from 'react';
// import {
//   ActivityIndicator,
//   ScrollView,
//   Text,
//   View,
//   Image,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import config from "../../config/config";

// const deviceHeight = Dimensions.get('window').height;
// const deviceWidth = Dimensions.get('window').width;


// class GetNews extends Component {
   
//        state = { 
//         news: []
//         };
//        componentDidMount(){
//         this.props.navigation.setOptions({
//             title: this.props.route.params.category
//           });

//           fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.route.params.category}&country=in&apiKey=${config.API_KEY}`).then(res=> 
//           res.json()).then(response=>{
//               this.setState({
//                   news: response.articles
//               })
//              // console.log(response)
//           }).catch(error =>{
//               console.log(error);
//           })
//        }
    
//     render() {
//         return (
//             <View style={{alignItems: 'center'}}>
//                 {
//                     this.state.news.length === 0 ? 
//                     <ActivityIndicator  style={{
//                         height: deviceHeight,
//                         width: deviceWidth,
//                         alignItems: 'center',
//                         justifyContent: 'center', }} size='large' color='black' /> :(
//                         <ScrollView showsVerticalScrollIndicator={false}>
                           
//                             {
//                                 this.state.news.map((news, index)=>
//                                   news.urlToImage ?( <TouchableOpacity> <View style={{display:'flex',flexDirection:'row',backgroundColor:'white',
//                                   borderRadius:10,elevation:4, width: deviceWidth - 30, marginVertical: 7,}} key={index}>

//                                   <Image  source={{uri: `${news.urlToImage}`}} 
//                                   style={{height: 100, width: 100, borderRadius: 10}}/>

//                                     <Text  style={{
//                         width: deviceWidth - 130,
//                         paddingLeft: 15,
//                         paddingTop: 15,textAlign:'justify',paddingRight:15 }} > {news.title} </Text>
//                                 </View> </TouchableOpacity>) : null
//                                 ))
//                             }
                          
//                         </ScrollView>
//                     )
//                 }
//             </View>
//         );
//     }
// }

// export default GetNews;
import React, {Component} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import config from '../../config/config';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class GetNews extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.category,
    });

    fetch(
      `https://newsapi.org/v2/top-headlines?category=${this.props.route.params.category}&country=in&apiKey=${config.API_KEY}`,
    )
      .then(res => res.json())
      .then(response => {
        this.setState({
          news: response.articles,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{alignItems: 'center',backgroundColor:'#000000'}}>
        {this.state.news.length === 0 ? (
          <ActivityIndicator
            style={{
              height: deviceHeight,
              width: deviceWidth,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            size="large"
            color="white"
          />
        ) : (
            
          <ScrollView  showsVerticalScrollIndicator={false}>
            {this.state.news.map((news, index) =>
              news.urlToImage ? (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    this.props.navigation.navigate('WebView', {
                      url: news.url,
                    })
                  }>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      backgroundColor: '#B5392d',
                      borderRadius: 10,
                      elevation: 4,
                      width: deviceWidth - 30,
                      marginVertical: 7,
                      borderColor:'#B5392d',
                      borderWidth:3
                    }}>
                    <Image
                      source={{uri: `${news.urlToImage}`}}
                      style={{height: 100, width: 100, borderRadius: 10}}
                    />
                    <View style={{}}>
                    <Text
                      style={{
                        width: deviceWidth - 130,
                        paddingLeft: 10,
                        paddingTop: 5,
                        color:'white',
                        fontSize:19,
                        fontWeight:'bold'
                      }}>
                      {news.title}
                    </Text></View>
                  </View>
                </TouchableOpacity>
              ) : null,
            )}
          </ScrollView>
        )}
      </View>
    );
  }
}

export default GetNews;
