// SPDX-License-Identifier: GPL -2.0-or-Later
pragma solidity ^0.8.13;

contract StateVariable {
    // string public myState;
    // uint256 public myNum;

    // string public defaultText = "Punditpa";
    // uint256 public defaultNum = 5;

    // bytes public defaultBytes = "Pundit";
    
    // bytes public defaultBytesNo ;

    // uint256[ ] public Array;


// **//UPDATING A STATE VARAIBLE//**

// METHOD 1
    // string public myState;
    // uint256 public myNum;

    // constructor( string memory _text, uint _no){
    // myState = _text;
    // myNum = _no;
    // }

    // METHOD 2

    string public myState;
    uint256 public myNum;

    function update(string memory _text, uint _no) public {
        myState = _text;
        myNum = _no;
    }

}
