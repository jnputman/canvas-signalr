(function (window) {

	function PlayerCircle(name, abbreviation, color) {
		this.Container_constructor();
		
		this.name = name;
		this.abbreviation = abbreviation;
		this.color = color;
		this.allowDragDrop = true;
		
		this.setup();
	}
	var playerCircle = createjs.extend(PlayerCircle, createjs.Container);

	var allowDragDrop;
	
	playerCircle.setup = function() {
		var text = new createjs.Text(this.abbreviation, "20px Arial", "#FFF");
		text.textBaseline = "top";
		text.textAlign = "center";
		
		// var width = text.getMeasuredWidth()+30;
		// var height = text.getMeasuredHeight()+20;
		var diameter = 24;
		
		
		var playerCircle = new createjs.Shape();
		playerCircle.graphics.setStrokeStyle(2)
						   .beginStroke("black")
						   .beginFill(this.color)
						   .drawCircle(100,100, diameter)
		
		text.x = this.x + 100;
		text.y = this.y + 100 - diameter / 2;
		
		this.addChild(playerCircle, text); 
		this.on("doubleclick", this.handleDoubleClick);
		this.on("rollover", this.handleRollOver);
		this.on("rollout", this.handleRollOut);
		this.on("mousedown", this.handleMouseDown);
		this.on("pressmove", this.handlePressMove);
		this.on("pressup", this.handlePressUp);
		this.cursor = "pointer";

		this.mouseChildren = false;
		
		this.offset = Math.random()*10;
		this.count = 0;
	};
	
	playerCircle.handleDoubleClick = function(event) {
		alert("You selected player: "+this.name);
	};

	playerCircle.handleRollOver = function(event) {    
        this.alpha = 0.8;
        //this.scaleX = this.scaleY = 1.2;
        this.update = true;
	};
    playerCircle.handleRollOut = function(event) {    
        this.alpha = 1;
        //this.scaleX = this.scaleY = 1;
        this.update = true;
	};

	playerCircle.handleMouseDown = function(event) {
		if (this.allowDragDrop){
			var o = event.target;
            o.alpha = 0.6;
			o.parent.addChild(o);
			o.offset = {x: o.x - event.stageX, y: o.y - event.stageY};
			update = true;
		}
    }
    
	playerCircle.handlePressUp = function(event) {
		if (this.allowDragDrop){
			var o = event.target;
            o.alpha = 1.0;
			update = true;
		}
	}
	
	playerCircle.handlePressMove = function(event) {
		if (this.allowDragDrop){
			var o = event.target;
			o.x = event.stageX + o.offset.x;
            o.y = event.stageY + o.offset.y;
            
			// indicate that the stage should be updated on the next tick:
			update = true;
		}
	}

	window.PlayerCircle = createjs.promote(PlayerCircle, "Container");
}(window));