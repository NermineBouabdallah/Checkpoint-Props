import React from 'react'
import PropTypes from 'prop-types';

function ComponenetProfile(props) {
    return (
        <div>
            {props.handleName(props.fullName)}
            <h1> {props.fullName}</h1>
            <p> {props.bio}</p>
            <h3>{props.profession}</h3>
            {props.children}


           
        </div>
    )
}
ComponenetProfile.defaultProps={
    fullName:"this is the default value",
    bio : "default value",
    profession :"default value"
}
ComponenetProfile.PropTypes={
    fullName: PropTypes.string,
    bio: PropTypes.string.isRequired,
    profession : PropTypes.string,
    handleName :PropTypes.func
}

export default ComponenetProfile
