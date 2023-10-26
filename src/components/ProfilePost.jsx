import React from 'react'

export default function ProfilePost(props) {
    console.log(props)
    const date = props.date
    const heading = props.heading
    const description = props.description

    return (
        < article className='profile-post' >
            <p className='date'>{date}</p>
            <p className='heading'>{heading}</p>
            <p className='description'>{description}</p>
        </article >
    );
}



