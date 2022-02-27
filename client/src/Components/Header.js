import React, { useContext , useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import transactionContext from '../context/transactionCntxt';
import Dpage from './Dpage';



const style = {
    Navbar: 'flex flex-wrap text-white justify-between p-10 px-20',
    navlogo: 'flex w-1/5 items-center text-3xl',
    navlist: 'flex flex-wrap w-3/5 justify-between',
    navitems: 'flex items-center cursor-pointer ',
    connectusbtn: 'p-0.5 rounded-full',
    btntext: ' p-2 px-4 rounded-full text-black',
    cnctustext: 'p-2 px-4 rounded-full  bg-[#000000]',
    connectwaletbtn: 'bg-white rounded-full'
}

function Header() {
    const context  = useContext(transactionContext);
  const { connectWallet , currentAccount } = context;
  const [user, setUserName] = useState();
    const handlewalletclick = () =>{
        connectWallet();
        console.log(currentAccount);
    }
    useEffect(() => {
        if (currentAccount) {
     ;(async () => {
      setUserName(
           `${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`,
         ) 
     })()
   }
   else{
    setUserName("Connect Wallet");
   }
},[currentAccount])
  return (
    <div className={style.Navbar}>
        <div className={style.navlogo}>
            Continuum
            {/* just kept logo for refrence */}
             {/* <img  src={logo} alt="Logo" height={70} width={70} /> */}
        </div>
        <div className={style.navlist}>
            <div className={style.navitems}>
            <Link to="/">Home</Link>
                </div>
            <div className={style.navitems}>
            <Link to="/About">About</Link>
                </div>
            <div className={style.navitems}>
                <Link to="/Helper">Want To Help ?</Link>
                </div>
            <div className={style.navitems}>
                <div className={`bganimation ${style.connectusbtn}`} >
                    <div className={style.cnctustext}>
                     <Link to="Contact" > Connect with us </Link>
                    </div>
                </div>
            </div>
            <div className={style.navitems}>
                <div onClick={handlewalletclick} className={`buttonanim ${style.connectwaletbtn}`}>
                <div className={style.btntext}>
                        {user}
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
  }

export default Header;