import  {useState } from 'react'
 

import axios from 'axios'
function App() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
            .then((response) => {
                // console.log(response.data);
                setResult(response.data.results);
            })
            console.log("clickkc");
    }
    return (
        <>
            <div className='container text-center my-5'>
                <h2>Image Generator</h2>
                <input type="text" placeholder='Search Image' className='form-control' value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} />
                <button type='submit' onClick={changePhoto} className='btn btn-primary my-2'>Get Photo</button>
            </div>

            <div className="container">
                <div className="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-6">
                                    <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='img' />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default App
