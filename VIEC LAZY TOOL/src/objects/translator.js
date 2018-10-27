class Translator extends Phaser.Group {

	constructor(game) {
		// let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		super(game);
		
		var scriptName = document.getElementById("scriptName").value;
	}

}

export default Translator;
