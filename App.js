import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Mynewscard from './components/mynewscard';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
           <Text style={{color:"green",fontSize:40,fontWeight:"700",margin:10}}>Pakistan Daily 🇵🇰</Text>
      </View>
      {/* News Card Display and Content*/}

      <View style={styles.allnewscontainer}>
        <Mynewscard/>
    
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop:25,
  },
  allnewscontainer:{
    flex:1,
    backgroundColor:"#beebca",
    width:'100%',
    alignItems:"center"
  },
});
