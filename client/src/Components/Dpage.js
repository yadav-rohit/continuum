import React , {useContext, useState} from 'react'
import { AiFillInfoCircle } from 'react-icons/ai';
import transactionContext from "../context/transactionCntxt";

const style = {
    TeamNameLogo: 'flex justify-center items-center',
    payArea: 'flex  flex-col justify-center md:my-32  rounded-xl mx-10 p-12  text-white',
    paymentsetails: 'flex  justify-center items-center  ',
    paymentmenu: 'flex flex-col items-center rounded-xl my-5 shadow-purple-500/50 shadow-xl p-5 md:w-[80%] ',
    donatingTo: ' text-2xl md:text-3xl font-extralight',
    paymentform: 'my-10 text-light text-xl',
    field: 'my-10 rounded-xl ',
    paymentbutton: 'flex justify-center items-center text-2xl rounded-full p-1 my-10',
    paymentbuttontext: 'flex items justify-center py-2 items-center w-[100%] text-2xl rounded-full bg-black cursor-pointer '

}

const Dpage =  () => {
  const context = useContext(transactionContext);
  const {Addtransaction ,currentAccount, payableContract , payableContractHash ,pay , setDNamount} = context;
  const [info , setinfo] = useState({Name: "" , Amount: ""});
//! animation function
  const onchange = async (e) =>{
    e.preventDefault();
    const set = await setinfo({...info , [e.target.name]:e.target.value});
    setDNamount(info.Amount);
    console.log(info);
  }

  const onclickpay = async () =>{
    // Addtransaction(info.Name , currentAccount , payableContractHash , payableContract , info.Amount)
    // Addtransaction(info.Name , "44154413218646515145" , payableContractHash , payableContract , info.Amount)
    setinfo({Name: "" , Amount: ""});
    pay();
  }

  return (
    <div className='donowrapper overflow-hidden' >
      <div className={style.TeamNameLogo}>
      <div className="container">
    <span className="text1">ZEN</span>
    <span className="text2">MODDERS</span>
  </div>
      </div>
      <div className={`payArea ${style.payArea}`}>
        <div className={style.paymentsetails}>
          <div className={`paymentmenu ${style.paymentmenu}`}>
            <div className={style.donatingTo}>
            <span>Donating To : {payableContract}</span>
            </div>
             <div className={style.paymentform}>
               <div className={`inputs ${style.field}`}>
                 <input onChange={onchange} type="text" placeholder='Name' name='Name'/>
               </div>
               <div className={`inputs ${style.field}`} >
                 <input onChange={onchange} type="number" placeholder='Amount' name='Amount'/>
               </div>
               <div className={`paymentbutton ${style.paymentbutton}`}>
                 <div className={style.paymentbuttontext} onClick={onclickpay}>
                Pay {info.Amount}
                </div>
               </div>
             </div>
            </div>        
        </div>
      </div>
    </div>
  )
}

export default Dpage