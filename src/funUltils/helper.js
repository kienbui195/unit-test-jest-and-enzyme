import React from 'react'

const Link = props => {
    return (
        <a href={props.link}>{props.nameLink}</a>
    )
}

export default Link;