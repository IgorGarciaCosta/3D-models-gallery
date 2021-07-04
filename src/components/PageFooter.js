import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './PageFooter.css'

class PageFooter extends React.Component {
    render() {
        return (
            <MDBFooter className="font-small pt-4 mt-4">
                <div className="footer-copyright text-center py-3">
                    <MDBContainer className="text" fluid>
                        &copy; {new Date().getFullYear()} Igor Garcia: <a target='_blank' href="https://github.com/IgorGarciaCosta"> github.com/IgorGarciaCosta </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default PageFooter;
