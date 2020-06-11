import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class PlayScreen extends React.Component {
    static navigationOptions={
      title:"Play"
    };
  render()
    { 
  return (
    <View style={styles.container}>
      <Text>This is Play Screen </Text>
    </View>
         );
    }
}
export default PlayScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,alignItems:'center',justifyContent:'center',
    
  },
});