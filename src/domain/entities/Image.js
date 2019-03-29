import Base from "./Base";

class Image extends Base {
	constructor(standardSrc, goldSrc = "", darkSrc = "") {
		super();
		this._standard = standardSrc;
		this._gold = goldSrc;
		this._dark = darkSrc;
	}

	get standard() {
		return this._standard;
	}

	get gold() {
		return this._gold;
	}

	get dark() {
		return this._dark;
	}
}

export default Image;
