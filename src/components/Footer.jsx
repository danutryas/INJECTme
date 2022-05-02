import React from 'react'

function Footer() {
  return (
    <footer>
      <nav>
        <div className="contact">
          <h4 className='title'>Contact Us</h4>
          <ul>
            <li>
              {/* icon linkedin*/}
              <a href="https://www.linkedin.com/in/danutryas/" target="_blank" rel='noreferrer'>Danu Tryas Pristowo</a>
            </li>
            <li>
              {/* icon ig*/}
              <a href="https://instagram.com/Danutryas/" target="_blank" rel='noreferrer'>danutryas</a>
            </li>
            <li>
              {/* icon github*/}
              <a href="https://github.com/Danutryas/" target="_blank" rel='noreferrer'>danutryas</a>
            </li>
          </ul>
        </div>
        <div className="content">

          <h4 className='title'>Content</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Urgency</a></li>
            <li><a href="/">Vaccines</a></li>
            <li><a href="/">Vaccine Location</a></li>
          </ul>
        </div>
        <div className="link">
          <ul>
            <h4 className='title'>Links</h4>
            <li><a href="https://covid19.go.id/vaksin-covid19" target="_blank" rel='noreferrer'>Satuan Tugas Penanganan Covid-19</a></li>
            <li><a href="https://vaksin.kemkes.go.id/#/vaccines" target="_blank" rel='noreferrer'>Kementerian Kesehatan RI</a></li>
            <li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines" target="_blank" rel='noreferrer'>World Health Organization (WHO)</a></li>
            <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html" target="_blank" rel='noreferrer'>Centers of Disease Control (CDC)</a></li>
          </ul>
        </div>
      </nav>
      <div className="info">
        <div className="copyright">
          {/* icon C */} 2022 INJECT. All right reserved.
        </div>
        <p>COVID-19 HOTLINE <a href="tel:+62 119">119</a></p>
      </div>
    </footer>
  )
}

export default Footer