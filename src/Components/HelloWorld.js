import React, {Component} from 'react'

class HelloWorld extends Component{
    render(){
        return (
            <h1> Hello {this.props.name} </h1>
        )
    }
}

export default HelloWorld