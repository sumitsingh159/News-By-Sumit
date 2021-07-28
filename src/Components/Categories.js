import React,{Component} from "react";
import { ScrollView, View ,Text, TouchableOpacity} from "react-native";

const categories = [
    'Entertainment',
    'Business',
    'Science',
    'Health',
    'Technology',
    'Sports',
  ]
//   const categories = [
//     'Entertainment',
//     'Business',
//     'Politics',
//     'Health',
//     'Technology',
//     'Sports',
//   ]

class Categories extends Component {
 
       state = {  };
  
    render() {
        return (
            <View style={{flexDirection:'column',color:'white'}}>
                 <Text style={{color:'white',fontWeight:'bold',fontSize:17}} >Swipe</Text>
                 
            <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false} style={{color:'black'}} >
                          
                {
                    categories.map((category, index)=>(
                        <TouchableOpacity key={index} onPress={()=>this.props.navigation.navigate('GetNews', {
                            category,
                          })}>
                               
                        <View >
                           <Text style={{padding:10,borderWidth:3,color:'white',fontWeight:'bold',
                                borderColor:'#9b9fa1',fontSize:19,margin:10,borderRadius:20}}>{category}</Text>
                        </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView></View>
        );
    }
}

export default Categories;