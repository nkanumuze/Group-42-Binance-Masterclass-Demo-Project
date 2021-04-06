pragma solidity ^0.6.0;

contract SolidWasteToken {

// variables  
  
string public name = "SolidWasteToken";
string public symbol = "SWT"; 
uint256 public decimals = 6;
uint256 public totalSupply;
mapping(address => uint256) private balanceOf;
mapping(address => mapping(address => uint256)) private allowance;

// Events

event Transfer(address indexed from, address indexed to, uint256 value);
event Approval(address indexed owner, address indexed spender, uint256 value);

constructor() public {
    totalSupply = 10 * (10 ** decimals);
    balanceOf[msg.sender] = totalSupply;
}

// @dev

function _totalSupply() public returns (uint256) {
    return totalSupply;
}

function _name() public returns (string memory) {
    return name;
}

function _symbol() public returns (string memory) {
    return symbol;
}

function _decimals() public returns (uint256) {
    return decimals;
}


function transfer(address _to, uint256 _value) private returns (bool success) {
require(balanceOf[msg.sender] >= _value);
_transfer(msg.sender, _to, _value);
return true;
}

function _transfer(address _from, address _to, uint256 _value) private {
require(_to != address(0));
balanceOf[_from] -= _value;
balanceOf[_to]   += _value;
emit Transfer(_from, _to, _value);
}

function approve(address _spender, uint256 _value) private returns (bool success) {
    require(_spender !=address(0));
    allowance[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
}

function transferFrom(address _from, address _to, uint256 _value) private returns (bool success) {
 require(_value <= balanceOf[_from]);
 require(_value <= allowance[_from][msg.sender]);
 allowance[_from][msg.sender] -= _value;
_transfer(_from, _to, _value);
   return true;
}

}