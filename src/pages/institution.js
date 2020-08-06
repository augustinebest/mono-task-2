import React from 'react';
import backicon from '../assets/backicon.svg';
import searchIcon from '../assets/searchIcon.svg';
import g from '../assets/g.svg'
import polaris from '../assets/polaris.svg';
import cowyrise from '../assets/cowyrise.svg'
import piggyvest from '../assets/piggyvest.svg'
import { NavLink } from 'react-router-dom';
import bank from '../assets/bank.svg'

const Institution = (props) => {
    return (
        <div className='page_body'>
            <div className='screen_rev screen2'>
                <NavLink className='NavLink' to='/'>
                    <div className='avatar_s'>
                        <img src={backicon} />
                    </div>
                </NavLink>
                <div className='text_1 mt-4'>
                    <div>Select a financial institution <img src={bank} className='_bank'/></div>
                </div>
                <div className='search_block'>
                    <img src={searchIcon} />
                    <input type='text' placeholder='Search banks, fintechs etc' />
                </div>
                <div className='categories_'>
                    <div className='row_'>
                        <div className='image_' onClick={() => props.history.push('/register')}>
                            <div className='image_bg gtb'>
                                <img src={g} className='image_small' />
                            </div>
                        </div>
                        <div className='image_' onClick={() => props.history.push('/register')}>
                            <div className='image_bg polaris'>
                                <img src={polaris} className='image_small' />
                            </div>
                        </div>
                    </div>
                    <div className='row_ mt-4'>
                        <div className='image_' onClick={() => props.history.push('/register')}>
                            <div className='image_bg cowyrise'>
                                <img src={cowyrise} className='image_small' />
                            </div>
                        </div>
                        <div className='image_' onClick={() => props.history.push('/register')}>
                            <div className='image_bg piggyvest'>
                                <img src={piggyvest} className='image_small' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Institution }