import React from 'react';
import star from '../assets/star.svg'
import link from '../assets/link.svg';
import linker from '../assets/linker.svg';
import avatar from '../assets/avatar.svg';
import g from '../assets/g.svg'

const Linked = (props) => {
    return (
        <div className='page_body'>
            <div className='screen_rev'>
                <div className='screen4'>
                    <div className='random_1'></div>
                    <div className='random_2'></div>
                    <div className='random_3'></div>
                    <div className='random_4'></div>
                    <div className='stars'>
                        <img src={star} className='img_1' />
                        <img src={link} className='img_2' />
                    </div>
                    <div className='t_mar'>
                        <div className='linker_'>
                            <img src={avatar} className='img_3' />
                            <img src={linker} className='img_4' />
                            <img src={g} className='img_5' />
                        </div>
                        <div className='txt_a'>Account Linked!</div>
                        <div className='txt_b'>Your bank account has been succesfully linked to <span className='muney'>Muney.</span> </div>
                        <button className='select_' onClick={() => props.history.push('/')}>Continue</button>
                        <div className='la_'>
                            <button className='link_ano'>Link another account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Linked }