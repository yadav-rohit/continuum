import React from 'react'

function ContactUs() {
  return (
    <div className="text-white">
       <div class="contactheading bgclip text-5xl">We'd love to <br/> hear from you</div>

<form action="none" class="reg">
    <p id="firstName" class="inputPara"> FIRST NAME<input type="text" name="" class="contactusinfo"
            placeholder="Enter your first name"/></p>
    <p id="lastName" class="inputPara"> LAST NAME<input type="text" name="" class="contactusinfo"
            placeholder="Enter your last name"/></p>
    <p id="email" class="inputPara"> EMAIL<input type="text" name="" class="contactusinfo" placeholder="Enter your email"/>
    </p>
    <p id="wallet" class="inputPara"> WALLET ID<input type="text" name="" class="contactusinfo"
            placeholder="Enter your wallet ID"/></p>
    <p id="des" class="inputPara"> DESCRIPTION<input type="text" name="" class="contactusinfo"
            placeholder="Enter description"/></p>
    <p class="inputPara" id="proof">PROOF <input type="submit" value="Upload" class="contactusinfo2"/></p>
    <p class="inputPara" id="sub"><input type="submit" value="Submit" class="contactusinfo2 contactusinfo3"/></p>
</form>

<div class="contact">
    <h3>Email us</h3> <br/>
    <p>abcd@gmail.com</p>
</div>

    </div>
  )
}

export default ContactUs