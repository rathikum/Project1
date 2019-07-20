import React, { Component } from 'react';
import { View, Text,Image,ImageBackground,StyleSheet,TouchableOpacity } from 'react-native';


const styles =  StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'white'
    },
    parkBackground:{
        position: 'absolute',
        top: 180,
        left: 8,
        width: 400,
        height: 500
    },
    parkBackgroundBottom:{
        position: 'absolute',
        top: 580,
        left: 25,
        width: 400,
        height: 200
    },
});


class parkLocationComponent extends Component {
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
                 <View style={{flexDirection:'row',height:'15%',width:'100%'}}>
                 <TouchableOpacity style={{marginLeft:'2%',marginTop:'11%',height:50,width:50}} onPress={() => this.props.navigation.goBack()}>
                <Image source={require('../../images/arrow.png')} style={{height:50,width:50}}/>
                </TouchableOpacity>
                    <View style={{alignItems:'center',justifyContent:'center',marginLeft:'8%',width:'50%',height:20,marginTop:'10%'}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>
                        {"PARK LOCATION"}
                        </Text>
                    </View>
                    <Image source={require('../../images/icon.png')} style={{marginLeft:'10%',marginTop:'11%',height:50,width:50}}/>
                </View>
                    
                </ImageBackground>

                
                <View style={styles.parkBackground}>
                    <ImageBackground source={require('../../images/ParkLocationbg.png')} style={{height:370,width:400}}>
                    <View style={{flexDirection:'column',height:'85%',width:'90%',alignItems:'center',marginTop:'10%',marginLeft:'5%',backgroundColor:'#542728'}}>
                            <View style={{width:'70%',height:40,marginTop:'1%',backgroundColor:'#542728'}}>
                                <Text style={{color:'#cc0000',fontWeight:'bold',fontSize:32,marginLeft:'5%'}}>
                                {"OUR LOCATION"}
                                </Text>
                            </View>
                            <View style={{width:'80%',height:15,marginTop:'1%',backgroundColor:'#542728'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:14,marginLeft:'1%'}}>
                                {"6132 KAY STARR TRL ., DAVIS, OK 73030"}
                                </Text>
                            </View>
                            <View style={{width:'80%',height:15,marginTop:'1%',backgroundColor:'#542728'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:14,marginLeft:'25%'}}>
                                {"(580) 369-3383 OR"}
                                </Text>
                            </View>
                            <View style={{width:'80%',height:15,marginTop:'1%',backgroundColor:'#542728',marginBottom:'2%'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:14,marginLeft:'25%'}}>
                                {"1-800-PET PARK"}
                                </Text>
                            </View>
                            <View style={{width:'80%',height:15,marginTop:'1%',backgroundColor:'#542728'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:14}}>
                                {"LOCATED 90 MINUTES FROM NORTH DALLAS"}
                                </Text>
                            </View>
                            <View style={{width:'80%',height:20,marginTop:'1%',backgroundColor:'#542728'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:14,marginLeft:'5%',marginBottom:'2%'}}>
                                {"AND 60 MINUTES FROM OKALHOMA CITY"}
                                </Text>
                            </View>
                            <View style={{width:'80%',height:15,marginTop:'1%',backgroundColor:'#542728'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:14}}>
                                {"45 MINUTES NORTH OF WINDSTAR CASINO ON"}
                                </Text>
                            </View>
                            <View style={{width:'80%',height:15,marginTop:'1%',backgroundColor:'#542728'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:14,marginLeft:'25%'}}>
                                {"INTERSTATE 35 NORTH."}
                                </Text>
                            </View>
                            <View style={{width:'80%',height:30,marginTop:'1%',backgroundColor:'#542728',marginBottom:'3%'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:32,marginLeft:'30%'}}>
                                {"EXIT 51"}
                                </Text>
                            </View>

                            <View style={{width:'80%',height:15,marginTop:'1%',backgroundColor:'#542728'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:14,marginLeft:'1%'}}>
                                {"IN DAVIS, OKALHOMA, ACROSS FROM TURNER"}
                                </Text>
                            </View>

                            <View style={{width:'80%',height:15,marginTop:'1%',backgroundColor:'#542728',marginBottom:'2%'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:14,marginLeft:'40%'}}>
                                {"FALLS"}
                                </Text>
                            </View>
                            
                            <View style={{width:'89%',height:15,marginTop:'1%',backgroundColor:'#542728'}}>
                                <Text style={{color:'yellow',fontWeight:'bold',fontSize:14,marginLeft:'1%'}}>
                                {"MAKE A RIGHT THEN MAKE FIRST RIGHT, ONE"}
                                </Text>
                            </View>

                            <View style={{width:'80%',height:15,marginTop:'1%',backgroundColor:'#542728'}}>
                                <Text style={{color:'yellow',fontWeight:'bold',fontSize:14,marginLeft:'16%'}}>
                                {"MILE DOWN ON KAY STARR TRL"}
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.parkBackgroundBottom}>
                    <ImageBackground source={require('../../images/getDirection.png')} style={{height:105,width:380}}>
                    <View style={{width:'85%',height:50,marginTop:'1%',alignItems:'center',justifyContent:'center',marginTop:'5%'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:32,marginLeft:'16%'}}>
                                {"GET DIRECTIONS"}
                                </Text>
                            </View>
                    </ImageBackground>
                </View>

            </View>
        )
    }
}

export default parkLocationComponent;