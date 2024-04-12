import { useState } from "react"
import seo from "./images/search-engine-optimization.jpg"
import orm from "./images/online-reputation-management.jpg"
import smm from "./images/social-media-marketing.jpg"
import lg from "./images/lead-generation.png"
import ba from "./images/brand-awareness.png" 
import cm from "./images/cost-management.png"
import dmm from "./images/digital-marketing-meeting.jpg"
import { IconButton } from "@mui/material"
import { Menu } from "@mui/icons-material"

const App = () => {

/*declare dropDown state setter as false by default*/
const [dropDown, setDropDown] = useState(false)

/*toggle dropDown between true and false*/
const toggleDropDown = () => {
  if (dropDown === false) {
    setDropDown(true)
  } else {
    setDropDown(false)
  }
}

  return (
    <div className="body">
      <nav className="navbar">
        <h1><span>Smart</span>Market</h1>
        <div className="navlinks">
          <a href="#search-engine-optimization">Search Engine Optimization</a>
          <a href="#online-reputation-management">Online Reputation Management</a>
          <a href="#social-media-marketing">Social Media Marketing</a>
        </div>
        <div className="dropDownButton">
          {/*toggle state of drop down menu on click*/}
          <IconButton onClick={toggleDropDown}>
            <Menu className="dropDownButtonIcon"/>
          </IconButton>
        </div>
        {/*display if dropDown equals true, hide if false*/}
        {dropDown === true &&
          <div className="dropDown">
            <a href="#search-engine-optimization">Search Engine Optimization</a>
            <a href="#online-reputation-management">Online Reputation Management</a>
            <a href="#social-media-marketing">Social Media Marketing</a>
          </div>
        }
      </nav>
      <div className="hero">
        <img src={dmm}/>
      </div>
      <div className="contentAndBenefits">
        <div className="content">
          <div id="search-engine-optimization">
            <img src={seo}/>{}
            <div>
              <h1>Search Engine Optimization</h1>
              <p>The dominance of mobile internet use means that users are searching for the right business as they travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase your visibility and find the right customers for your business.</p>
            </div>
          </div>
          <div id="online-reputation-management">
            <img src={orm}/>
            <div>
              <h1>Online Reputation Management</h1>
              <p>The web is full of opinions, and some of these can be negative. Social media allows anyone with an internet connection to say whatever they want about your business. Online Reputation Management gives you the control over what potential customers see when they search for your business.</p>
            </div>
          </div>
          <div id="social-media-marketing">
              <img src={smm}/>
              <div>
                <h1>Social Media Marketing</h1>
                <p>Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation.</p>
              </div>
          </div>
        </div>
        <div className="benefits">
          <div>
            <h1>Lead Generation</h1>
            <img src={lg}/>
            <p>Inbound strategies for lead generation require less work for your business, bringing customers directly to your website.</p>
          </div>
          <div>
          <h1>Brand Awareness</h1>
            <img src={ba} />
            <p>Users find your business through paid and organic searches, increasing the search ranking and visibility for your business.</p>
          </div>
          <div>
            <h1>Cost Management</h1>
            <img src={cm}/>
            <p>As the search ranking for your business increases, your advertising costs decrease, and you no longer need to advertise your page.</p>
          </div>
        </div>
      </div>
      <h1 className="trademark">&copy; 2024 SmartMarket Social Solution Services, Inc.</h1>
    </div>
  )
}

export default App
