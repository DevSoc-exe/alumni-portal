import React from 'react'
import "./style.css"
import UserImage from '../../Resources/User.png'
import ProfilePost from '../../components/ProfilePost'

export function Profile() {

    // added dummy text for the time being
    const userData = {
        pfpUrl: UserImage,
        rollNo: "COXXXX",
        year: "20XX",
        branch: "BRANCH",
        email: "example@gmail.com",
        linkedIn: "random linkedin url",
        currEmployment: "CEO - Google"

    }

    // added dummy text for the time being
    const postsData = [
        {
            "id": 1,
            "date": "2023-10-22",
            "heading": "Lorem Ipsum",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "id": 2,
            "date": "2023-10-23",
            "heading": "Sample Heading",
            "description": "This is a sample description for the second object."
        },
        {
            "id": 3,
            "date": "2023-10-24",
            "heading": "Random Data",
            "description": "Here's some random text for the third object."
        },
        {
            "id": 4,
            "date": "2023-10-25",
            "heading": "Data Object",
            "description": "This is another example of a data object."
        }
    ]

    return (
        <main id='profile-parent'>

            <div className="mega-container">
                <div className="left">
                    <section className="user-header">
                        <img src={UserImage} alt="" className="user-image" />
                        <div>
                            <p className="name">Users Name</p>
                            <p className="username">@theirusername</p>
                        </div>
                    </section>

                    <section className="user-info">

                        <form className='userinfo-form' action="">

                            <div className="userinfo-form-element">
                                <label>College Roll Number</label>
                                <input type="text" value={userData.rollNo} className='form' readOnly />
                            </div>

                            <div className="userinfo-form-element double">
                                <div className="userinfo-form-element">
                                    <label>Year</label>
                                    <input type="text" value={userData.year} className='form' readOnly />
                                </div>
                                <div className="userinfo-form-element">
                                    <label>Branch</label>
                                    <input type="text" value={userData.branch} className='form' readOnly />
                                </div>
                            </div>

                            <div className="userinfo-form-element">
                                <label>Email</label>
                                <input type="text" value={userData.email} className='form' readOnly />
                            </div>

                            <div className="userinfo-form-element">
                                <label>LinkedIn Profile Link</label>
                                <input type="text" value={userData.linkedIn} className='form' />
                            </div>

                            <div className="userinfo-form-element">
                                <label>Your Current Place of Epmloyment</label>
                                <input type="text" value={userData.currEmployment} className='form' />
                            </div>


                        </form>

                    </section>

                </div>

                <div className="right">
                    <h2>Your Posts</h2>
                    <hr />
                    {
                        postsData.map((item) => (
                            <ProfilePost key={item.id} date={item.date} heading={item.heading} description={item.description} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}   