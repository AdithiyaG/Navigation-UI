import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class CopyScreen extends React.Component {
    render()
    { 
  return(
    <View style={styles.container}>
      <Text>This is Copy Screen</Text>
    </View>
         );
    }
};
export default CopyScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,alignItems:'center',justifyContent:'center',
    
  },
});