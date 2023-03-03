import React from "react";
import s from './MainBody.module.css'

class MainBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render = () => {
        return (
            <div className={s.mainBody}>
                <span>{this.props.value}</span>
            </div>
        )
    }
}

export default MainBody;