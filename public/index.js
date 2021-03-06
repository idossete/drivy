'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

//EXERCICE 1////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cactime(time_begin, time_final)
{
	var timeBegin = new Date(time_begin);
	var timeFinal = new Date(time_final);
	var time = timeFinal.getDate()-timeBegin.getDate()+1;
	return time;
}

function rental_time(time,price)
{
	//var prix= new var(price);
	var rentaltime_result=time*price;
	return rentaltime_result;
}

function rental_distance(distance, price){
	var rentaldistance_result=distance*price;
	return rentaldistance_result;
}

for(var i=0; i<rentals.length;i++)
{
	var cactime_result =cactime(rentals[i].pickupDate, rentals[i].returnDate);
	var rental_time_result = rental_time(cactime_result,cars[i].pricePerDay);
	var rental_distance_result=rental_distance(rentals[i].distance, cars[i].pricePerKm);
	var rental_price=rental_time_result + rental_distance_result;
	//alert(rental_distance_result);
	alert(rentals[i].driver.firstName + ' ' + '\nRental Price:' + ' ' + rental_price + '$');
	rentals[i].price = rental_price;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EXERCIE2////////////////////////////////////////////////////////////////////////////////////////////////////////////
for(var i=0; i<rentals.length;i++){
	var cactime_result =cactime(rentals[i].pickupDate, rentals[i].returnDate);
	if(cactime_result>1 && cactime_result<=4)
	{
		alert('before' + rental_price);
		rental_price = rental_price*0.90;
		alert(rental_price);
		rentals[i].price = rental_price;
	}
	else if(cactime_result>4 && cactime_result<=10)
	{
		alert('before' + rental_price);
		rental_price = rental_price*0.70;
		alert(rental_price);
		rentals[i].price = rental_price;
	}
	else if(cactime_result>10)
	{
		alert('before' + rental_price);
		rental_price = rental_price*0.50;
		alert(rental_price);
		rentals[i].price = rental_price;
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
