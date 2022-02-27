import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const style = {
wrapper:' flex flex-col md:flex-row text-white my-4 md:my-0 md:h-[85vh] overflow-hidden',
content: 'flex  flex-col md:flex-row my-4 md:my-0 justify-between items-center ',
partbutton: 'my-11 p-0.5 rounded-full w-fit cursor-pointer',
    partbuttontext: 'flex items-center justify-center p-3 hover:font-medium px-7 rounded-full  bg-[#000000] font-light',
    mainsection: 'flex flex-col justify-center  mx-20 w-5/5 md:w-3/5',
    mainmessage: 'flex  flex-col justify-center text-4xl',
    recentsection: 'flex flex-col justify-center items-center w-5/5 md:w-2/5 ',
    recentsectioncontent: 'flex  p-0.5 w-[80%] h-[80%] items-center rounded-xl  justify-center  ',
    recentviewArea: 'rounded-xl w-[100%] h-[100%] p-3 bg-[#000000] font-light shadow-xl'
}

function Main() {
  //! java script for heading
   
  return (
      <div className={style.wrapper}>
      <div className={style.mainsection}>
        <div className={style.mainmessage}>
        It's not just about making a donation<br />
        it's about making a  <br />
        difference<br />
        </div>
        <div className={`bganimation ${style.partbutton}`}>
          <div className={style.partbuttontext}>
          Be a part 
            <FiArrowUpRight className='text-2xl'/>
        </div>
        </div>
      </div>
      
</div>
  )
}

export default Main