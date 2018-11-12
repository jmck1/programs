function Deck(){
	var deck = ['AS', 'AH', 'AC', 'AD', 'KS', 'KH', 'KC', 'KD',
				'QS', 'QH', 'QC', 'QD', 'JS', 'JH', 'JC', 'JD',
				'10S', '10H', '10C', '10D', '9S', '9H', '9C', '9D',
				'8S', '8H', '8C', '8D', '7S', '7H', '7C', '7D',
				'6S', '6H', '6C', '6D', '5S', '5H', '5C', '5D',
				'4S', '4H', '4C', '4D', '3S', '3H', '3C', '3D',
				'2S', '2H', '2C', '2D'];
	var deck1 = ['AS', 'AH', 'AC', 'AD', 'KS', 'KH', 'KC', 'KD',
				'QS', 'QH', 'QC', 'QD', 'JS', 'JH', 'JC', 'JD',
				'10S', '10H', '10C', '10D', '9S', '9H', '9C', '9D',
				'8S', '8H', '8C', '8D', '7S', '7H', '7C', '7D',
				'6S', '6H', '6C', '6D', '5S', '5H', '5C', '5D',
				'4S', '4H', '4C', '4D', '3S', '3H', '3C', '3D',
				'2S', '2H', '2C', '2D'];
	this.shuffle = function(){
		for (var i=0; i<deck.length; i++){
			shuf = Math.floor(Math.random() * 52);
			tmp = deck[i];
			deck[i] = deck[shuf];
			deck[shuf] = tmp;
		}
		return this;
	}
	this.reset = function(){
		for (var i=0; i<deck1.length; i++){
			deck[i] = deck1[i];
		}
		return this;
	}
	this.deal = function(){
		return deck.pop();
		return this;
	}
	this.get_deck = function(){
		return deck;
	}
}
function Player(name){
	this.name = name;
	this.hand = [];
	this.addcard = function(deck){
		this.hand.push(deck.deal());
		return this;
	}
	this.discard = function(){
		this.hand.pop();
		return this;
	}
}
deck = new Deck();
player = new Player('John');
deck.shuffle();
console.log(deck.get_deck().length, deck.get_deck());
player.addcard(deck).addcard(deck).addcard(deck).addcard(deck).addcard(deck).addcard(deck).addcard(deck).addcard(deck);
console.log(player.hand);
console.log(deck.get_deck().length, deck.get_deck());
player.discard().discard().discard().discard();
deck.reset();
console.log(player.hand);
console.log(deck.get_deck().length, deck.get_deck());
console.log(typeof([1,2]));
