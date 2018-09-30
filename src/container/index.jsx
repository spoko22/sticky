import React from 'react';
import {ContainerWrapper} from './containerStyled';
import ReactDOM from "react-dom";
import Left from '../left';
import Right from '../right';

export default class Container extends React.Component<>{
    constructor(props) {
        super(props);
        this.state = {
            bounds: {},
        }
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        let bounds = ReactDOM.findDOMNode(this).getBoundingClientRect();
        console.log(bounds);
        this.setState({
            ...this.state,
            bounds,
        })
    }

    handleScroll = (event) => {
        let bounds = ReactDOM.findDOMNode(this).getBoundingClientRect();
        this.setState({
            ...this.state,
            event,
            bounds,
        });
    }

    render() {
        return (
            <ContainerWrapper containerBounds={this.state.bounds}>
                <Left />
                <Right containerBounds={this.state.bounds}/>
            </ContainerWrapper>
        )
    }
}
