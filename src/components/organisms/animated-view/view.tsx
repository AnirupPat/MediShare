import React, { Component } from 'react';
import { Text, View, Easing, StyleSheet, Image, FlatList, Animated, TouchableOpacity, ImageBackground, TouchableHighlight, Alert } from 'react-native';
import { AnimatedViewState, AnimatedViewProps } from './types';
import Styles from './styles'

class AnimatedView extends React.Component<AnimatedViewProps, AnimatedViewState> {
    animation = Animated.Value
    constructor(props: AnimatedViewProps) {
        super(props);
        this.state = { animation: new Animated.Value(0), showCancel: false };

    }

    startAnimation() {
        console.log('animation started')
        const animations = [
            Animated.timing(this.state.animation, { toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true }),
            // rotate in other direction, to minimum value (= twice the duration of above)
            Animated.timing(this.state.animation, { toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true }),
            // return to begin position
            Animated.timing(this.state.animation, { toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true })
        ];
        Animated.sequence(animations).start()

        Alert.alert(
            "Information",
            "Delete Image",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("Image Delete") }
            ],
            { cancelable: false }
          );
    }

    render() {
        const { values } = this.props;
        return (
            <Animated.View style={{
                margin: 10, transform: [{
                    // scale: this.state.animation,
                    rotate: this.state.animation.interpolate({
                        inputRange: [-1, 1],
                        outputRange: ['-0.1rad', '0.1rad']
                    })
                }]
            }}>
                <TouchableOpacity onLongPress={() => this.startAnimation()}>
                    <Image 
                    source={{uri: this.props.image}}
                    style={Styles.image}/>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

export default AnimatedView