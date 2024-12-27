import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';


export default function App() {
  const [color,setcolor]=useState('#ffffff')


  const GenerateRandomColor=()=>{
    const HexRange='1234567890ABCDEF'

    let genColor='#'

    for(let i=0;i<6;i++){
      genColor+=HexRange[Math.floor(Math.random()*16)]
    }
    setcolor(genColor)
  }


  
  
  
  return (

      <View style={[styles.container,{backgroundColor: color}]}>
        <Button
        title='Press Me'
        onPress={GenerateRandomColor}
        />
       
      <StatusBar style="auto" />
    </View>
  
    
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
   

  },

  



});
