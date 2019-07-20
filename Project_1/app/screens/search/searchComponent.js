import React, { Component } from 'react';
import { PanResponder, View , Text, TouchableOpacity,ImageBackground,Image} from 'react-native';
import MapView ,{PROVIDER_GOOGLE} from 'react-native-maps'


class searchComponent extends Component {

    constructor(props){
        super(props);


    this.panResponder = PanResponder.create({

      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: () => {

        if (this.state.isFromLocationScreen) {

          this.setState({
            searchBarText:
              strings("doctorSearch.initalSearchText"),
            showRecentLocation: true
          });
          this.setState({ isFromLocationScreen: false });

        }

      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: () => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: () => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      }

    })

        this.state={
            promiseVal : '',
            //flatListData : data,
            loading:false,
            noData : false,
            isFromLocationScreen : false
        }

      }

    render() {
      return(
        <View style={{flex:1}}>
          <ImageBackground source={require('../../images/header.png')}  style={{width:'100%'}}>
                 <View style={{flexDirection:'row',height:'15%',width:'100%'}}>
                 <TouchableOpacity style={{marginLeft:'2%',marginTop:'11%',height:50,width:50}} onPress={() => this.props.navigation.goBack()}>
                <Image source={require('../../images/arrow.png')} style={{height:50,width:50}}/>
                </TouchableOpacity>
                    <View style={{alignItems:'center',justifyContent:'center',marginLeft:'8%',width:'50%',height:20,marginTop:'10%'}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>
                        {"DIRECTION TO PARK"}
                        </Text>
                    </View>
                    <Image source={require('../../images/icon.png')} style={{marginLeft:'10%',marginTop:'11%',height:50,width:50}}/>
                </View>
                    
                </ImageBackground>
                <MapView 
                  style={{height:'100%',width:'100%'}}
                  scrollEnabled
                  //provider={PROVIDER_GOOGLE}
                  initialRegion={{
                    latitude: 39.7392,
                    longitude : -104.9903,
                    latitudeDelta : 0.0922,
                    longitudeDelta : 0.0421
                  }}
                />
        </View>
       
        
      );
    };
    /*promiseCalled = () => {
      let appendArray=[];
        this.state.flatListData.map((item,index) => {
            if(item.text.search(this.state.promiseVal) != -1){
                appendArray.push(item)
            }
        });

        if(appendArray.length > 0){
          this.setState({
            flatListData : appendArray,
            noData : false
        })
        }
        else{
          this.setState({
            //flatListData : [],
            noData:true
        })
        }
    }

    onScrollEnd(e) {
      if(!this.state.loading){
        promiseCall.then((value)=>{
          alert("List is going to update with new data");
           this.setState({flatListData : value,loading:true},()=>{
             console.log(this.state.flatListData)
           })
       });
      }
      else{
        return;
      }
    }
    onChangeMethod = (text) =>{
      if(text == ''){
        this.setState({
          flatListData : newData,
          noData : false,
        //  loading : false
        })
      }
      this.setState({promiseVal:text})
    }

    keyExtractor = item => item.id.toString();

    renderItem({ item}) {
        return (
          <View key={item.id} 
            style={{
            width: '100%',
            height:60,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#6B8E23'}}>
            <Text>{item.text}</Text>
          </View>
        )
      }

    render(){
        return(
            <View style={{height:50,width:'100%'}}>
                <TextInput style={{borderBottomWidth :1}}
                onChangeText={(text) => this.onChangeMethod(text)}
                value={this.state.promiseVal}
                onBlur={this.promiseCalled}>
                </TextInput>
                <TextInput></TextInput>

            
              {this.state.noData ? <View>
                <Text>
                  {"No Data Available"}
                </Text>
                </View> :
                <View style={{
                  height:200}}>
                <FlatList 
                data={this.state.flatListData}
                //pagingEnabled
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                onScroll={(e) => this.onScrollEnd(e)} 
                extraData={this.state}
                />
            </View>}
            </View>
        )
    }*/
}

export default searchComponent;