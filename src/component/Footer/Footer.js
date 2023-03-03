import React from "react";
import Button from "../Button/Button";
import s from './Footer.module.css'
class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleClick = (isUp) => {
        isUp ? this.props.handleClick(true) : this.props.handleClick(false)
    }

    render = () => {
        return (
            <div className={s.footer}>
                <Button text={'Decrease'} handleClick={() => this.handleClick(false)} />
                <Button text={'Increase'} handleClick={() => this.handleClick(true)} />
            </div>
        )
    }
}

export default Footer;