import React, { useState } from 'react'
// import { UrlContext } from '../Contexts/UrlContext';
import UrlDetail from './UrlDetail'

function Urlinput() {

    const [longurl,setLongUrl] = useState('');
    const [urlData, seturlData] = useState('')
    // const {state, setUrl} = useContext(UrlContext)

    const handleCreateUrl = () =>{
        if(longurl){
            let urlObject = {
                url: longurl
            } 

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'cache-control': 'no-cache',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(urlObject)
            };

            fetch(`http://urlapi.needs.cf`,requestOptions)
            .then(response => response.json())
            .then((data) => {
                if(data.id){
                    seturlData(data);
                }
            });  
        }else{
            alert('please enter url')
        }
    }

    return (
        <div>
            <p className = "text-center">Short Your Url</p>
            <div className="input-group mb-3 w-75 mx-auto">
                <input type="text" className="form-control" placeholder="Enter a long URL to make short url" aria-describedby="url-btn" onChange = {(e) => setLongUrl(e.target.value)} value = {longurl}/>
                <button className="btn btn-outline-secondary" type="button" id="url-btn" onClick = {() => handleCreateUrl()}>Button</button>
            </div>
            {urlData ? <UrlDetail urlData = {urlData} /> :<div></div>}    
        </div>
    )
}

export default Urlinput