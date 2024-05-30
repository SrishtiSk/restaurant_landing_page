import React from 'react'
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Testimony.css';

const Testimony = () => {

    const CustomerCard =({cust:{imgUrl, comment, name, title}})=>(
    <div className='app__testimony-testimonyCard'>
        <img src={imgUrl} alt="personImg"/>
        
        <img src={images.quote} alt="quote"/>

        <div className='app__testimony-testimonyCard_content'>
            <p className='p__opensans' style={{color:'#AAAAAA', fontStyle:'italic'}}>{comment} </p>
            <p className='p__cormorant' style={{color:'#DCCA87', fontSize:'24px', fontWeight:400}}>{name}</p>
            <p className='p__opensans' style={{color:'#AAAAAA'}}>{title}</p>
        </div>
    </div>
    )

    const customers=[
        {
            imgUrl:images.person1,
            comment:"Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
            name: "Jane Cooper",
            title:" Sommelier"
        },
        {
            imgUrl:images.person2,
            comment:"Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
            name: "Wanda Warret",
            title:"Caterer"
        },
        {
            imgUrl:images.person3,
            comment:"Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
            name: "Brooklyn Simmons",
            title:"Chef"
        },
        {
            imgUrl:images.person4,
            comment:"Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
            name: "Robert Fox",
            title:"Chef"
        },
    ]
    
      

  return (
    <div className='app__testimony flex__center section__padding'>
        <div className='app__testimmony-content'>
            <div className='app__testimony-title'>
                <SubHeading title="Testimony"/>
                <h1 className='headtext__cormorant'>Happy Customers</h1>
            </div>
        
        <div className='app__testimony_cards'>
            { customers.map((cust)=> <CustomerCard cust={cust} key={cust.title}/>)}
        </div>
        </div>
    </div>
  )
}

export default Testimony;

