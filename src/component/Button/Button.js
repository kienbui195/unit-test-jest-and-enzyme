import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.props.handleClick && this.props.handleClick()
    }

    render = () => {
        return (
            <button
                className={this.props.className || ''}
                onClick={this.handleClick}
                style={this.props.style || {}}>
                {this.state.text}
            </button>
        )
    }
}

export default Button;