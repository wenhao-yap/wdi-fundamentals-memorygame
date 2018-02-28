var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},		
];
var cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.")
	}
}

var flipCard = function(){
	var cardId=this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	this.setAttribute("src",cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if(cardsInPlay.length===2){
		checkForMatch();
	}
}

var createBoard = function(){
	for(var i =0;i<cards.length;i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click",flipCard);
		var board = document.getElementById("game-board");
		board.appendChild(cardElement);
	}
}

function resetGame(){
	//temporary code
	alert("Yet to be implemented!");
	//code to be added
}

createBoard();