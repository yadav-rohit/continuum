import React from 'react'
import Team from './Team'
import Authentic from '../assets/image/Authentication.jpg'
import wallet from '../assets/image/Wallet.jpg'
import contract from '../assets/image/SmartContract.jpg'
import timer from '../assets/image/Timer.jpg'

const style = {
    wrapper: 'p-10  flex flex-col justify-between items-center  ',
    contentPallets: 'flex py-4 my-5 items-center',
    contentPalletImage: ' h-[35vh] rounded-xl',
    featurecardArea: 'flex w-[100%] flex-col md:flex-row justify-evenly',
    featureCards: 'flex text-white rounded-xl justify-center items-center shadow-xl  w-1/4 shadow-orange-700/40 p-5',
    WorkflowWrapper: 'grid grid-col-2 mt-10 grid-row-flow w-[100%] md:w-[80%]  p-5',
    workwrapperCards: 'flex justify-center items-center w-3/4 mx-3 my-4 bg-black rounded-xl row-span-3 col-span-1 shadow-2xl shadow-orange-700/30 p-4',
    workCardtext: 'text-2xl text-white my-5',
    workcardImage: 'flex shadow-inner justify-center items-center w-[100%] rounded-xl my-10 h-[30vh]'
}

function About() {
    return ( <
            >
            <
            div className = { style.wrapper } >
            <
            div className = "flex bgclip text-center justify-center items-center text-3xl md:text-7xl font-bold mb-10 md:mb-15" >
            Revolutionizing < br / >
            the Current System <
            /div> <
            div className = " flex w-[100%] md:w-[80%] text-white text-center mt-10 md:mt-20 justify-center items-center text-2xl md:text-4xl font-bold mb-10 md:mb-20" >
            <
            div className = 'inline-block' >
            We, at < div className = "bgclip inline-block"
            htmlFor = "companyname" > CONTINUUM < /div> are solving this problem by implementing blockchain technology which completely removes the trust factor by being completely transparent. < /
            div > <
            /div> <
            div className = { style.featurecardArea } >
            <
            div className = { style.featureCards } >
            <
            div className = 'text-2xl mb-5' > Transparent < /div> { / * < div className = 'text-xl' > hahahahaha < /div> */
        } <
        /div> <
    div className = { style.featureCards } >
        <
        div className = 'text-2xl mb-5' > Decentralised < /div> { / * < div > hahahahaha < /div> */
} <
/div> <
div className = { style.featureCards } >
    <
    div className = 'text-2xl mb-5' > Secure < /div> { / * < div > hahahahaha < /div> */
} <
/div> < /
div > <
    div className = "flex w-[100%] md:w-[80%] justify-start bgclip  text-3xl md:text-7xl font-bold mt-15 md:mt-20 mb-10 md:mb-15 " > {
        /* Detailed <br />
           Process : <br /> */
    }
How Do we Work ?
    <
    /div> <
div className = { style.WorkflowWrapper } >
    <
    div className = { `col-start-2 row-start-2 ${style.workwrapperCards}` } >
    <
    div className = { style.workCardtext } >
    <
    img className = { style.workcardImage }
src = { wallet }
/>
After successful verification, further processes are commenced using the beneficiary’ s unique wallet address. <
    /div>  < /
div > <
    div className = { `col-start-1 row-start-5 ${style.workwrapperCards}` } >
    <
    div className = { style.workCardtext } >
    <
    img className = { style.workcardImage }
src = { contract }
/>
Our technology then creates a time - locked smart contract making the beneficiary the owner at the time of creation of contract, ensuring that no one can interfere with the payments received in contract during that time - window. <
    /div> < /
div > <
    div className = { `col-start-2 row-start-6  ${style.workwrapperCards}` } >
    <
    div className = { style.workCardtext } >
    <
    img className = { style.workcardImage }
src = { timer }
/>
The deployed smart contract then self - destructs and the recipient receives all funds in their wallet automatically.after the specified time. <
    /div> < /
div > <
    div className = { `col-start-1  row-start-8 ${style.workwrapperCards}` } >
    <
    div className = { style.workCardtext } >
    <
    img className = { style.workcardImage }
src = { Authentic }
/>
We start with double - checking that the recipient 's requirements are genuine.

<
/div> < /
div > <
    /div> <
div className = "flex w-[100%] md:w-[80%] justify-center bgclip  text-3xl md:text-7xl font-bold mt-15 md:mt-20 mb-10 md:mb-15 " >
    Team <
    /div>

<
/div> <
Team / >
    <
    />
)
}

export default About