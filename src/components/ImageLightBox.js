import React from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

class ImageLighBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            url: props.url,
            title: props.title,
        }
    }
    
    render(){
        alert(this.url)
        return(
            <Lightbox image={this.props.url} title={this.props.title}></Lightbox>
        );
    }
}

export default ImageLighBox;