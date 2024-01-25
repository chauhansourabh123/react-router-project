import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/chauhansourabh123')
            .then((response) => response.json())
            .then((response) => {
                setData(response)
            })
    }, [])
    return (
        <div className='container'>
            <div className='row bg-secondary bg-opacity-75 p-4'>
                <h3 className='text-center text-light p-4 bg-secondary col-10 mx-auto'>Github Followers: {data.followers}</h3>
                <img className='img-fluid rounded mx-auto col-lg-4 col-md-6 col-10' src={data.avatar_url} alt="githubImage" />
            </div>
        </div>
    );
}

export default Github