import React, { Component } from 'react';
import { View, Text,Image, FlatList, Button,Dimensions} from 'react-native';
//import { styles } from './styles';
import _ from 'lodash';

const {width} = Dimensions.get('window');

const data = [
  {
    id: 1,
    text: 'Page 1 in Development',
  },
  {
    id: 2,
    text: 'Page 2 in Development',
  },
  {
    id: 3,
    text: 'Page 3 in Development'
  }
  
];

class PaginationComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {
        pageNumber : 0
      }
    }
  
    onScrollEnd(e) {
      let contentOffset = e.nativeEvent.contentOffset;
      let viewSize = e.nativeEvent.layoutMeasurement;
  
      // Divide the horizontal offset by the width of the view to see which page is visible
      let pageNum = Math.floor(contentOffset.x / viewSize.width);
      this.setState({
        pageNumber : pageNum
      })
    }

    keyExtractor = item => item.id.toString();
  
    renderItem({ item}) {
      return (
        <View key={item.id} 
          style={{width: width,
          height:600,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#6B8E23'}}>
          <Text>{item.text}</Text>
        </View>
      )
    }
  
    render() {
      return (
      <View>
        <FlatList
          data={data}
          horizontal
          pagingEnabled
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          onScroll={(e) => this.onScrollEnd(e)} 
        />

<View style={{flexDirection:'row',justifyContent:'center'}}>
{data.map((newitems,index) =>
  index === this.state.pageNumber ? 
  <Button
  title="o"
  color="black">
  </Button>:
  <Button
  title="o">
  </Button>
)}
</View>
      </View>
        
      );
    }

}


export default PaginationComponent;