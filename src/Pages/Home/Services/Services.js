import React from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const services=[
        {id:1,description: "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.", title:"Search Engine Optimization",image: "https://i.ibb.co/8KPWBsM/seo.jpg"},
        {id:2,description: "Digital marketing is the component of marketing that uses the Internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.", title:"Digital Marketing",image: "https://i.ibb.co/ZM0qMbK/digital.jpg"},
        {id:3,description: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.", title:"Web Development",image: "https://i.ibb.co/zn83xwk/react.jpg"},
        {id:4,description: "Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Design is based on the principle of form follows a specific function.", title:"Graphics Design",image: "https://i.ibb.co/1nVdxNP/graphics.jpg"},
    ];

    return (
        <div className='services py-5'>
            <div className='text-center services-title'>
                <h6>WHAT WE PROVIDE</h6>
                <h3>IT Solution</h3>
            </div>
            <div className='service-container'>
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;