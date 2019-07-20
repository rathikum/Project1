import React, { Component } from 'react';
import { View, Text,Image,ImageBackground,StyleSheet,TouchableOpacity } from 'react-native';


const styles =  StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'white'
    },
    parkBackground:{
        position: 'absolute',
        top: 320,
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


class parkInfoComponent extends Component {
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
                        {"PARK INFORMATION"}
                        </Text>
                    </View>
                    <Image source={require('../../images/icon.png')} style={{marginLeft:'10%',marginTop:'11%',height:50,width:50}}/>
                </View>
                    
                </ImageBackground>

                <View style={{height:700,marginTop:'10%'}}>
                    <Image source={require('../../images/back.png')}  style={{width:'10%',height:'100%',alignSelf:'center',marginLeft:'2%'}}>
                        
                    </Image>
                    
                </View>

                <View style={styles.parkBackgroundTop}>
                    <ImageBackground source={require('../../images/parkInfoTop.png')} style={{height:135,width:400}}>
                    <View style={{flexDirection:'row',height:'13%',width:'100%'}}>
               
                    <View style={{alignItems:'center',justifyContent:'center',marginLeft:'8%',width:'80%',height:20,marginTop:'10%'}}>
                        <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>
                        {"ARBUCKLE WILDERNESS PARK"}
                        </Text>
                    </View>
                    
                </View>
                    </ImageBackground>
                </View>
                
                <View style={styles.parkBackground}>
                    <ImageBackground source={require('../../images/backgroundParkInfo.png')} style={{height:550,width:400}}>
                    <View style={{flexDirection:'column',height:'75%',width:'94%',marginTop:'18%',marginLeft:'3%',backgroundColor:'white'}}>
                            <View style={{width:'100%',height:40,marginTop:'2%',alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:'#062829',fontWeight:'bold',fontSize:20,marginLeft:'10%'}}>
                                {"Come feed the animals!"}
                                </Text>
                            </View>
                            <View style={{width:'100%',height:60,marginTop:'2%',marginLeft:'2%',marginRight:'5%'}}>
                                <Text style={{color:'#000000',fontSize:14,flexWrap: 'wrap'}}>
                                {"More than 200 acres in the beautiful Arbuckle Mountains with hundreds of exotic animals roaming free! Also House of Reptiles Petting Zoo and More!"}
                                </Text>
                            </View>
                            <View style={{width:'100%',height:35,marginTop:'2%',marginLeft:'2%',marginRight:'5%'}}>
                                <Text style={{color:'#000000',fontSize:14,flexWrap: 'wrap',fontWeight:'bold'}}>
                                {"House of Reptiles, Pettling Zoo and Rides open on Memorial Day Weekend"}
                                </Text>
                            </View>
                            <View style={{width:'100%',height:110,marginTop:'2%',marginLeft:'2%',marginRight:'5%'}}>
                                <Text style={{color:'#000000',fontSize:14,flexWrap: 'wrap'}}>
                                {"Arbuckle Wilderness Park is a fun filled adventure land where Wonderful and diverse creatures from over live continents roam in Similar habitats to there own. Open year round and set in the  beautiful and historic Arbuckle Mountains, Arbuckle Wilderness Park is an exciting adventure for all ages."}
                                </Text>
                            </View>

                            <View style={{width:'100%',height:15,marginTop:'2%',marginLeft:'2%',marginRight:'5%',alignItems:'center'}}>
                                <Text style={{color:'orange',fontSize:14,flexWrap: 'wrap',fontWeight:'bold'}}>
                                {"Group rates are available for 25 or more."}
                                </Text>
                            </View>

                            <View style={{width:'100%',height:15,marginTop:'2%',marginLeft:'2%',marginRight:'5%',alignItems:'center'}}>
                                <Text style={{color:'orange',fontSize:14,flexWrap: 'wrap',fontWeight:'bold'}}>
                                {"Call Today!"}
                                </Text>
                            </View>

                            <View style={{width:'100%',height:110,marginTop:'2%',marginLeft:'2%',marginRight:'5%'}}>
                                <Text style={{color:'#000000',fontSize:14,flexWrap: 'wrap'}}>
                                {"You’ll also enjoy the great fun park with go cart races, bumper Boats and a walk thru zoological area. At the Safari store you’ll Find all kinds of gifts like t-shirts, hats, stuffed animals and much Marel"}
                                </Text>
                            </View>
                            
                            
                        </View>
                    </ImageBackground>
                </View>

            </View>
        )
    }
}

export default parkInfoComponent;