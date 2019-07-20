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
                    <Image source={require('../../images/parkInfoTop.png')} style={{height:135,width:400}}>

                    </Image>
                </View>
                
                <View style={styles.parkBackground}>
                    <Image source={require('../../images/backgroundParkInfo.png')} style={{height:550,width:400}}>

                    </Image>
                </View>

            </View>
        )
    }
}

export default parkInfoComponent;