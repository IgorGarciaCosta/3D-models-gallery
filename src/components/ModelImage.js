import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ModelImage.css'
import Lightbox from "react-awesome-lightbox";
import "./LightBox.css";

class ModelImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLightBox: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
        this._onCloseButtonClick = this._onCloseButtonClick.bind(this);
        
    }

    _onButtonClick() {
        this.setState({
            showLightBox: true,
        });
    }

    _onCloseButtonClick() {
        this.setState({
            showLightBox: false,
        });
    }

    
    render() {
        return (
            <div>
                <img
                    src={this.props.url}
                    alt="model"
                    onClick={this._onButtonClick}
                />
                {this.state.showLightBox ? <Lightbox
                    image={this.props.url}
                    title={this.props.title}
                    onClose={this._onCloseButtonClick} /> : null}
            </div>

        );
    }
}


export default ModelImage;