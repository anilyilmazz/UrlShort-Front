import React from 'react'
import UrlDetail from './UrlDetail'

function Urlinput() {
    return (
        <div>
            <p className = "text-center">Short Your Url</p>
            <div className="input-group mb-3 w-75 mx-auto">
                <input type="text" className="form-control" placeholder="Enter a long URL to make short url" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
            <UrlDetail />
        </div>
    )
}

export default Urlinput