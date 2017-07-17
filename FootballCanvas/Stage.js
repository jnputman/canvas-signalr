(function (window) {
    function MainStage (canvasId){
        canvas = document.getElementById(canvasId);
		stage = this.Stage_constructor(canvas);
		createjs.Touch.enable(stage);
		stage.enableMouseOver();
		stage.mouseMoveOutside = true;
    }
    var ms = createjs.extend(MainStage, createjs.Stage);

    var canvas;
    var stage;
    var update;

	window.MainStage = createjs.promote(MainStage, "Stage");
}(window));