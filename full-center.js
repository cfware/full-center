import {ShadowElement, html} from '@cfware/shadow-element';

class FullCenter extends ShadowElement {
	get template() {
		return html`
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
		`;
	}
}

FullCenter.define('full-center');
