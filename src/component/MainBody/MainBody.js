import React from "react";

class MainBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render = () => {
        return (
            <div>
                <input type="number" value={this.props.value} />
            </div>
        )
    }
}

export default MainBody;