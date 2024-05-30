import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';
 
const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h1 className='headtext__cormorant'>Subscribe to out Newsletter</h1>
      <p className='p__opensans'>Never miss any updates</p>
    </div>

    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter you Email address'/>
      <button className="custom__button" type="button">Subscribe</button>
    </div>
    
  </div>
);

export default Newsletter;
