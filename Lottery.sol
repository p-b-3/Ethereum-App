pragma solidity ^0.4.24;

contract Lottery {
    
    address public manager;
    address[] public players;
    
    function Lottery() public {
        manager = msg.sender; //msg object is included anytime we invoke a function or create a contract
        //msg.data, msg.gas, and msg. value are examples 
        
    }
    
    function enter() public payable {
        require(msg.value > .01 ether); 
        players.push(msg.sender);
    }   
    
    function random() public view returns (uint) {
        return uint(keccak256(block.difficulty, now, players)); //returns a hash (hexidecimal number), so cast it as a uint             
    }
    
    function pickWinner() public restricted {
        
        uint index = random() % players.length;
        players[index].transfer(this.balance); //can call methods off of address
        lastWinner = players[index];
        players = new address[](0); //creates brand new dynamic array of addresses, initial size of 0
       
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
        
    function getPlayers () public view returns (address[]) {
        return players;
    }       
    
}
