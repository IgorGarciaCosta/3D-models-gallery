import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ModelImage.css'

function ModelImage(props) {
    return (
        <img
            src={props.url}
            alt="new"
        />

    );
}


export default ModelImage;