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
        window.removeEventListener('resize', this.handleResize);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        let bounds = ReactDOM.findDOMNode(this).getBoundingClientRect();
        console.log(bounds);
        this.setState({
            ...this.state,
            bounds,
        })
    }

    handleResize = (event) => {
        console.log('resize');
        let bounds = ReactDOM.findDOMNode(this).getBoundingClientRect();
        this.setState({
            ...this.state,
            event,
            bounds,
        });
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
