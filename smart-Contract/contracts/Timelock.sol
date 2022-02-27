// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;



contract timelock {
  uint public constant duration = 2 days;
  uint public end;
  address payable public immutable owner;

  constructor(address payable _owner) {
    end = block.timestamp + duration;
    owner = _owner; 
  }

  function timeLeft() public view returns(uint){
        return end -block.timestamp;
  }

  function getBalance() public view returns(uint){
      return address(this).balance;
  }

 
 function getFunds() external payable{

 }

  receive() external payable {}
  
  function withdraw() external payable{
    
    require(block.timestamp >= end,"not yet");
    selfdestruct(owner);
  }

}
 