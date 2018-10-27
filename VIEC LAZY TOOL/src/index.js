import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(document.getElementById('content').clientWidth, document.getElementById('content').clientHeight, Phaser.AUTO, 'content', null, true);
		// this.state.add('boot', Boot,)
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');


	}


}

new Game();
