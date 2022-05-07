import React from 'react'
import Modal from './Cards/Modal'
import {AiOutlineInstagram,AiFillLinkedin,AiFillGithub,AiOutlineCopyrightCircle} from 'react-icons/ai'
import '../styles/css/footer.css'
import { IconContext } from 'react-icons'
import { HashLink as Link } from 'react-router-hash-link';


function Footer() {
  return (
    <footer id='footer'>
      <nav>
        <div className="contact">
          <h4 className='title'>Contact Us</h4>
          <ul>
            <IconContext.Provider value={{  className: "social-media-icon" }}>
              <li>
                <AiFillLinkedin />
                <a href="https://www.linkedin.com/in/danutryas/" target="_blank" rel='noreferrer'>Danu Tryas Pristowo</a>
              </li>
              <li>
                <AiOutlineInstagram />
                <a href="https://instagram.com/Danutryas/" target="_blank" rel='noreferrer'>danutryas</a>
              </li>
              <li>
                <AiFillGithub />
                <a href="https://github.com/Danutryas/" target="_blank" rel='noreferrer'>danutryas</a>
              </li>
              </IconContext.Provider>
          </ul>
        </div>
        <div className="content">
          <h4 className='title'>Content</h4>
          <ul>
            <li>
              <Link to={"/#"} >Home</Link>
            </li>
            <li>
              <Link to={"/#urgency"} >Urgency</Link>
            </li>
            <li>
              <Link to={"/#vaccines"} >Vaccines</Link>
            </li>
            <li>
              <Link to={"/find#"}>Vaccine Location</Link>
            </li>
          </ul>
        </div>
        <div className="link">
            <h4 className='title'>Links</h4>
          <ul>
            <li><a href="https://covid19.go.id/vaksin-covid19" target="_blank" rel='noreferrer'>Satuan Tugas Penanganan Covid-19</a></li>
            <li><a href="https://vaksin.kemkes.go.id/#/vaccines" target="_blank" rel='noreferrer'>Kementerian Kesehatan RI</a></li>
            <li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines" target="_blank" rel='noreferrer'>World Health Organization (WHO)</a></li>
            <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html" target="_blank" rel='noreferrer'>Centers of Disease Control (CDC)</a></li>
          </ul>
        </div>
      </nav>
      <div className="comp-info">
        <div className="copyright">
          <AiOutlineCopyrightCircle />
           <p> 2022 INJECT. All right reserved.</p>
        </div>
        <p>COVID-19 HOTLINE <a href="tel:+62 119">119</a></p>
      </div>
      <Modal />
    </footer>
  )
}

export default Footer