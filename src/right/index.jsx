import React from 'react';
import ReactDOM from "react-dom";
import {RightWrapper, Paragraph, FloatingRightWrapper} from "./rightStyled";


export default class Right extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { containerBounds } = this.props;
        const { x, y, width, height, top, right, bottom, left } = containerBounds;

        return (
            <FloatingRightWrapper y={y}>
                <Paragraph>Right</Paragraph>
                <Paragraph>{JSON.stringify(containerBounds)}</Paragraph>
            </FloatingRightWrapper>
        );
    }
}
