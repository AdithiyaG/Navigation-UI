import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
class HomeScreen extends React.Component {
    render()
    { 
  return (
    <View style={styles.container}>
      <Text>This is Home Screen</Text>
      <Button
        title="play"
        onPress={()=>alert("hello")}
        onPress={()=>this.props.navigation.navigate('Play')}
        >
      </Button>
    </View>
         );
    }
} 
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex:1,alignItems:'center',justifyContent:'center',
    
  },
});