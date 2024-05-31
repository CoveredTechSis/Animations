import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import './assets/investor-img.jg'


function App() {
  const [count, setCount] = useState(0)

  return ( 
     <div className="FooterContainer">
            <div className="FooterWrapper1">
              <div className="FirstColumn">
                   <h3>We pride ourselves on owning and managing<br/> quality, legacy style assets designed to create<br/> long lasting communities and improve the <br/> wellbeing of the people who occupy them.</h3>
                   <img src={'./investor-img.jpg'} alt="image" />
              </div>
              <div className="SecondColumn">
                   <button className='hvr-sweep-to-top'>ABOUT INVESTMENT</button>
                   <button className='hvr-sweep-to-top'>ENQUIRE NOW</button>
              </div>
            </div>
            <div className="horizontal">
              </div>
           <div className="FooterWrapper2">
             <div className='FirstRow'>
               <div>
                  <h3>APRIL GROUP</h3>
               </div>
                <div >
                     <p>AUSTRALIAN FINANCIAL SERVICES LICENSE NO:505959</p>
                     <p>REGISTERED NSW LICENSE NO:34514142542 </p>
                     <p>WEBSITE BY LASH CREATIVE</p>
                </div>
              </div>
              <div className='hr'></div>
              <div className="SecondRow">
                <div >
                 <h3>GET IN TOUCH</h3>
                 <p>Level 6, 50 Holt Street, <br />Surry Hills, NSW, 2010</p>
                 <p><a href="#">02 9096 3618</a></p>
                </div>
               

                <div className='flex'>
                  <h5>TERMS</h5>
                  <h5>PRIVACY</h5>
                </div>

              </div>
              <div className='hr'></div>

              <div className='ThirdRow'>
                <div>
                  <h4>ENQUIRIES</h4>
                  <p>General enquiries</p>
                  <p><a href="#">info@aprilgroup.com.au</a></p>
                </div>
                <div>
                  <p>Pro Bono Corporate Partner Meals on Wheels NSW</p>
                  <div>
                    
                    <i class="fa fa-name-shape-o-direction"></i>
                    <p>Meals on Wheels </p>
                    <p>New South Wales</p>
                    
                  </div>
                </div>
              </div>

           </div>
            
        </div>
    );
}

     
  
export default App
