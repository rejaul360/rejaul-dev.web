import React from 'react';
import aboutMe from '../assets/images/profile.png';
import './Dashboard.css'
import { motion } from 'framer-motion';
import Resume from '../Component/Resume/Resume';
import HeaderSocial from '../Component/HeaderSocial/HeaderSocial';
import './Dashboard.css'

const Dashboard = () => {

    return (
        <div className=' style_set sm:h-full' >
        <div className='flex h-auto'>
          <div className='rounded-full h-64 w-full object-cover flex items-center justify-center'>
            <img
              style={{ width: "220px", height: "220px", borderRadius: "50%" }}
              src={aboutMe}
              alt=""
              className='items-center justify-center p-2 mt-2'
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          </div>
        </div>
        <div>
          <div className="mx-auto px-1">
            <motion.div
              className="container header_container"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <h4 className='text-xl fontStyle text-white mt-2'>Hello! I am</h4>
              <h1 style={{ fontStyle: "initial" }} className="my_name text-2xl">
                REJAUL ISLAM
              </h1>
              <h5 className="text-light text-2xl letter-sp text-white">Frontend Developer</h5>
              <Resume></Resume>
            </motion.div>
          </div>
        </div>
        <div className='mt-5'>
          <nav>
            <ul>
              <div style={{ fontStyle: 'oblique' }} className='mx-auto text-center text-xl space-y-1 text-white' data-aos="zoom-in">
                {/* <li><a href="#home">Home</a></li> */}
                <li><a href="#about">About</a></li>
                <li><a href="#technology">Technology</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li><a href="#project"></a></li> */}
                {/* <li className='m-0'><a href="#contact">Contact</a></li> */}
              </div>
            </ul>
          </nav>
        </div>
        <div className='py-1 ' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <HeaderSocial></HeaderSocial>
        </div>
      </div>

    );
};

export default Dashboard;