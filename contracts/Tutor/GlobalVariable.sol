// SPDX-License-Identifier: GPL -2.0-or-Later
pragma solidity ^0.8.13;

contract GlobalVariable {
    address public owner;
    address public Myblockhash;
    uint256 public difficulty;
    uint256 public gasLimit;
    uint256 public number;
    uint256 public timestamp;
    uint256 public value;
    uint256 public nowon;
    address public origin;
    uint256 public gasprice;
    bytes public callData;
    bytes4 public Firstfour;

    constructor() {
        owner = msg.sender;
        // 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
    }
}
