import React from 'react'
import propTypes from 'prop-types';

function ComponenetProfile(props) {
    return (
        <div>
            {props.handleName(props.fullName)}
            <h1 style={{color:"red"}}> {props.fullName}</h1>
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
ComponenetProfile.propTypes={
    fullName: propTypes.string.isRequired,
    bio: propTypes.string.isRequired,
    profession : propTypes.string,
    handleName :propTypes.func
}

export default ComponenetProfile
