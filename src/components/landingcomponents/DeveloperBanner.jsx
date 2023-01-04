import React from 'react'
import "../../styles/DeveloperBanner.css";


const DeveloperBanner = () => {
    return (
        <>
            <div className="container dv_parent">

                <div className="dv_subparent">

                    <div className="dv_textdiv">
                        <p className='dv_p1'>Join us in nerding out about technology</p>

                        <div style={{ width: "100%", display: "flex", }}>
                            <p className='dv_p2'>Find a community of tech-enthusiastic individuals, learn from their experiences, work on projects together, and grow as a group!</p>
                        </div>
                    </div>

                    <div className="dv_imgdiv">
                        <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/unicorn-1200_0-sixteen_nine.jpg?size=948:533" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default DeveloperBanner