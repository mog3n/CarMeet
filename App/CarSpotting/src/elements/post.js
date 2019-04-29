import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, FlatList, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2

const {height, width} = Dimensions.get('window');
const iconHeartActiveColor = 'red';

class TopBar extends Component{


	constructor(props){
		super(props);
	}

	render(){
		const data = this.props.data;
		const safeMargins = 20;

		return(
			<View style={{
				flex: 1,
				margin: safeMargins, 
				marginTop: safeMargins,
			}}>

				<View style={{flex: 1}}>

					<PullTab navigation={this.props.navigation}/>

					<View style={{flexDirection: 'row'}}>


						<TouchableOpacity>
							<Image 
								style={{
									aspectRatio: 1,
									width: 50,
									borderRadius: 25,
								}}
								source={{
									uri: data.profileImageUri, 
									cache: 'force-cache'
								}}
							/>
						</TouchableOpacity>

						<View
							style={{
								marginTop: 0,
								height: 23,
								marginLeft: 10,
								backgroundColor: 'rgba(0,0,0,0.9)',
								paddingLeft: 10,
								paddingRight: 10,
								borderRadius: 100,
								justifyContent: 'center',
							}}>

							<Text
								style={{
									fontSize: 9,
									fontWeight: '500',
									color: '#fff',
									flex: -1,
								}}
							>
								@{data.profile}
							</Text>

						</View>

					</View>

					<View style={{
						maxWidth: (width - safeMargins*2 - 10),
						marginTop: -20,
						marginLeft: 60,
						backgroundColor: 'rgba(0,0,0,0)'
					}}>
						<TouchableOpacity>

							<View
								style={{
									backgroundColor: 'rgba(255,255,255,0.85)',
									paddingLeft: 13,
									paddingRight: 13,
									paddingTop: 10,
									paddingBottom: 10,
									borderRadius: 17,
									justifyContent: 'center',
								}}>

								<Text
									style={{
										fontSize: 13.5,
										fontWeight: '400',
										color: '#000',
									}}
								>
									{data.description}
								</Text>

							</View>
						</TouchableOpacity>
					</View>

				</View>

			</View>
		);
	}
}

class BottomBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			heartIcon: (this.props.isLiked) ? 'ios-heart' : 'ios-heart-outline',
			isLiked: this.props.isLiked,
		}
	}

	handleLike(){
		this.setState(previousState => {
			// Toggle Heart Icon data
			const isLiked = !(previousState.isLiked)
			const heartIcon = (previousState.isLiked) ? 'ios-heart' : 'ios-heart-outline';
			return{
				heartIcon: heartIcon,
				isLiked: isLiked,
			}

		});
	}

	render(){

		return(
			<View style={{
					alignItems: 'flex-end',
					justifyContent: 'flex-end',
					backgroundColor: 'rgba(0,0,0,0)'
				}}>

					<TouchableOpacity onPress={ () => this.handleLike() } style={{
						padding: 15,
					}}>

						<Ionicons
				            name={this.state.heartIcon}
				            size={40}
				            style={{color: iconHeartActiveColor}}
				          />

			         </TouchableOpacity>

				</View>
	);
	}
}

class PullTab extends Component{

	constructor(props){
		super(props);

	}

	exitScreen(){
		this.props.navigation.goBack();
	}

	render(){
		return(
			<TouchableOpacity onPress={ () => this.exitScreen() }>
				<View style={{alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)'}}>
					<Ionicons
			            name={'ios-arrow-down'}
			            size={40}
			            style={{color: 'rgba(127,127,127,0.4)'}}
			          />
				</View>
			</TouchableOpacity>
		)
	}

}

class PostImageView extends Component{

	constructor(props){
		super(props);
	}

	render(){

		const data = this.props.data;
		const {height, width} = Dimensions.get('window');

		// For first Return View: position: 'absolute'

		return(

			<View style={{backgroundColor: '#000'}}>

				<Image 
					source = {{
						uri: data.imageUrl,
						cache: 'force-cache'
					}}
					style = {{
						flex: 1, 
						height: height, 
						width: width,
						position: 'absolute',
						borderRadius: 0,
					}}
				/>

			</View>

		);
	}
}

class VisibleContentView extends Component {
	render(){

		const {height, width} = Dimensions.get('window');

		return(
			<View style={{flex: 1, height: height, width: width, justifyContent: 'flex-end', alignItems: 'flex-start'}}>

			</View>
		);
	}
}

class PostDiscussionView extends Component{
	render(){

		const {height, width} = Dimensions.get('window');

		return(
			<View style={{flex: 1, height: height-50-20, width: width, backgroundColor: 'rgba(0,0,0,0.6)'}}>
			</View>
		);
	}
}

export class SinglePost extends Component{

	constructor(props){
		super(props);
		this.state = { viewRef: null };
	}

	render() {
		const data = this.props.navigation.state.params;
		const {height, width} = Dimensions.get('window');

		/*

		FORMAT

		{
			key: i,
			id: '001',
			contentType: 'image',
			imageUrl: 'https://',
			profile: 'eppcmogen',
			displayName: 'Mogen',
			likes: likes,
			timeSincePost: timeSincePost + " " + period,
			emojiDescription: emojis[selectedEmoji],
		}

		*/



		return(

			<View style={{backgroundColor: '#fff'}}>

				<PostImageView data={data}/>
				<TopBar data={data} navigation={this.props.navigation}/>
				<BottomBar data={data} navigation={this.props.navigation} />

				<ScrollView
				snapToInterval = {height-50-20}
	            decelerationRate = {'fast'}
	            snapToAlignment = {"start"}
	            showVerticalIndicator = {false}
	            bounces = {false}
	            >

					<VisibleContentView />
					<PostDiscussionView data={data}/>
				</ScrollView>

			</View>

		);

	}

}