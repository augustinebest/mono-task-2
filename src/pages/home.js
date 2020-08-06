import React from 'react';
import './home.css';
import avatar from '../assets/avatar.svg';
import checkmark from '../assets/checkmark.svg';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='page_body'>
            <div className='screen_rev screen1'>
                <div className='avatar_s'>
                    <img src={avatar} />
                </div>
                <div className='text_1'>
                    <div>Muney links all your finance apps</div>
                </div>
                <div className='click_'>Click “Select Account” to continue</div>
                <div className='screen1_div'>
                    <div className='cont_'>
                        <img src={checkmark} />
                        <div className='mar_'>
                            <div className='cont_hd'>Secure</div>
                            <div className='cont_txt'>100% data security on Mono app</div>
                        </div>
                    </div>
                    <div className='mt-4 cont_'>
                        <img src={checkmark} />
                        <div className='mar_'>
                            <div className='cont_hd'>Private by design</div>
                            <div className='cont_txt'>Zero access to your details</div>
                        </div>
                    </div>
                    <div className='mt-4 cont_'>
                        <img src={checkmark} />
                        <div className='mar_'>
                            <div className='cont_hd'>Finance Protection</div>
                            <div className='cont_txt'>We don’t have access to your funds</div>
                        </div>
                    </div>
                </div>
                <NavLink className='NavLink' to='/institution'>
                    <button className='select_'>Select Account</button>
                </NavLink>
                <div className='dark_div'>
                    <button className='dark_'></button>
                </div>
            </div>
        </div>
    )
}

export { Home }