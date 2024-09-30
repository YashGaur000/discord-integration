// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.20;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// contract MyToken is ERC20{
//     address public owner;
//     uint256 public constant FEE_PERCENTAGE = 10;

//     constructor() ERC20("Hatake", "HTK"){
//         owner =  msg.sender;
//         _mint(msg.sender, 100*10**decimals());
//     }

//      function transfer(address recipient, uint256 amount) public override returns (bool) {
//         uint256 fee = (amount * FEE_PERCENTAGE) / 100; 
//         uint256 amountAfterFee = amount - fee;

//         bool success = super.transfer(recipient, amountAfterFee);
//         require(success, "Transfer failed");

//         success = super.transfer(owner, fee);
//         require(success, "Fee Transfer failed");

//         return success;
//     }

//     function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
//         uint256 fee = (amount * FEE_PERCENTAGE) / 100;
//         uint256 amountAfterFee = amount - fee;

//         bool success = super.transferFrom(sender, recipient, amountAfterFee);
//         require(success, "Transfer failed");

//         success = super.transferFrom(sender,owner, fee);
//         require(success, "Fee Transfer Failed");

//         return success;
//     }

// }