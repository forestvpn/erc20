// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

/// @custom:security-contact sec@forestvpn.com
contract ForestVPN is ERC20, ERC20Burnable, ERC20Permit {
    constructor() ERC20("ForestVPN", "FST") ERC20Permit("ForestVPN") {
        _mint(msg.sender, 200_000_000 * 10 ** decimals());
    }
}