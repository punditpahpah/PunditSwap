// SPDX-License-Identifier: GPL -2.0-or-Later
pragma solidity ^0.8.13;

contract LocalVariable {
    uint256 public MyNumber;

    // function local() public pure returns(uint256) {
    //     uint256 i = 300;
    //     return i;
    // }


    // when updating local var.  you cant run the code using the view functions
    // function local() public returns (uint256) {
    //     uint256 i = 300;
    //     MyNumber = i;
    //     return i;
    // }


    function local() public returns (address, uint256, uint256) {
        uint256 i = 4330;
        MyNumber = i;
        i += 45;
        address myAddress = address(1);
        return (myAddress, MyNumber, i);
    }
}
