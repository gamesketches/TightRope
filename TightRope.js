window.onload = (function() {

	var WIDTH = 1000,
		HEIGHT = 600;

	//Crafty.sprite(2906, "onettday.png", {backgroundSprite: [0,0]});
	
	Crafty.sprite(2007, "zeldaMap.png", {backgroundSprite: [0,0]});

	Crafty.init(WIDTH, HEIGHT);

	Crafty.scene("GameOverScene", function () {
		Crafty.background('black');
	});

	Crafty.scene("victoryScene", function() {
		Crafty.background('white');
	});

	Crafty.scene("gameplayScene", function () {
	
	var backgroundImage = Crafty.e("2D, Keyboard, DOM, backgroundSprite")
			//.attr({x: -600, y: -1000, w: 2906, h: 3328}); onett specs
			.attr({x: 0, y: -1000, w: 2007, h: 2007});

	backgroundImage.bind("KeyDown", function() {
		if(this.isDown('UP_ARROW'))
			this.y += 20;
		});

	var rope = Crafty.e("2D, Color, DOM")
			.attr({x: 515, y: 0, w: 3, h: 600})
			.color("red");

	var bro = Crafty.e("Walker")
			.attr({x: 500, y: 300, w: 30, h: 30});
	bro.initializeWalker();
	});
	
	Crafty.scene("gameplayScene");
});
