
//----------------------------------------------------------------------------------- Dependencies

import React, {Component} from 'react';
import { AppRegistry, View, Text, StyleSheet, ScrollView, Button, StatusBar, FlatList, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import {
  Feed,
  HorizontalContentScoller, 
  CitySelect, 
  FeedTitle, 
  CreatePostViewfinder,
  Divider,
  End,
  FeedItem,
  FeedHeader,
} from './elements/feedElements';
import {
  SinglePost,
} from './elements/post';
import { displayContentWidth, displayContentHeight } from './elements/feedElements';

//----------------------------------------------------------------------------------- App Variables
const navIconSize = 30;
const navActiveColor = '#5e35b1';
const navInactiveColor = '#cfd8dc';
const {height, width} = Dimensions.get('window');

//----------------------------------------------------------------------------------- App Variables

// Home Feed
var citySelected = 101;
var citySelectVisible = true;

//----------------------------------------------------------------------------------- Screen /Root/CameraView/Main

class CameraView_Main extends Component{
  static navigationOptions = {
    title: 'Camera',
    tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-camera' : 'ios-camera-outline'}
            size={34}
            style={{color: tintColor}}
          />
        ),
  };

  static tabBarOptions = {
    showLabel: false
  };

  render(){
    return(
        <BadInstagramCloneApp navigation={this.props.navigation}/>
    );
  }
}

//----------------------------------------------------------------------------------- Screen /SinglePostView

// Linked to HomeViewNavigator

class SinglePostView extends Component {

  static navigationOptions = {
    title: 'Content',
    tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-car' : 'ios-car-outline'}
            size={navIconSize}
            style={{color: tintColor}}
          />
        ),
  };

  static tabBarOptions = {
    showLabel: true
  };

  render(){

    return(

      <View>
        <SinglePost navigation={this.props.navigation}/>
      </View>

    );

  }

}

class HomeView_Feed extends Component {

  constructor(props){
    super(props);

    this.state = {
      showCitySelect: true,
      data: this.generateData(),
    }

  }

  generateData(){
    data = [];
    // Generate fake data

    const numOfFakeData = 4;
    for (i=0; i<numOfFakeData; i++){

      const randomLikes = Math.floor(Math.random()*2000);
      var likes = randomLikes;

      if(randomLikes > 1000){
        likes = Math.floor((randomLikes/100))/10 + "k";
      }

      // Get the minutes since the post was posted, figure out 
      // how many days/hours/min since it was last posted

      const minutesSincePost = Math.floor(Math.random()*200);
      var timeSincePost = minutesSincePost;
      var period = "m";

      if (timeSincePost > 60) {
        timeSincePost = Math.floor(timeSincePost/60);
        period = "h";

        if(timeSincePost > 24){
          timeSincePost = Math.floor(timeSincePost/24);
          period = "d";

          if(timeSincePost > 7){
            timeSincePost = Math.floor(timeSincePost/7);
            period = "w";
          }
        }
      }

      const emojis = ['🏁','🚘', '😅', '😛', '😊'];
      const selectedEmoji = Math.floor(Math.random()*emojis.length); // Get a random emoji

      const images = [
        //'https://mfiles.alphacoders.com/609/609862.jpg',
        'https://storage.googleapis.com/carculture-app/637589_compressed.jpg',
        'https://storage.googleapis.com/carculture-app/compressed1.jpg',
        'https://storage.googleapis.com/carculture-app/rolls_compress.jpg'
        /*
        'https://mfiles.alphacoders.com/792/79203.jpg',
        'https://i.pinimg.com/originals/1a/a5/66/1aa566bdaa25225adf6d0f1bbe824923.jpg',
        'http://www.godubaigo.com/wp-content/uploads/2016/08/Dubai-Cars-Pictures-1.jpg',
        'http://st.motortrend.com/uploads/sites/5/2016/05/2016-Tesla-Model-S-P90D-front-end-in-motion.jpg',
        */
      ];

      // Pretend some images have been liked already
      const isLiked = ( Math.round(Math.random()*1) != 0);

      tempData = {
        key: i,
        id: '001',
        contentType: 'image',
        imageUrl: images[Math.floor(Math.random()*images.length)],
        profile: 'eppcmogen',
        displayName: 'Mogen',
        profileImageUri: 'https://storage.googleapis.com/carculture-app/19052206_144902926058246_8182771640799592448_a%20(1).jpg',
        likes: likes,
        timeSincePost: timeSincePost + " " + period,
        emojiDescription: emojis[selectedEmoji],
        description: 'A multi-line comment with big dreams.',
        isLiked: isLiked,
      }

      data.push(tempData);
    }

    return data; // Return the fake data list

  }

