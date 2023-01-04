import React, { useEffect } from "react";
import { useState } from "react";
import ProjCommCard from "../components/ProjCommCard";
import { getallcommunities } from "../service/DataApi";
import "../styles/Communities.css";

const Communities = () => {
    const [communities, setCommunities] = useState([]);

    const getAllcommunities = async () => {
        const response = await getallcommunities()

        if (response.status === 201) {
            setCommunities(response.data)
            console.log(response.data)
        }
    }


    useEffect(() => {
        getAllcommunities()
    }, []);


    return (
        <>
            <div className="comm_main_parent container">
                <div className="comm_subparent">
                    <div className="comm_header">

                        <p className="comm_header_p1">
                        Join Top Tech Communities Around The Globe
                            {" "}
                        </p>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <p className="comm_header_p2">
                            
                            </p>
                        </div>


                    </div>



                    <div className="comm_carddiv">
                        {communities.map((data) => (
                            <div className="user">
                                <ProjCommCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Communities;
