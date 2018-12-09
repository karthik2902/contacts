import React from 'react'

const About = (props) =>{

    return (
        <div>
            <h2 className="display-3">{props.match.params.id}</h2>
            <p className="lead">Simple App To Manage your contacts</p>
            <p className="text-secondary">Version 1.0</p>
        </div>
    )
}

export default About
