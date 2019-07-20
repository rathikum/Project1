import React, { Component } from 'react';
import { View, Text,Image,ImageBackground,StyleSheet,TouchableOpacity } from 'react-native';


const styles =  StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'white'
    },
    parkBackground:{
        position: 'absolute',
        top: 220,
        left: 8,
        width: 400,
        height: 500
    },
    parkBackgroundTop:{
        position: 'absolute',
        top : 182,
        left: 8
    }
});


class parkHoursComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading:false
        };
    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <ImageBackground source={require('../../images/header.png')}  style={{width:'100%'}}>
                 <View style={{flexDirection:'row',height:'13%',width:'100%'}}>
                <TouchableOpacity style={{marginLeft:'2%',marginTop:'11%',height:50,width:50}} onPress={() => this.props.navigation.goBack()}>
                <Image source={require('../../images/arrow.png')} style={{height:50,width:50}}/>
                </TouchableOpacity>
                    
                    <View style={{alignItems:'center',justifyContent:'center',marginLeft:'8%',width:'50%',height:20,marginTop:'10%'}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>
                        {"PARK HOURS"}
                        </Text>
                    </View>
                    <Image source={require('../../images/icon.png')} style={{marginLeft:'10%',marginTop:'11%',height:50,width:50}}/>
                </View>
                    
                </ImageBackground>

                
                <View style={styles.parkBackground}>
                    <ImageBackground source={require('../../images/backgroundParkInfo.png')} style={{height:530,width:400}}>
                    <View style={{flexDirection:'column',height:'45%',width:'90%',alignItems:'center',borderWidth:15,marginTop:'18%',marginLeft:'5%',backgroundColor:'#b69839',borderColor:'#542728'}}>
                            <View style={{width:'70%',height:40,marginTop:'2%',backgroundColor:'#542728'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:32,marginLeft:'5%'}}>
                                {"PARK HOURS"}
                                </Text>
                            </View>
                            <View style={{width:'50%',height:20,marginTop:'2%'}}>
                                <Text style={{color:'#000000',fontWeight:'bold',fontSize:18}}>
                                {"OPEN ALL YEAR !"}
                                </Text>
                            </View>
                            <View style={{width:'85%',height:30,marginTop:'2%'}}>
                                <Text style={{color:'#062829',fontWeight:'bold',fontSize:26}}>
                                {"FALL/WINTER HOURS"}
                                </Text>
                            </View>
                            <View style={{width:'85%',height:20,marginTop:'2%'}}>
                                <Text style={{color:'#000000',fontWeight:'bold',fontSize:20}}>
                                {"MON-SUN, 9:00am-5:00pm"}
                                </Text>
                            </View>
                            <View style={{width:'85%',height:15,marginTop:'2%',marginLeft:'25%'}}>
                                <Text style={{color:'#000000',fontWeight:'bold',fontSize:14}}>
                                {"*Safari Road Drive Thru"}
                                </Text>
                            </View>
                            <View style={{width:'85%',height:15,marginTop:'2%',marginLeft:'22%'}}>
                                <Text style={{color:'#000000',fontWeight:'bold',fontSize:14}}>
                                {"Last car admitted @4:00pm"}
                                </Text>
                            </View>
                            <View style={{width:'85%',height:15,marginTop:'2%',marginLeft:'25%'}}>
                                <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>
                                {"*Gift Shop open till 5:00pm"}
                                </Text>
                            </View>
                            
                        </View>
                    </ImageBackground>
                </View>

            </View>
        )
    }
}

export default parkHoursComponent;