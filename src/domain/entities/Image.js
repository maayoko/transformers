import Base from "./Base";

class Image extends Base {
	constructor(standardSrc, goldSrc = "", darkSrc = "") {
		super();
		this.standard = standardSrc;
		this.gold = goldSrc;
		this.dark = darkSrc;
	}
}

export default Image;
