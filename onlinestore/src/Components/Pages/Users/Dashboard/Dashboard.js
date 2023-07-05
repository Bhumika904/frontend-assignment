import React from 'react';
import Slider from './Slideshow';
import Navbar from './NavBar';
import  '../../../Assets/CSS/Dashboard.css'
import img1 from '../../../Assets/Images/imgs.png';
import img2 from '../../../Assets/Images/img5.png';
import img3 from '../../../Assets/Images/img2.png';
import img4 from '../../../Assets/Images/imgs3.png';
import img5 from '../../../Assets/Images/img4.png';
import img6 from '../../../Assets/Images/img6.png';

import item1 from '../../../Assets/Images/bangle.png'
import video1 from '../../../Assets/Images/video1.mp4'

const Dashboard = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const autoplayDelay = 4000; // 4 seconds

  return (
    <div>
      <Navbar />
      <div className="images">
        <Slider images={images} autoplayDelay={autoplayDelay} />
      </div>
      <div className='shop'/>
      <h1 style={{color:'#ae6d6d', textAlign:'center', 
      fontFamily:'Georgia, serif', marginTop:'5%',
      borderBottom:'2px solid #ae6d6d',
      paddingBottom:'10px'}}>Shop by your choice</h1>
      <div className='shops'>
        <div className='shopLeft'>
        <video width="600" height="300" autoPlay muted loop>
        <source src={video1} type="video/mp4" />
      </video>
        </div>
        <div className='shopRight'>
            <label>Featured Items</label>
            <div className='Featureditems'>
                <div className='eachItems'>
                    <img src={item1} width='200px'/>
                </div>
                <div className='eachItems'>
                    <img src={item1} width='200px'/>
                </div>
                <div className='eachItems'>
                    <img src={item1} width='200px'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
