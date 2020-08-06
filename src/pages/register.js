import React from 'react';
import { NavLink } from 'react-router-dom';
import backicon from '../assets/backicon.svg';
import guaranty from '../assets/guaranty.svg';

const Register = (props) => {
    return (
        <div className='page_body'>
            <div className='screen_rev screen3'>
                <NavLink className='NavLink' to='/institution'>
                    <div className='avatar_s'>
                        <img src={backicon} />
                    </div>
                </NavLink>
                <div className='guaranty mt-4'>
                    <img src={guaranty} />
                </div>
                <div className='text_2 mt-4'>GTBank Internet Banking</div>
                <form className='mt-2'>
                    <div className='myInput'>
                        <label>GTBank User ID:</label>
                        <input type='text' placeholder='John Doe' />
                    </div>
                    <div className='myInput'>
                        <label>Password</label>
                        <input type='password' placeholder='••••••••••••••••' />
                    </div>
                    <button className='linked_' onClick={() => props.history.push('/linked')}>Link Account</button>
                </form>
            </div>
        </div>
    )
}

export { Register }