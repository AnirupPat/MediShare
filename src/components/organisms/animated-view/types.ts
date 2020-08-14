import { Image, Animated } from "react-native"

export type AnimatedViewProps = {
    values: any,
    image: string,
    // animatedValue: any
}

export type AnimatedViewState = {
    animation: Animated.Value;
    showCancel: boolean
}