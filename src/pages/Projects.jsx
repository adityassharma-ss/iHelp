import React, { useEffect, useState } from 'react'
import ProjCommCard from '../components/ProjCommCard';
import { getallprojects } from '../service/DataApi';

const Projects = () => {

    const [projects, setprojects] = useState([]);

    const getAllprojects = async () => {
        const response = await getallprojects()

        if (response.status === 201) {
            setprojects(response.data)
        }
    }

    useEffect(() => {
        getAllprojects()

    }, []);


    return (
        <>

            <div className="container">
                <div className="comm_main_parent ">
                    <div className="comm_subparent">
                        <div className="comm_header">

                            <p className="comm_header_p1">
                                Contribute To Projects
                                {" "}
                            </p>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <p className="comm_header_p2">
                                Explore and contribute to top global OpenSource project ideas, and collaborate with others to bring them to fruition.
                                </p>
                            </div>


                        </div>


                        <div className="comm_carddiv">
                            {projects.map((data) => (
                                <div className="user">
                                    <ProjCommCard data={data} type="project" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Projects