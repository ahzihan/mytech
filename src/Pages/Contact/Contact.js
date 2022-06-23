import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PageTitle from '../Share/PageTitle/PageTitle';


const Contact = () => {
    return (
        <div className='py-5'>
            <PageTitle title='Contact'></PageTitle>
            <h3>Contact</h3>
            <div className='offset-2'>
                <div className="contact-address">
                    <p><span><FontAwesomeIcon icon="fa-solid fa-location-dot" /></span>Address : 6 No House, 1 no Road,<br /> Dhanmondi ,Dhaka-1205</p>
                    <p><span></span>Phone : +88 01518729991</p>
                    <p><span></span>Email : info@mytech.com</p>
                </div>
                <div className="contact-form"></div>
            </div>
        </div>
    );
};

export default Contact;