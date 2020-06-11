import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class ContactScreen extends React.Component {
    render()
    { 
  return (
    <View style={styles.container}>
      <Text>This is Contact Screen</Text>
    </View>
         );
    }
}
export default ContactScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,alignItems:'center',justifyContent:'center',
   
  },
});