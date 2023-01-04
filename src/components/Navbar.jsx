import React, { useEffect, useState } from 'react'
import "../styles/Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from '../service/ProfileApi'

const Navbar = () => {

    const [showdropdown, setshowdropdown] = useState(false);
    const [isusername, setisusername] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('token');
        localStorage.removeItem('username');
        setisusername(false);
        toast("Logging you out", {
            position: 'top-right',
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            closeButton: false,
            onClose: () => {
                navigate('/login');
            },
        });
    }

    const getuser = async () => {
        const response = await getUser();
        localStorage.setItem('username', "/" + response.data.username);
        setisusername(true);

    }

    useEffect(() => {
        if (Cookies.get('token') !== undefined && Cookies.get('token') !== null) {
            getuser();
        }
    }, [Cookies.get('token')]);


    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={700}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                closeButton={false}
                limit={1}
            />

            <div className=" container navbar_main_parent sticky-top" >
                <div className='navbar_subparent'>

                    <Link to='/' className='navbar_brand' style={{ marginBottom: "20px" }}> TechBubble</Link>

                    <div className="navbar_linksdiv">

                        <Link to='/' className='navbar_links'>HOME</Link>
                        <Link to='/communities' className='navbar_links'>COMMUNITIES</Link>
                        <Link to='/projects' className='navbar_links'>PROJECTS</Link>
                        <Link to='/events' className='navbar_links'>EVENTS</Link>
                        <Link to='/mentorships' className='navbar_links'>MENTORSHIPS</Link>
                        <Link to='/sponsors' className='navbar_links'>SPONSORS</Link>

                        {isusername && <Link to={localStorage.getItem('username')} className='navbar_links'>PROFILE</Link>}




                    </div>

                    {Cookies.get('token') ? <button type='button' className='btn btn-warning navbar_joinus_button' onClick={() => { handleLogout() }}>LOG OUT</button> : <button type='button' className='btn btn-warning navbar_joinus_button' onClick={() => { navigate('/signup') }}>JOIN</button>}


                    <GiHamburgerMenu className='navbar_ham' onClick={() => { setshowdropdown(!showdropdown) }} />


                </div>
            </div>


            {showdropdown && <div className="navbar_mobile_dropdown_parent">
                <div className="navbar_mobile_dropdown_subparent">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <button type='button' className='btn btn-warning navbar_joinus_button'>JOIN</button>

                </div>
            </div>}


        </>
    )
}

export default Navbar