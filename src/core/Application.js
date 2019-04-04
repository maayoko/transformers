class Application {
	ready(render) {
		this.render = render;
		return this;
	}
	start() {
		this.render(this);
	}
}

export default Application;
