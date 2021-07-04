import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ModelImage.css'
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

class ModelImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLightBox: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showLightBox: true,
        });
    }


    render() {
        return (
            <div>
                <img
                    src={this.props.url}
                    alt="model"
                    //<Lightbox image={this.props.url} title={this.props.title}></Lightbox>
                    onClick={ this._onButtonClick }
                />
                {this.state.showLightBox ? <Lightbox image={this.props.url} title={this.props.title}></Lightbox> : null}
            </div>
            //new ImageLighBox(this.props)

        );
    }
}


export default ModelImage;