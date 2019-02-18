import {render, html} from 'lighterhtml';

class FullCenter extends HTMLElement {
	constructor() {
		super();

		render(this.attachShadow({mode: 'closed'}), () => html`
			<style>
				:host {
					display: flex;
					flex-flow: row;
					flex: 1 0;
				}

				.vflex {
					display: flex;
					flex-flow: column;
				}

				.grow {
					flex: 1 0;
				}
			</style>
			<div class=grow/>
			<div class=vflex>
				<div class=grow/>
				<slot/>
				<div class=grow/>
			</div>
			<div class=grow/>
		`);
	}
}

customElements.define('full-center', FullCenter);
