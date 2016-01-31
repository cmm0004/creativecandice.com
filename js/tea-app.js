

	var app = angular.module('journal', [ ]);
	
	app.controller('TeaController', function(){
		this.product = teas;
		this.predicate = teas.steepTime;
		});
	
		
	var teas = [
	{
	name: 'Black Tea',
	steepTime: 3,
	steepTemp: 212,
	caffiene: ['High', 8],
	image: "./imgs/black-tea-cup.png"
	},
	{
	name: 'Green Tea',
	steepTime: 2.5,
	steepTemp: 185,
	caffiene: ['Low', 2],
	image: "./imgs/green-tea-cup.png"
	},
	{
	name: 'Oolong Tea',
	steepTime: 4,
	steepTemp: 175,
	caffiene: ['Medium', 6],
	image: "./imgs/oolong-tea-cup.png"
	}
	];
	
	