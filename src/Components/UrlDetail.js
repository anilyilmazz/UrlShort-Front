import React from 'react'
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function UrlDetail({ urlData }) {
    console.log(window.location);
   
     function alertFunction(e) 
     {
        e.preventDefault();
        alert("Copied !");
    }
    return (
        <div className="card w-75 mx-auto">
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <span>Original Url : </span> <br/>  
                           <p>{urlData.url}</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <span>Short Url : </span> <br/>
                            <Link to={{ pathname: `/${urlData.shorturl}` }}>
                                <p >{`${window.location.host}/${urlData.shorturl}`}</p></Link>
                        </div>
                        <div className="col-md-3">
                            <CopyToClipboard text={window.location.host + '/' + urlData.shorturl} >
                                <button onClick={alertFunction} class="btn btn-outline-primary">Copy Short Url</button>
                            </CopyToClipboard>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UrlDetail
