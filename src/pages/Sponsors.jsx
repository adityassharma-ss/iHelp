import React from 'react';
import Events from '../styles/Sponsors.css';

const Sponsor = () => {
  return (
    <div className='sponsor-parent'>
        <div className='sponsor-child'>
            <h1 className='sponsor-child-h1'>Our Sponsors</h1>
            <p className='sponsor-child-p'>We are grateful for the support of the following companies</p>
            <div className='sponsor-list'>
              <h1>Coming soon..</h1>
                {/* <div className='sponsor-item'>
                    <a href='https://example.com'>
                        <img src='https://example.com/logo.png' alt='Coming Soon..' />
                    </a>
                </div>
                <div className='sponsor-item'>
                    <a href='https://example.com'>
                        <img src='https://example.com/logo.png' alt='Coming Soon..' />
                    </a>
                </div>
                <div className='sponsor-item'>
                    <a href='https://example.com'>
                        <img src='https://example.com/logo.png' alt='Coming Soon..' />
                    </a>
                </div>
                <div className='sponsor-item'>
                    <a href='https://example.com'>
                        <img src='https://example.com/logo.png' alt='Coming Soon..' />
                    </a>
                </div> */}
            </div>
            <div className='sponsor-callout'>
                <p>Interested in becoming a sponsor?</p>
                <button className='sponsor-button'>Contact Us</button>
            </div>
            <div className='sponsor-footer'>
                <p>&copy; 2023 iHelp</p>
            </div>
        </div>
        
    </div>
  )
}

export default Sponsor;
