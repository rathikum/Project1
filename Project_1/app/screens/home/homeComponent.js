import React, { Component } from 'react';
import { View, Text,Image,ImageBackground,ScrollView,TouchableOpacity} from 'react-native';
import { styles } from './styles';

import  { GLoadingSpinnerHOC } from '../../GHOC';



const LoginComponentWithSpinner = GLoadingSpinnerHOC(View);


class HomeComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false
        };
    }
    /*
    The below method is called when update component.
    This method is called after render() is called
    and  before the DOM visible to the user. When this method called all 
    the DOM elements are created and accessible. 
    */
    getSnapshotBeforeUpdate(prevProps, prevState){

        return null; //should return null by default.
    }
    /*
    This function receive the value returned from getSnapshotBeforeUpdate()
    based on the value received, can manipulate DOM
    */
    componentDidUpdate(prevProps, prevState, snapshot){

    }
    shouldComponentUpdate(nextProps, nextState){
        return true; //should return true by default
    }
    /*
    This method is called when mount component and update component.
    This is where we should initialized component state variables and return the same
    */
    static getDerivedStateFromProps(props, state){
        //initialize state variable and return. If no changes required for state
        //variable then return empty object. return {}

        return {}; //should return empty object by default

    }
    
    componentDidMount(){
        // throw new Error('Unable Render Login Component');
    //Below code added for testing purpose to show how the loading spinner working
        // setInterval(()=>{
        //     this.setState({isLoading:!this.state.isLoading});
        // },2000)
    }
    componentWillUnmount(){

    }

    parkInfoMethod = () => {
        this.props.navigation.navigate('ParkInfo')
    }

    parkLocationMethod = () => {
        this.props.navigation.navigate('ParkLocation')
    }

    parkHoursMethod = () => {
        this.props.navigation.navigate('ParkHours')
    }

    getDirections = () => {
        this.props.navigation.navigate('Map')
    }
    
 
    render(){
        return (
            <ScrollView style={styles.containerStyle}>
                 <ImageBackground source={require('../../images/header.png')}  style={{width:'100%',height:125}}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../../images/Temporary_Logo.png')} style={{marginLeft:'2%',marginTop:'7%',height:75,width:75}}/>
                <View style={{alignItems:'center',justifyContent:'center',marginLeft:'10%',width:'45%',marginTop:'4%'}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>
                        {"ARBUCKLE"}
                    </Text>
                <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>
                        {"WILDNERNESS PARK"}
                </Text>
                </View>
                    
                <Image source={require('../../images/settings.png')} style={{marginLeft:'10%',marginTop:'10%',height:40,width:40}}/>
                </View>
                </ImageBackground>


        
             <View style={{backgroundColor:'white',height:100,marginTop:'2%'}}>

             </View>

                
                <View style={{marginTop:'1%'}}>
                <View style={{flexDirection:'row',marginTop:'3%'}}>
                
                    <View style={styles.iconWrapper}>
                        <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/BuyTicketsIcon.png')}></Image>
                            
                        </View>

                        <Text style={styles.homeFont}>
                            {"Buy Tickets"}
                        </Text>
                    </View>
                    
                    <View style={styles.iconWrapper}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/DonateIcon.png')}></Image>
                    </View>
                    <Text style={styles.homeFont}>
                        {"Donate"}
                    </Text>
                    </View>
                    
                    <View style={styles.iconWrapper}>

                    <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/ShoppingIcon.png')}></Image>
                    </View>
                    <Text style={styles.homeFont}>
                        {"Shopping"}
                    </Text>
                    </View>

                    <View style={styles.iconWrapper}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/EarnMoneyIcon.png')}></Image>
                    </View>
                    <Text style={styles.homeFont}>
                        {"Earn Money"}
                    </Text>
                    </View>
                    

                </View>

                <View style={{flexDirection:'row',marginTop:'3%'}}>
                    
                <TouchableOpacity onPress={this.parkInfoMethod} style={styles.iconWrapper}>
                <View style={styles.iconContainer} >
                        <Image style={styles.imageStyle} source={require('../../images/ParkInfoIcon.png')}></Image>
                       
                    </View>
                    <Text style={styles.homeFont}>
                        {"Park Info"}
                        </Text>    
                </TouchableOpacity>

                    
                <TouchableOpacity onPress={this.parkLocationMethod} style={styles.iconWrapper}>
                <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/LocationIcon.png')}></Image>
                       
                    </View>
                <Text style={styles.homeFont}>
                    {"Location"}
                </Text>
                </TouchableOpacity>
                    
                <TouchableOpacity onPress={this.parkHoursMethod} style={styles.iconWrapper}>
                <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/ParkHoursIcon.png')}></Image>
                        
                    </View>
                <Text style={styles.homeFont}>
                    {"Park Hours"}
                </Text>
                </TouchableOpacity>


                <View style={styles.iconWrapper}> 

                <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/OurServicesIcon.png')}></Image>
                    
                    </View>
                    <Text style={styles.homeFont}>
                        {"Our Services"}
                    </Text>
                </View>    
                   

                </View>

                <View style={{flexDirection:'row',marginTop:'3%'}}>
                    
                <View style={styles.iconWrapper}> 
                <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/OffersIcon.png')}></Image>
                        
                    </View>
                <Text style={styles.homeFont}>
                    {"Offers"}
                </Text>
                </View>

                   
                <View style={styles.iconWrapper}> 

                <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/CouponsIcon.png')}></Image>
                        
                    </View>
                <Text style={styles.homeFont}>
                    {"Coupons"}
                </Text>
                </View>

                   
                <View style={styles.iconWrapper}> 

                <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/SpecialsIcon.png')}></Image>
                        
                    </View>
                <Text style={styles.homeFont}>
                    {"Specials"}
                </Text>
                </View>

                <View style={styles.iconWrapper}> 

                <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/FunfestIcon.png')}></Image>
                        
                    </View>

                <Text style={styles.homeFont}>
                    {"Fun Fest"}
                </Text>
                </View>

                   
                </View>

                <View style={{flexDirection:'row',marginTop:'3%'}}>
                    
                <View style={styles.iconWrapper}> 
                <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/CafeIcon.png')}></Image>
                        
                    </View>
                <Text style={styles.homeFont}>
                    {"Cafe"}
                </Text>
                </View>
                    

                <View style={styles.iconWrapper}> 
                    <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/SouvenirshopIcon.png')}></Image>
                        
                    </View>
                <Text style={styles.homeFont}>
                    {"Souvenir Shop"}
                </Text>
                </View>

                <View style={styles.iconWrapper}> 
                <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/BusridesIcon.png')}></Image>
                        
                    </View>
                <Text style={styles.homeFont}>
                    {"Bus Rides"}
                </Text>
                </View>

                
                <View style={styles.iconWrapper}> 
                    <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/FeedtheanimalsIcon.png')}></Image>
                        
                    </View>
                <Text style={styles.homeFont}>
                    {"Feed the Animals"}
                </Text>
            </View>
                    

                </View>

                <View style={{flexDirection:'row',marginTop:'3%'}}>
                    
                <View style={styles.iconWrapper}> 
                    <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/YoutubeIcon.png')}></Image>
                        
                    </View>
                <Text style={styles.homeFont}>
                    {"You Tube"}
                </Text>
                </View>

                <View style={styles.iconWrapper}> 
                    <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/PhotomakerIcon.png')}></Image>
                        
                    </View>
                <Text style={styles.homeFont}>
                    {"Photo Maker"}
                </Text>
                </View>

                <View style={styles.iconWrapper}> 
                    <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/NewsIcon.png')}></Image>
                        
                    </View>
                <Text style={styles.homeFont}>
                    {"News"}
                </Text>
                </View>

                <View style={styles.iconWrapper}> 
                    <View style={styles.iconContainer}>
                        <Image style={styles.imageStyle} source={require('../../images/RateusIon.png')}></Image>
                        
                    </View>
                    <Text style={styles.homeFont}>
                        {"Rate Us"}
                    </Text>
                </View>
                    

                </View>
                </View>
               

                <ImageBackground source={require('../../images/bottombar.png')}  style={{width:'100%',marginTop:'5%'}}>
                <View style={{flexDirection:'row'}}>
                
                <TouchableOpacity style={styles.tabView} onPress={this.getDirections}>
                        <Image source={require('../../images/DirectionsIcon.png')} style={styles.imageBottomStyle}>

                        </Image>
                    <Text style={styles.tabFont}>
                        {"Directions"}
                    </Text>
                    </TouchableOpacity>

                    <View style={styles.tabView}>
                        <Image source={require('../../images/PhotoAlbumIcon.png')} style={styles.imageBottomStyle}>

                        </Image>
                    <Text style={styles.tabFont}>
                        {"Photo Album"}
                    </Text>
                    </View>
                    <View style={styles.tabView}>
                        <Image source={require('../../images/PostVideosIcon.png')} style={styles.imageBottomStyle}>

                        </Image>
                    <Text style={styles.tabFont}>
                        {"Post Videos"}
                    </Text>
                    </View>
                    <View style={styles.tabView}>
                        <Image source={require('../../images/GamesIcon.png')} style={styles.imageBottomStyle}>

                        </Image>
                        <Text style={styles.tabFont}>
                        {"Games"}
                    </Text>
                    </View>
                    <View style={styles.tabView}>
                        <Image source={require('../../images/MoreIcon.png')} style={styles.imageBottomStyle}>

                        </Image>
                        <Text style={styles.tabFont}>
                        {"More"}
                    </Text>
                    </View>
                
                </View>
                </ImageBackground>
               
            </ScrollView>
        );
    }
}

export default HomeComponent;