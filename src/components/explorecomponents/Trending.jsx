import React, { useState } from 'react'
import populartopicdata from '../../assets/data/PopularTopicData';
import TrendingData from "../../assets/data/TrendingData"


function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const Trending = React.memo(() => {
    const shuffledTrendingData = shuffleArray(TrendingData);
    const shuffledPopulartopicData = shuffleArray(populartopicdata);

    return (
        <>

            <div className='my-20'>

                <div className="comm_header md:w-[60%] text-center m-auto ">

                    <p className="comm_header_p1 text-vio text-[60px] tracking-[0.1rem] font-mon font-[600] leading-[70px] mb-10 md:break-normal break-all">
                        Fancy learning something new ?
                    </p>


                </div>

                <div className='flex my-20 gap-4 justify-center flex-wrap'>

                    <a href="https://roadmap.sh/frontend" target="_blank"> <button type="submit" className='btn-grad font-poppins font-[600] tracking-[0.1rem]'>Frontend Development </button> </a>

                    <a href="https://roadmap.sh/backend" target="_blank"> <button type="submit" className='btn-grad font-poppins font-[600] tracking-[0.1rem]'>Backend Development </button> </a>

                    <a href="https://roadmap.sh/devops" target="_blank"> <button type="submit" className='btn-grad font-poppins font-[600] tracking-[0.1rem]'>DevOps, SRE </button> </a>

                    <a href="https://roadmap.sh/postgresql-dba" target="_blank"> <button type="submit" className='btn-grad font-poppins font-[600] tracking-[0.1rem]'>PostgreSQL DBA</button> </a>

                    <a href="https://roadmap.sh/android" target="_blank"> <button type="submit" className='btn-grad font-poppins font-[600] tracking-[0.1rem]'>Android Development</button> </a>
                </div>


                <p className="text-center text-white font-poppins text-[1.2rem] tracking-[0.1rem]">
                    Here are some more trending technologies, languages you can explore and learn 🚀
                </p>

                <div className='flex gap-5 md:justify-between justify-center px-[20px]'>
                    <div className='flex flex-col md:items-start items-center mt-10 gap-4 ' >
                        {
                            shuffledTrendingData.map((item, index) => {
                                return (
                                    <a href={item.forwarding_url} key={index} target="_blank">
                                        <div className="trending_topic_card md:max-w-[670px] md:min-w-[670px] min-w-[80vw] max-w-[80vw] py-[10px] px-[12px] rounded-[6px] flex justify-between items-center gap-5 cursor-pointer " >
                                            <div>
                                                <p className='text-white text-[26px] font-poppins mb-[20px]'>{item.title}</p>
                                                <p className='text-white text-[18px] font-poppins'>{item.description}</p>
                                            </div>
                                            <img src={item.image} className="w-[100px] h-[100px] my-[5px]" alt="" />
                                        </div>
                                    </a>
                                )

                            })
                        }
                    </div>

                    <div className=' md:w-[400px] hidden md:block mt-10'>
                        <p className='text-white text-[22px] font-poppins mb-[20px]'>Popular topics</p>
                        <div className='flex gap-2 flex-wrap'>
                            {
                                shuffledPopulartopicData.map((item, index) => {
                                    return (
                                        <a href={item.forwarding_url} target="_blank" key={index}>

                                            <div className="pf_techskills_techs bg-gray-200 px-[10px]  rounded-[5px] flex items-center justify-center h-[32px]">
                                                <p className="text-black font-poppins text-[18px] tracking-[0.1rem]">
                                                    {item.title}
                                                </p>

                                            </div>

                                        </a>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
});

export default Trending