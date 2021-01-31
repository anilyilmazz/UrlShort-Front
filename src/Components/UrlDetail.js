import React from 'react'
import {Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function UrlDetail({ urlData }) {
    console.log(window.location);
    return (
        <div className="card w-75 mx-auto">
            <div className="card-body">
            <p style={{float: "left"}}>{urlData.url}</p>
            <Link to={{pathname: `/${urlData.shorturl}`}} style={{float: "right"}}>
            <p style={{float: "right"}}>{`${window.location.host}/${urlData.shorturl}`}</p></Link>
            <CopyToClipboard text={window.location.host + '/' + urlData.shorturl} >
                <button style={{float: "right"}}>Copy</button>
            </CopyToClipboard>
            </div>
        </div>
    )
}

export default UrlDetail
