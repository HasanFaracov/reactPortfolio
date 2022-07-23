import React from 'react'
import './about.css';
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <artivle className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </artivle>

            <artivle className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </artivle>

            <artivle className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </artivle>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ea voluptatibus vel officia quod quisquam quasi! Maiores voluptatem repudiandae iste quasi eligendi fugiat illo. Repellat mollitia distinctio aut maiores totam.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About