import React, { useEffect } from 'react';
import './Info.css'
import { BiAward } from 'react-icons/bi';
import { IoMdCodeWorking } from 'react-icons/io';
import { AiOutlineProject } from 'react-icons/ai';
import aboutMe from '../../assets/images/about.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Info = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <section id='about' className='max-w-7xl mx-auto mb-8 py-8'>
      <h5 className='text-center text-white mt-5 text-3xl' data-aos="fade" data-aos-duration="1500">Get To Know</h5>
      <h2 className='text-center text-xl text-white' data-aos="fade" data-aos-duration="1500">About Me</h2>

      <div className='container about_container mt-10' data-aos="fade" data-aos-duration="1500">
        <div className='p-8 mt-4 '  data-aos="flip-left">
          <div className='overflow-hidden ' >
            <img className='rounded-3xl hover:scale-110 duration-300' src={aboutMe} alt="" />
          </div>
        </div>
        <div className='about_content mt-4 p-6 justify-start ' data-aos="fade" data-aos-duration="1500">
          <div className='about_cards' data-aos="zoom-in" data-aos-duration="1500">
            <article className='about_card items-center text-white' data-aos="zoom-in" data-aos-duration="1500">
              <a className='about_icon items-center ' href=""><BiAward /></a>
              <h4 className='mt-2'>Experience</h4>
              <span>1+ Years Home Working</span>
            </article>
            <article className='about_card text-white' data-aos="zoom-in" data-aos-duration="1500">
              <a className='about_icon mb-3' href=""><IoMdCodeWorking /></a>
              <h4 className='mt-2'>Course</h4>
              <span>P-Hero <br /> BLACK BELT</span>
            </article>
            <article className='about_card text-white' data-aos="zoom-in" data-aos-duration="1500">
              <a className='about_icon' href=''><AiOutlineProject /></a>
              <h4 className='mt-2'>Projects</h4>
              <span>60+ Projects Completed</span>
            </article>
          </div>
          <div className='text-white'>
            <p className='my-6 text-white' data-aos="fade-left" data-aos-duration="1500">My name is Rejaul Islam Raju. I am from Dinajpur, Bangladesh. <br /> Currently, I finish my study at Dinajpur Poltechnic Institute, Diploma in Computer Science and Engineering. I started coding since I was in high school. Coding is also an art for me.</p>
            <p className='my-2 text-white' data-aos="fade-left" data-aos-duration="1500"> Passing Year : 2022 </p>
            <p className='my-2 text-white' data-aos="fade-left" data-aos-duration="1500">CGPA : 3.83</p>
          </div>
          <a href="https://github.com/rejaul360" target='_blank' className='btn btn-outline btn-info' data-aos="fade-left">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Info;