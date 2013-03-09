


Crafty.c("Walker", {
	topHalf: null,
	bottomHalf: null,
	balance: 0,
	frameCounter: 0,
	init: function() {		
		this.addComponent("2D, Keyboard");
	},
	initializeWalker: function() {
			this.bind("EnterFrame", this.onFrame);
		this.bind("KeyDown", function() {
			if(this.isDown('UP_ARROW'))
				{
					this.y -= 10;
					this.sway();
				}
			else if(this.isDown('RIGHT_ARROW'))
				{
					this.balance += 10;
				}
			else if(this.isDown('LEFT_ARROW'))
				{
					this.balance -= 10;
				}
		});
		this.topHalf = Crafty.e("2D, Color, DOM")
					.attr({x: this.x, y: this.y, w: 30, h: 30})
					.color("blue");
		
		this.bottomHalf = Crafty.e("2D, Color, DOM")
					.attr({x: this.x, y: this.y + 30, w: 30, h: 30})
					.color("blue");
		},
	onFrame: function() {
		this.frameCounter++;
		if(this.frameCounter == 15)		
			{
				this.sway();
				this.frameCounter = 0;
			}
		this.topHalf.x += (this.balance);

		if(Crafty.math.distance(this.topHalf.x, 0, this.x, 0) > 170)
			{
				Crafty.scene("GameOverScene");
			}
		this.updateYs();
		},
	updateYs: function() {
		this.topHalf.y = this.y;
		this.bottomHalf.y = this.y + 30;
		},
	sway: function() {
		var swag = 0;
		if(this.balance > 0) // if we're leaning right, favor bending right more
			{
				swag = Crafty.math.randomInt(0, 4);
				if(swag < 2)
					swag *= -1;
			}
		else if(this.balance < 0) // If we're leaning left, favor bending left more
			{
				swag = Crafty.math.randomInt(0, 4);
				if(swag > 2)
					swag *= -1;
			}
		else
			{
				swag = Crafty.math.randomInt(0, 2);
				if(swag < 2)
					swag *= -1;
			}
		this.balance += swag;
		}
	});
