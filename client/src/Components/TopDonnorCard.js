import React from 'react';
import matic from '../assets/image/matic-logo.png'

const style = {
    DonnorCard: 'flex flex-col md:flex-row shadow-xl shadow-purple-500/50 hover:shadow-purple-500/70  my-2 justify-between items-center rounded-xl bg-white p-4',
    Name: 'text-xl',
    value: 'flex justify-center items-center text-md',
    maticlogo: 'px-1 h-5'
}

const TopDonnorCard = (props) => {
  return (<>
  <a href={`https://mumbai.polygonscan.com/search?f=0&q=${props.transactionHash}`}>
    <div className={style.DonnorCard}>
    <div className={style.Name}>
    {props.name}
    </div>
    <div className={style.value}>  
    {props.transactionAmount}
    <img src={matic} className={style.maticlogo} alt="Matic Logo" />
    </div>
    </div>
    </a>
    </>
  )
}

export default TopDonnorCard