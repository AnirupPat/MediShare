import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { DoubleTapProps } from './types';


export class DoubleTap extends React.Component<DoubleTapProps> {

    constructor(props: DoubleTapProps) {
        super(props)
    }

    lastTap = 0
    delay = 300

    handleDoubleTap = () => {
        const now = Date.now();
        if (this.lastTap && (now - this.lastTap) < this.delay) {
            this.props.onDoubleTap()
        } else {
            this.lastTap = now
        }
    }

    render(): React.ReactNode {
        return (
            <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
                {this.props.children}
            </TouchableWithoutFeedback>
        )
    }
}