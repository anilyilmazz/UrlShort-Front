  
import React, { Component, createContext } from 'react';
export const UrlContext = createContext();

class UrlContextProvider extends Component {
    state = {
        url : ""
    }
    
    setUrl = (url) =>{
        this.setState({
            url : url
        });
    }

    createUrl = (url) =>{
        this.setState({
            url : url
        });
    }

    render() {
        return (
            <UrlContext.Provider value={{ ...this.state,urlstate : this.state,setUrl : this.setUrl,createUrl : this.createUrl}}>
                {this.props.children}
            </UrlContext.Provider>
        );
    }
}

export default UrlContextProvider;