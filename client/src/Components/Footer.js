import React from 'react';
import image from '../assets/image/logo.png';
import { FiArrowUpRight } from 'react-icons/fi';

const style = {
  footwrapper: 'flex justify-center items-center w-screen text-white font-light' ,
  content: 'flex w-2/3 py-5  justify-between items-center drop-shadow-2xl',
  links: 'flex flex-col pr-2 justify-center items-center ',
  connectbtn: 'flex  justify-center items-center',
  connectbtntxt: 'flex items-center py-0.5 px-2 border-2 rounded-full border-black',
  info: 'flex  '
}

function Footer() {
  return (
    <div className={`footer ${style.footwrapper}`}>
      <div className={style.content}>
        <div className={style.info}>
          <div className='py-5'><img src={image} alt="logo" height={50} width={50} /> </div>
            <div className='flex flex-col'>
          <p className='text-2xl '>
            Helper Pvt. ltd <br /> 
          #28B , jalandhar , Punjab <br />
          India</p><br />
          <p className='text-md' href="phoneto:+91 9687598754" >
          <a href="phoneto:+91 9687598754"> +91 9687598754 </a>
          </p>
          <br />
          <p className='text-md'  >
            <a href="mailto:rebonedits@gmail.com">
          rebonedits@gmail.com
          </a>
          </p>
        </div>
        </div>
       
        <div className={style.links}>
          <p>Home</p>
          <p>About</p>
          <div className={style.connectbtn}>
          <p className={style.connectbtntxt}>Connect
          <FiArrowUpRight/>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer