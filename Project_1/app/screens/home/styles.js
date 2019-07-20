import { StyleSheet } from "react-native";
import { convertToDeviceResolution } from '../../utils/resolution';
import { PixelRatio } from 'react-native';




export const styles =  StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'white'
    },
    wrapper:{
        flexDirection:'row',
        height:50,
        width:'100%',
        backgroundColor:'green'
    },
    outerCircle : {
        height: 84,
        width: 84,
        borderRadius: 48,
        borderWidth: 2,
        borderColor: '#33A8FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconWrapper: {
        marginLeft:'4%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer:{
        height: 84,
        width: 84,
        borderRadius: 48,
        borderWidth: 2,
        borderColor: '#1b3701',
        backgroundColor:'#e7ac1e',
         alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        //alignItems:'center'
    },
    imageStyle:{
        height:32,
        width:32
    },
    imageBottomStyle:{
        height:28,
        width:28
    },
    homeFont:{
        marginTop:2,
        fontSize : 11
    },
    tabFont:{
        marginTop:10,
        fontSize : 11,
        color:'white'
    },
    loginText:{
        fontSize:convertToDeviceResolution(10)
    },
    button:{
        fontSize:convertToDeviceResolution(5)
    },
    buttonStyle:{
        height:'10%',
        width:'90%',
        justifyContent: "center",
        alignItems:'center',
        borderRadius:1,
        backgroundColor:"#06748C",
        marginTop:'2%' 
        
    },
    buttonTextStyle:{
        fontSize: convertToDeviceResolution(12),
        fontWeight: "bold",
        lineHeight:convertToDeviceResolution(20),
    },
    tabView:{width:'20%',height:80,borderWidth:0.5,borderColor:'#e9cf2f',alignItems:'center',justifyContent:'center'}
});