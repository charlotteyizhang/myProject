(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _GameState = require('./states/GameState');

var _GameState2 = _interopRequireDefault(_GameState);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, document.getElementById('content').clientWidth, document.getElementById('content').clientHeight, Phaser.AUTO, 'content', null, true));

		_this.stateadd('preloader', Preloader, false);
		_this.state.add('gameState', _GameState2.default, false);
		_this.state.start('preloader');

		return _this;
	}

	return Game;
}(Phaser.Game);

new Game();

},{"./states/GameState":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RainbowText = function (_Phaser$Text) {
	_inherits(RainbowText, _Phaser$Text);

	function RainbowText(game, x, y, text) {
		_classCallCheck(this, RainbowText);

		var _this = _possibleConstructorReturn(this, (RainbowText.__proto__ || Object.getPrototypeOf(RainbowText)).call(this, game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" }));

		_this._speed = 500; //ms
		_this._colorIndex = 0;
		_this._colors = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf'];

		_this.colorize();
		_this.startTimer();

		_this.game.stage.addChild(_this);

		return _this;
	}

	_createClass(RainbowText, [{
		key: "startTimer",
		value: function startTimer() {
			this.game.time.events.loop(this._speed, this.colorize, this).timer.start();
		}
	}, {
		key: "colorize",
		value: function colorize() {

			for (var i = 0; i < this.text.length; i++) {

				if (this._colorIndex === this._colors.length) {
					this._colorIndex = 0;
				}

				this.addColor(this._colors[this._colorIndex], i);
				this._colorIndex++;
			}
		}
	}]);

	return RainbowText;
}(Phaser.Text);

exports.default = RainbowText;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initProjects = initProjects;
var brandingArray = ["Memrise", "UoE Library", "Raccoon Van", "Bill Business card"];

var uxArray = ["Jack Daniel's Redesign", "NCoins", "Library Mapping", "Foodsharing"];

var designObj = {
	"branding": brandingArray,
	"ux": uxArray
};

var websiteArray = ["Dollenge", "Browser art"];

var iotArray = ["Wardrobe", "Table"];

var installationArray = ["Composing with Paintings"];

var developObj = {
	"website": websiteArray,
	"iot": iotArray,
	"installation": installationArray
};

function initProjects() {

	$.each(designObj, function (key, val) {
		var idName = "#" + key + "-menu-selectors";
		$.each(val, function (_i, _value) {
			// var content = getContent(_value, isFirst(_i, key, "branding"));
			var content = getContent(_value, false);
			$(idName).append(content);
		});

		$(idName).children().hover(function () {
			var ending = splitProjectNameToGenerateId($(this).parent().attr("id"));
			menuSelectorHoverEvent($(this), ending);
		});
	});

	$.each(developObj, function (key, val) {
		var idName = "#" + key + "-menu-selectors";
		$.each(val, function (_i, _value) {
			// var content = getContent(_value, isFirst(_i, key, "branding"));
			var content = getContent(_value, false);
			$(idName).append(content);
		});
		$(idName).children().hover(function () {
			var ending = splitProjectNameToGenerateId($(this).parent().attr("id"));
			menuSelectorHoverEvent($(this), ending);
		});
	});

	$("#branding-menu-selectors").children().first().addClass("selected");
	$("#website-menu-selectors").children().first().addClass("selected");
}

function getContent(val, highlight) {
	var valSplit = splitProjectNameToGenerateId(val);
	var selectorId = "#menu-selectors-" + valSplit;
	var className;
	if (highlight) {
		className = "project-menu-item selected";
	} else {
		className = "project-menu-item";
	}
	var content = "<div id=" + selectorId + " class=\"" + className + "\"><span>";
	content += val;
	content += "</span></div>";
	return content;
};

function menuSelectorHoverEvent(e, ending) {

	var currentName = e.attr('id');
	var arr = currentName.split("-");
	ending = ending.split("-");
	var mappingName = "#" + arr[2] + "-" + ending;
	e.parent().siblings().children().removeClass("selected");
	e.addClass("selected").siblings().removeClass("selected");
	$(mappingName).addClass("active").siblings().removeClass('active');
}

function splitProjectNameToGenerateId(val) {
	var arr = val.split(" ");
	var valSplit = arr[0];
	return valSplit;
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Translator = function (_Phaser$Group) {
	_inherits(Translator, _Phaser$Group);

	function Translator(game) {
		_classCallCheck(this, Translator);

		var _this = _possibleConstructorReturn(this, (Translator.__proto__ || Object.getPrototypeOf(Translator)).call(this, game));
		// let center = { x: this.game.world.centerX, y: this.game.world.centerY }


		var scriptName = document.getElementById("scriptName").value;
		return _this;
	}

	return Translator;
}(Phaser.Group);

exports.default = Translator;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _RainbowText = require('../objects/RainbowText');

var _RainbowText2 = _interopRequireDefault(_RainbowText);

var _translator = require('../objects/translator');

var _translator2 = _interopRequireDefault(_translator);

var _utils = require('../utils/utils');

var Utils = _interopRequireWildcard(_utils);

var _dynamicProjects = require('../objects/dynamicProjects');

var DynamicProjects = _interopRequireWildcard(_dynamicProjects);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GameState = function (_Phaser$State) {
	_inherits(GameState, _Phaser$State);

	function GameState() {
		_classCallCheck(this, GameState);

		return _possibleConstructorReturn(this, (GameState.__proto__ || Object.getPrototypeOf(GameState)).apply(this, arguments));
	}

	_createClass(GameState, [{
		key: 'create',
		value: function create() {

			var center = { x: this.game.world.centerX, y: this.game.world.centerY };

			var text = new _RainbowText2.default(this.game, center.x, center.y, "VPIEC Lazy Tool");
			text.anchor.set(0.5);

			DynamicProjects.initProjects();
			Utils.initNav();
		}
	}]);

	return GameState;
}(Phaser.State);

exports.default = GameState;

},{"../objects/RainbowText":2,"../objects/dynamicProjects":3,"../objects/translator":4,"../utils/utils":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initNav = initNav;
exports.scroll = scroll;
function initNav() {

	//init Nav
	$("#navbarNavAltMarkup a").on('click', function (event) {
		// $('.nav-active').removeClass('nav-active');
		// $(this).parent().addClass('nav-active');
		scroll(this);
	});

	$("#design-bg a").on('click', function (event) {
		scroll(this);
	});
	$("#programming-bg a").on('click', function (event) {
		scroll(this);
	});
}

function scroll(el) {
	// if(window.location.href.indexOf('index') != -1){
	if (el && el.hash !== "") {
		event.preventDefault();
		var hash = el.hash;
		var navBarHeight = document.getElementById('navbarNavAltMarkup').clientHeight;
		$('html, body').animate({
			scrollTop: $(hash).offset().top - navBarHeight
		}, 1000, function () {
			window.location.hash = '';
		});
	} else {
		if (window.location.hash !== "") {
			// event.preventDefault();
			var hash = window.location.hash;
			window.location.hash = '';

			setTimeout(function () {
				var navBarHeight = document.getElementById('navbarNavAltMarkup').clientHeight;

				$('html, body').animate({
					scrollTop: $(hash).offset().top - navBarHeight
				}, 1000, function () {});
			}, 500);
		}
	}

	// }
}

},{}]},{},[1])
//# sourceMappingURL=game.js.map
