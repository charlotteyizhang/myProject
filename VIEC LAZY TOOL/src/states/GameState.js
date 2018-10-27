import RainbowText from 'objects/RainbowText';
import Translator from 'objects/translator';

class GameState extends Phaser.State {

	create() {

		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let text = new RainbowText(this.game, center.x, center.y, "VPIEC Lazy Tool");
		text.anchor.set(0.5);
	}

}

export default GameState;
