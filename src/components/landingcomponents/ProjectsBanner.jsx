import React from 'react'
import "../../styles/ProjectsBanner.css";
const ProjectsBanner = () => {
    return (
        <>

            <div className="container pr_main_parent">
                <div className="pr_subparent">
                    <p className='pr_p1'>Join & Explore!</p>
                    <div className="pr_p2div">
                        <p className='pr_p2'>We have an incredible selection of open source projects for the community, by the community, covering a wide range of technologies including web development, Android, devops, machine learning, and more! From WEB2 to WEB3, we have something for everyone</p>
                    </div>
                    <div className="btn btn-warning pr_explorebtn">Explore more projects </div>
                </div>
            </div>

        </>
    )
}

export default ProjectsBanner