	function addFieldGraphics(){
		var field = new createjs.Shape();
		field.graphics.beginFill("LightGreen").drawRect(0,0,1000,500);
		stage.addChild(field);

		var lineOfScrimmage = new createjs.Shape();
		lineOfScrimmage.graphics.beginFill("White").drawRect(0,250,1000,10);
		stage.addChild(lineOfScrimmage); 
		
		addYardMarkers(-1);
		addYardMarkers(-2);
		addYardMarkers(-3);
		addYardMarkers(-4);
		addYardMarkers(1);
		addYardMarkers(2);		
		addYardMarkers(3);		
		addYardMarkers(4);
	}
	function addYardMarkers(yardOffsetFromLOS){
		var leftMarker = new createjs.Shape();
		leftMarker.graphics.beginFill("White").drawRect(0,250 + (yardOffsetFromLOS*50),40,10);
		stage.addChild(leftMarker); 
		
		var rightMarker = new createjs.Shape();
		rightMarker.graphics.beginFill("White").drawRect(1000 - 40,250 + (yardOffsetFromLOS*50),40,10);
		stage.addChild(rightMarker); 
	}
	