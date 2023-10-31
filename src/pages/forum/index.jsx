// react
import React from 'react';
import Header from '../../components/header';
import Post from '../../components/post';
import ProfileCard from '../../components/profileCard';
import './style.css'

export default function Forum({currUser, posts}) {

    return (

        <div id='background' className='bg-lightGrey h-screen border border-black w-full z-80'>
            <Header 
                // user_firstName={currUser.name}
                user_firstName="John Doe"
            />
            <div className='grid grid-cols-12 gap-2 w-10/12'>
                 <div className='col-span-3 border rounded-lg border-black'>
                    <ProfileCard />
                 </div>
                 <div className='col-span-6 rounded-lg'>
                    {
                        posts.map(t => (
                            <Post
                                // key={t.uuid} 
                                post={t}
                            />
                        ))
                    }
                 </div>
                 <div className='col-span-3 border border-black rounded-lg'>
                    Create Post
                 </div>
            </div>            
        </div>
    );
}