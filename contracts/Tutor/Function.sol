// SPDX-License-Identifier: GPL -2.0-or-Later
pragma solidity ^0.8.13;

// contract MyFirstContract {
//     string public hey;
//     uint256 public num;


// string public hey = "pundit";
//     uint256 public 7;

    // constructor(string memory _hey, uint _num) {
    //     hey = _hey;
    //     num = _num;
    // }

    function AddInfo( string memory _hey, uint _num ) public {
        hey = _hey;
        num = _num;
    }


contract NFTCount{

    uint256 public numberOfNFT;

    function CheckTotalNFT() public view returns (uint256){
return numberOfNFT;
    }

    function addNFT() public {
        numberOfNFT += 1;
    }

    function deleteNFT() public {
        numberOfNFT -= 1;
    }
}


contract LearnFunction{

    uint256  hey;

    function getInfo() public view returns (uint256){
        return hey;
    }

    function UpdateData( uint256 _Pundit ) public {
        hey = _Pundit ;
    }

    function get( uint256 _a, uint256 _b) public view returns (uint){
        uint256 newNum = _a + _b ;
        return newNum;
    }
}

