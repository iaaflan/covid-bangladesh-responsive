import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter style={{margin:'0 auto'}} color="cyan" className="text-center font-small darken-3">
            <div className="pt-1">
                <MDBBtn outline color="white" rel="noopener noreferrer" tag="a" href="https://www.MDBootstrap.com" target="_blank">Source Code</MDBBtn>
                <MDBBtn outline color="white" rel="noopener noreferrer" tag="a" href="http://covid-bangladesh.herokuapp.com/" target="_blank">Light Version</MDBBtn>
                <hr className="my4"/>
            </div>
            <div className="pb-4">
                <a href="https://www.MDBootstrap.com" rel="noopener noreferrer" target="_blank"><MDBIcon  fab icon="linkedin" className="mr-3"/></a>
                <a href="https://www.MDBootstrap.com" rel="noopener noreferrer" target="_blank"><MDBIcon  fab icon="github" className="mr-3"/></a>
            </div>
            <p className="footer-copyright mb-0 py-3 text-center">
                Created using <a rel="noopener noreferrer" target="_blank" href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </p>
        </MDBFooter>
    );
}

export default Footer;