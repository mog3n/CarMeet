import React, { Component } from 'react';
import { 
	AppRegistry, 
	Text, 
	View, 
	Button, 
	FlatList, 
	ScrollView, 
	StyleSheet, 
	TouchableOpacity, 
	TouchableHighlight,
	TouchableWithoutFeedback,
	Image, 
	StatusBar,
	Vibration,
	Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2


// Constants
const {height, width} = Dimensions.get('window');
export const displayContentWidth = (width*7)/10;
const displayAspectRatio = 1.3;
export const displayContentHeight = displayContentWidth*displayAspectRatio;


// Colors
const Color = {
	inactive: '#90a4ae',
}


export class End extends Component {
	render(){
		return(
			<View style={{marginTop: 450}}></View>
		);
	}
}

export class Divider extends Component {
	render(){
		return(
			<View style={{backgroundColor: '#eceff1', height: 3, marginTop: 10}}></View>
		);
	}
}


export class Feed extends Component {

	render() {
		return(

			<FlatList
				data = {[
					{
						key: 1,
						id: '001',
						contentType: 'image',
						imageUrl: 'https://',
						profile: 'eppcmogen',
						displayName: 'Mogen',
						likes: '9001',
					},
					{
						key: 2,
						id: '001',
						contentType: 'image',
						imageUrl: 'https://',
						profile: 'eppcmogen',
						displayName: 'Mogen',
						likes: '9001',
					},
					{
						key: 3,
						id: '001',
						contentType: 'image',
						imageUrl: 'https://',
						profile: 'eppcmogen',
						displayName: 'Mogen',
						likes: '9001',
					},
					{
						key: 4,
						id: '001',
						contentType: 'image',
						imageUrl: 'https://',
						profile: 'eppcmogen',
						displayName: 'Mogen',
						likes: '9001',
					}
				]}

				contentContainerStyle = {{paddingTop: 55}}

				renderItem = {({item}) =>

					<View style={{flex: 1, paddingTop: 5, backgroundColor: '#fff'}}>
						<View style={{flexDirection: 'column'}}>

								<View style={{aspectRatio: 0.9, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, borderColor: '#ddd'}}>
									<Text> </Text>
								</View>

								<View style={{flexDirection: 'row', height: 40, padding: 5}}>

									<View style={{aspectRatio: 1, borderWidth: 1, borderColor: '#eee', alignItems: 'center', justifyContent: 'center', borderRadius: 150}}>
										<Text> </Text>
									</View>
										<Text style={{fontWeight: '400', paddingLeft: 5, letterSpacing: 0.5,paddingTop: 5, fontSize: 15, color: '#333'}}>{item.displayName}</Text>
								</View>

						</View>
					</View>

				}

			/>
		);
	}


}

export class FeedItem extends Component{

	handleLike(item) {
		// Like button pressed
		this.setState(previousState => {
			const likeIcon = (previousState.likeIcon == 'ios-heart') ? 'ios-heart-outline' : 'ios-heart';
			const likeIconColor = (previousState.likeIconColor == 'red') ? Color.inactive : 'red';

			// Set the 'isLiked' prop in this.props.data.isLiked
			this.props.data.isLiked = (likeIcon == 'ios-heart')? 'true':'false';

			return {
				likeIcon: likeIcon,
				likeIconColor: likeIconColor,
			}

		});
	}

	handleTap(){
		const item = this.props.data;
		this.props.navigation.navigate('ShowPost', item);
	}

	constructor(props){
		super(props);

		// Check if image has already been liked
		var likeIcon = 'ios-heart-outline';
		var likeIconColor = Color.inactive;
		if(props.data.isLiked){
			likeIcon = 'ios-heart';
			likeIconColor = 'red';
		}

		this.state = {
			likeIcon: likeIcon,
			likeIconColor: likeIconColor,
		};
	}

	render(){

		const item = this.props.data;

		return(
			<View style={{flex:1, marginRight: 15,}}>
				<View style={{flexDirection: 'row'}}>
					<View style={{flex: 2}}>
						<Text style={{fontWeight: '300', marginBottom: 2, fontSize: 10, color: '#78909c'}}>
							@{item.profile}
						</Text>
					</View>
					<View style={{flex: 2, alignItems: 'flex-end'}}>
						<Text style={{fontWeight: '300', marginBottom: 2, fontSize: 10, color: '#78909c'}}>
							{item.timeSincePost}
						</Text>
					</View>
				</View>


				<TouchableOpacity onPress={ () => this.handleTap() } >

					<Image

					source={{uri : item.imageUrl,
						cache: 'force-cache'
					}}

					style={{
						backgroundColor: '#fff',
						borderRadius: 3,
						borderColor: '#cfd8dc',
						borderWidth: 0,
						width: displayContentWidth,
						height: displayContentHeight,
						flexDirection: 'column',
						flex: 1,
					}}>

						<View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', margin: 5, backgroundColor: 'rgba(0,0,0,0)',}}>
							<View style={{alignItems: 'flex-start', flex: 1}}>
								<Image style={{
									width: 25, 
									aspectRatio: 1, 
									borderRadius: 12.5, 
									borderColor: '#cfd8dc', 
								}}
								source={{uri: item.profileImageUri, cache: 'force-cache'}}
								>

								</Image>
							</View>
						</View>

						<View style={{
							flex: 1, 
							alignItems: 'flex-end', 
							justifyContent: 'flex-end',
						}}>
							
						</View>

					</Image>

				</TouchableOpacity>

				<View style={{flexDirection: 'column'}}>

					<View style={{flex: 1, flexDirection: 'row'}}>

						<TouchableWithoutFeedback onPress={ () => this.handleLike(item) }>
							<View style={{alignItems: 'flex-end', justifyContent: 'center'}}>

								<View style={{marginTop: 5, marginRight: 5}}>
									<Ionicons
							            name={this.state.likeIcon}
							            size={23}
							            style={{color: this.state.likeIconColor}}
							          />
								</View>

							</View>
						</TouchableWithoutFeedback>

						<View style={{alignItems: 'flex-end', justifyContent: 'center'}}>

							<View style={{marginTop:2, marginRight: 5}}>
								<Text style={{
									letterSpacing: -0.6,
									fontWeight: '300', 
									color: '#90a4ae',
									padding: 0,
									fontSize: 11,
								}}>
									{item.likes}
								</Text>
							</View>

						</View>

						

					</View>

					<View style={{
						maxWidth: displayContentWidth,
					}}>
						<Text style={{
							color: '#212121',
							fontSize: 14,
							fontWeight: '600',
						}}>{item.description}</Text>
					</View>

				</View>
			</View>
		);

	}

}

export class HorizontalContentScoller extends Component{

	constructor(props){
		super(props);
	}

	render() {

		const data = this.props.data;

		return(

			<View style={{flexDirection: 'row'}}>


				<FlatList

					horizontal = {true}
					showsHorizontalScrollIndicator = {true}
					data = {data}
					scrollIndicatorInsets = {{bottom: displayContentHeight+55, left: 20, right: 20}}	// Scroll indicator at the top
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

		);
		/*

		- Bottom right Chat bubble

          <View style={{flex:2}}>
			<View style={{alignItems: 'flex-end'}}>
				<TouchableOpacity onPress={ () => this.props.navigation.navigate('SinglePost', item)} >
					<Ionicons
			            name={'ios-chatbubbles-outline'}
			            size={30}
			            style={{color: '#cfd8dc'}}
			          />
				</TouchableOpacity>
			</View>
		</View>

		*/
	}

}

export class FeedHeader extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<TouchableOpacity onPress={() => this.props.navigation.navigate('ShowCamera') }>
				<View style={{
					width: width,
					marginTop: 20,
					alignItems: 'center',
					height: 35,
				}}>

					<Ionicons
			            name={'ios-camera-outline'}
			            size={40}
			            style={{color: '#bdbdbd'}}
			          />

				</View>
			</TouchableOpacity>
		);
	}

}