  static navigationOptions = {
    title: 'Car Culture',
    tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-car' : 'ios-car-outline'}
            size={navIconSize}
            style={{color: tintColor}}
          />
        ),
  };

  static tabBarOptions = {
    showLabel: false
  };

  // Handle scroll event
  handleScroll(event) {
    // False if scrolling down, true if scrolling up

    // Show and hide the header when they're scrolling down. 
    // Removed because there was no point

    /*
    const offset = event.nativeEvent.contentOffset.y;
    const direction = (offset >= 50) ? false : true;
    this.setState(previousState => {

      // Check if the scroll direction 50ms ago was the same
      // if it was then there's no need to re-render.
      if (previousState.showCitySelect != direction){
        return { showCitySelect: direction };
      }

    });

    */

  }


  render(){

    /*
    Camera Viewfinder
    <CreatePostViewfinder topShift={15}/>

    🚨 🔥 😝

    Vertical Scrolling Lock ----

    snapToInterval = {460}
    decelerationRate = {'fast'}
    snapToAlignment = {"start"}
    */

    return(

      <View style={{backgroundColor: '#fff'}}>

        <View style={{
          flex: 1,
          flexDirection: 'column'
        }, styles.marginFix}>

          <View style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            zIndex: 1,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',

            borderBottomWidth: 1,
            borderBottomColor: '#eee',

            width: width,
          }}>
            <FeedHeader navigation={this.props.navigation}/>
          </View>

          <ScrollView
            style={{flex: 1}}
            onScroll={(event)=>this.handleScroll(event)}
            scrollEventThrottle={50}
            scrollsToTop = {true}
            style={{paddingTop: 65}}
          >

            <CitySelect citySelected={citySelected} show={true}/>

            <FeedTitle text="Trending"/>

            <View style={{flexDirection: 'row'}}>


              <FlatList

                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                data = {this.state.data}
                extraData = {this.state.data}
                scrollIndicatorInsets = {{left: 20, right: 20}}  // Scroll indicator at the top
                directionLockEnabled = {true}
                snapToInterval = {displayContentWidth+15}
                decelerationRate = {0}
                snapToAlignment = {"start"}

                contentContainerStyle = {{ 
                  paddingTop: 10, 
                  paddingBottom: 10, 
                  paddingLeft: 20, 
                  paddingRight: 10,
                  backgroundColor: '#fff',
                }}
                renderItem={ ({item}) => 
                  <FeedItem data={item} navigation={this.props.navigation}/>
              }/>

            </View>
            <Divider />

            <FeedTitle text="Friends"/>

            <View style={{flexDirection: 'row'}}>


              <FlatList

                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                data = {this.state.data}
                extraData = {this.state.data}
                scrollIndicatorInsets = {{bottom: displayContentHeight+55, left: 20, right: 20}}  // Scroll indicator at the top
                directionLockEnabled = {true}
                snapToInterval = {displayContentWidth+15}
                decelerationRate = {0}
                snapToAlignment = {"start"}

                contentContainerStyle = {{ 
                  paddingTop: 10, 
                  paddingBottom: 10, 
                  paddingLeft: 20, 
                  paddingRight: 10,
                  backgroundColor: '#fff',
                }}
                renderItem={ ({item}) => 
                  <FeedItem data={item} navigation={this.props.navigation}/>
              }/>

            </View>
            <Divider />

            <End />

          </ScrollView>

        </View>

      </View>
    );
  }

}

//----------------------------------------------------------------------------------- Screen /Root/ExploreView/Main

class ExploreView_Main extends Component {

  static navigationOptions = {
    title: 'Explore',
    tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-search' : 'ios-search-outline'}
            size={navIconSize-(navIconSize*0.1)}
            style={{color: tintColor}}
          />
        ),
  }

  render() {

    return (
      <View style={styles.centerAll}>
        <Text></Text>
      </View>
    );

  }

}

//----------------------------------------------------------------------------------- Screen /Root/ChatView/Main

class ChatView_Main extends Component {

  static navigationOptions = {
    title: 'Groups',
    tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'}
            size={navIconSize}
            style={{color: tintColor}}
          />
        ),
  }



  render() {

    return (
      <View style={styles.centerAll}>
        <Text></Text>
      </View>

    );

  }

}

//----------------------------------------------------------------------------------- Screen /Root/Garage/Main

class GarageView_Main extends Component {

  static navigationOptions = {
    title: 'Garage',
    tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-speedometer' : 'ios-speedometer-outline'}
            size={navIconSize}
            style={{color: tintColor}}
          />
        ),
  }



  render() {

    return (
      <View style={styles.centerAll}>
        <Text></Text>
      </View>
    );

  }

}

//----------------------------------------------------------------------------------- Navigators

// Home Navigator
const HomeViewNavigator = StackNavigator({
  Feed: { screen: HomeView_Feed },
},
{
  headerMode: 'none' // Remove the header name to make space for feedElement.citySelect
});

// Explore Navigator
const ExploreViewNavigator = StackNavigator({
  Explore: { screen: ExploreView_Main }
});

// Chat Navigator
const ChatViewNavigator = StackNavigator({
  Feed: { screen: ChatView_Main }
});

// Garage Navigator
const GarageViewNavigator = StackNavigator({
  Main: { screen: GarageView_Main }
});

// Camera Navigator
const CameraViewNavigator = StackNavigator({
  Main: { screen: CameraView_Main }
},
{
  headerMode: 'none' // Remove header when in camera
});


// Root View -- Main Tab-based switcher UI

const RootTabNavigator = TabNavigator({

  // Home -> Points to HomeViewNavigator
  Home: { screen: HomeViewNavigator },
  //Chat: { screen: ChatViewNavigator },
  Explore: { screen: ExploreViewNavigator },
  Garage: { screen: GarageViewNavigator },
  //Camera: { screen: CameraViewNavigator },
},
{
  tabBarOptions: {
    // Tab bar Options
    showLabel: false,
    animationEnabled: true,

    activeTintColor: navActiveColor,
    inactiveTintColor: navInactiveColor,
  }

});

const RootNavigator = StackNavigator({
  Root: {
    screen: RootTabNavigator
  },
  ShowPost: {
    screen: SinglePostView,
  },
  ShowCamera: {
    screen: CameraViewNavigator,
  }
},
{
  headerMode: 'none',
  mode: 'modal',
});

//----------------------------------------------------------------------------------- Styles

const styles = StyleSheet.create({
  centerAll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteBg: {
    //backgroundColor: '#fff',

  },
  marginFix: {
    paddingTop: 20,
  }
});

//----------------------------------------------------------------------------------- App Render


export default class CarCulture extends Component{
  render() {
    return (
        <RootNavigator />
    )
  }
}