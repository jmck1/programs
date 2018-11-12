function VehicleConstructor(name, numwheels, numpass, speed){
	if (!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name, numwheels, numpass, speed);
	}

	var vin = Math.floor(Math.random() * 1000000000);

	this.distance_travelled = 0;
	this.name = name;
	this.numwheels = numwheels;
	this.numpass = numpass;
	this.speed = speed;
	this.get_vin = function(){
		return vin;
	}
	this.makeNoise = function(){
		console.log('VRROOOOOM!');
		return this;
	}
}
VehicleConstructor.prototype.updateDistanceTravelled = function(){
	this.distance_travelled += this.speed;
	return this;
}
VehicleConstructor.prototype.move = function(){
	this.updateDistanceTravelled();
	this.makeNoise();
	return this;
}
VehicleConstructor.prototype.checkMiles = function(){
	console.log(this.distance_travelled);
	return this;
}

var bike = new VehicleConstructor('Bike', 2, 1, 25);
bike.makeNoise = function(){
	console.log('Ring Ring!');
}
bike.move().checkMiles();
console.log(bike.get_vin());

var sedan = new VehicleConstructor('Sedan', 4, 5, 90);
sedan.makeNoise = function(){
	console.log('Honk Honk!');
}
sedan.move().checkMiles();
console.log(sedan.get_vin());

var bus = new VehicleConstructor('Bus', 4, 1, 55);
bus.makeNoise = function(){
	console.log('AAAWWOOOGAA!');
}
bus.pickuppass = function(num){
	bus.numpass += num;
}
bus.move().checkMiles();
console.log(bus.get_vin());