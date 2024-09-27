import {useEffect, useState} from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, FlatList, Linking} from "react-native"; 


export default function Mynewscard(){
    const [currnewsdata,setnewsdata] = useState();
    const mynewsdata = async()=>{
        try{
            const response = await fetch('https://newsapi.org/v2/everything?q=pakistan&from=2024-09-18&to=2024-09-18&sortBy=popularity&apiKey=b0f3dd11f85640c78db48549a62187a4');
            const MyNewsdata = await response.json();
            setnewsdata(MyNewsdata.articles);
        }
        catch(error){
            console.log(console.error);
        }
    }

    useEffect(()=>{
        mynewsdata();
    },[]);

    return(
        <FlatList
        data={currnewsdata}
        keyExtractor={(Item,index)=>index}
        renderItem={({item,index})=>{
            return(
                <View style={styles.newscard}>
                <Text style={styles.newstitle}>{item.title}</Text>
            <View style={{flex:0,width:"100%",alignItems:"center"}}>
              <Image source={{uri: item.urlToImage}} style={{width:"100%",height:200}}/>
            </View>
      
            <Text style={styles.newsdesc}>{item.description}</Text>
      
            <TouchableOpacity style={styles.readmorecontainer} onPress={()=>{Linking.openURL(item.url)}}>
              <Text style={styles.readmorebtn}>Read Mode {">"}</Text>
            </TouchableOpacity>
      
            
            </View>
            )
        }}
        />
    );
}

const styles = StyleSheet.create({
    newscard: {
     // borderColor: "black",
     // borderWidth:1,
      backgroundColor:"white",
      width:"98%",
      borderRadius:10,
      marginVertical:10
    },
    newstitle:{
      fontSize:25,
      padding:5,
      fontWeight:"700"
    },
    newsdesc:{
      fontSize:17,
      margin:10
    },
    readmorebtn:{
      backgroundColor:"black",
      color:"white",
      fontSize:20,
      fontWeight:"700",
      margin:10,
      padding:10,
      borderRadius:10
    },
    readmorecontainer:{
      flex:0,
      flexDirection:"row",
      justifyContent:"center"
    },
  });
  