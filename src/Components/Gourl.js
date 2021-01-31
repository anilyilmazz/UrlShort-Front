import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
function Gourl() {
    let { url } = useParams();
    useEffect(() => {
        fetch(`http://urlapi.needs.cf?url=${url}`)
        .then(response => response.json())
        .then((data) => {
            window.location.replace(data.url);
        }); 
      }, []);
    return (
        <div>
            Goto the url
        </div>
    )
}

export default Gourl