export class FeedTitle extends Component{

	render(){

		const text = this.props.text;

		return(
			<View style={{
				marginTop: this.props.topShift,
				width: width,
				alignItems: 'center',
			}}>
				<Text style={{ 
					fontSize: 20, 
					margin: 15, 
					marginBottom: 10,
					fontWeight: '900', 
					color: '#333',
					backgroundColor: '#fff',
				}}>{text}</Text>
			</View>
		);

	}

}

export class CitySelect extends Component {
	// City selector buttons on the top of the screen

	constructor(props){
	    super(props);
	    this.props.show = true;
	 }

	render(){

		const citySelected = this.props.citySelected;

		const data = [
			{
				key: '🌎 Global',
				id: 101,
			},
			{
				key: 'Shanghai',
				id: 102,
			},
			{
				key: 'Dubai',
				id: 103
			},
			{
				key: 'Los Angeles',
				id: 104
			},
			{
				key: 'New York',
				id: 105
			},
			{
				key: 'Beverly Hills',
				id: 106
			},
			{
				key: 'Malibu',
				id: 107
			},
			{
				key: ' + ',
				id: 999999
			},
		];

		// Highlight the active city
		for(var i=0; i<data.length;i++){
			var thisData = data[i];
			if (thisData.id == citySelected){
				thisData.style = styles.currentCityText;
			}else{
				thisData.style = styles.citySelectText;
			}
			data[i] = thisData;
		}

		if(this.props.show){
			return(

				<View>

					<View style={styles.citySelectContainer}>
							<FlatList

								horizontal = {true}
								showsHorizontalScrollIndicator = {false}
								data = {data}

								contentContainerStyle = {{
									paddingLeft:20,
									paddingTop: 7,
									paddingBottom: 7,
									paddingRight: 20,
								}}
								scrollIndicatorInsets = {{left: 20, right: 5}}

								renderItem={ ({item}) => 

									// Render View
									// Fix onPress!!!

										<TouchableOpacity onPressItem={null} >
											<View style={styles.citySelectBtn}>
												<Text style={item.style}>{item.key}</Text>
											</View>
										</TouchableOpacity>

							}/>
					</View>

				</View>


			);
		}else{
			return(
				<View></View> // Empty view if the header is hidden.
			);
		}

		/*
		// Camera top right corner
		<TouchableOpacity onPressItem={null}>
			<View style={{paddingLeft: 20, paddingRight: 20}}>
				<Ionicons
		            name={'ios-camera-outline'}
		            size={35}
		            style={{color: '#455a64'}}
		          />
			</View>
		</TouchableOpacity>

		*/
	}
}

const styles = StyleSheet.create({
	citySelectContainer: {
		flexDirection: 'row',
	},
	citySelectBtn: {
		height: 32,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#eeeeee',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 7,

		shadowOffset: {
	      width: 0,
	      height: 0,
	    },
	    shadowRadius: 3,
	    shadowOpacity: 0.1,

	},
	currentCityText: {
		fontWeight: '900',
		fontSize: 14,
		color: '#424242',
	},
	citySelectText: {
		fontWeight: '400',
		fontSize: 12,
		color: '#616161',
	},
	flex1 : {
		flex: 1,
	}
});