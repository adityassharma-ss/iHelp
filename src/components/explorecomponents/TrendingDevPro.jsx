import React from 'react'
import TrendingDevsData from '../../assets/data/TrendingDevsData'
import TrendingProjectsData from '../../assets/data/TrendingProjectsData'
// import userlogo from "../../assets/explore/userlogo.png"

const TrendingDevPro = ({ activebtn }) => {
    return (
        <>

            <div className='flex flex-col items-center mt-10 gap-4 ' >

                {activebtn === 0 ? <>
                    {
                        TrendingDevsData.map((item, index) => {
                            return (
                                <a href={item.forwarding_url} key={index} target="_blank">
                                    <div className="trending_topic_card md:max-w-[700px] md:min-w-[700px] min-w-[80vw] max-w-[80vw] py-[10px] px-[12px] rounded-[6px] flex justify-between items-center gap-5 cursor-pointer " >
                                        <div>
                                            <p className='text-white text-[26px] font-poppins mb-[20px]'>{item.name}</p>
                                            <p className='text-white text-[18px] font-poppins'>{item.description}</p>
                                        </div>
                                        <img src={item.image} className="w-[100px] h-[100px] my-[5px] rounded-[50%]" alt="" />
                                    </div>
                                </a>
                            )

                        })
                    }
                </> : <>
                    {
                        TrendingProjectsData.map((item, index) => {
                            return (
                                <a href={item.forwarding_url} key={index} target="_blank">
                                    <div className="trending_topic_card md:max-w-[700px] md:min-w-[700px] min-w-[80vw] max-w-[80vw] py-[10px] px-[12px] rounded-[6px] flex justify-between items-center gap-5 cursor-pointer " >
                                        <div>
                                            <p className='text-white text-[26px] font-poppins mb-[20px]'>{item.name}</p>

                                            {item.creator && <div className="flex gap-2 mb-2 items-center">
                                                <img src={userlogo} className="h-[15px] " alt="" />
                                                <p className="font-poppins  text-[15px] text-white">{item.creator}</p>
                                            </div>}
                                            <p className='text-white text-[18px] font-poppins'>{item.description}</p>
                                        </div>
                                        <img src={item.image} className="w-[100px] h-[100px] my-[5px] rounded-[50%]" alt="" />
                                    </div>
                                </a>
                            )

                        })
                    }
                </>}



            </div>
        </>
    )
}

export default TrendingDevPro