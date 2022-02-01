import React from 'react';
import { Component } from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
    render(){
        return(
            <Map
                google = {this.props.google}
                style = {{
                    width:"70%", 
                    height:"350px", 
                    top:"40%",
                    left:"16%",
                    color:"black",
                    margin:"0px 10px",
                    textShadow:"5px 5px white",
                    borderRadius:"15px",
                    boxShadow:"1px 1px 11px black"
                }}
                zoom = {10}
                initialCenter = {
                    {
                        lat:51.500250,
                        lng:-0.157400
                    }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyC2ZOOoY0T_Z-BXajRx1TgsNc3GJr9_aQw"
})(MapContainer)