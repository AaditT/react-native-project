import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Functional Component
// const AlbumList = (props) => {
//   const { textStyle, viewStyle } = styles;
//   return (
//     <View style={viewStyle}>
//     <Text style={textStyle} >{ props.albumText }</Text>
//     </View>
//   );
// };

// Class Component
class AlbumList extends Component {

  componentWillMount() {
    console.log('componentWillMount');
  }
  
  render() {
    return (
      <View><Text>Album List!</Text></View>
    );
  }
}
// const styles = {
//
//     viewStyle: {
//       backgroundColor: 'blue',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: 120,
//       paddingTop: 30,
//       shadowColor: 'yellow',
//       shadowOffset: { width: 0, height: 8 },
//       shadowOpacity: 0.5,
//     },
//     textStyle: {
//       fontSize: 50,
//       color: 'white'
//     }
//   };
export default AlbumList;
