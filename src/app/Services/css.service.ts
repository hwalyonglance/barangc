import { Injectable } from '@angular/core';
import { AnimateCss } from '../Interfaces/animate-css';

@Injectable()
export class CSSService {
	constructor() { }
	animate(config: AnimateCss): void {
		const el = document.querySelector(config.selector);
		el['style'].animationDuration = '1s';
		el['style'].animationIterationCount = config.count ? config.count : 'infinite';
		el.className = config.className;
		setTimeout(() => {
			el.className = el.className.split(' ').filter((className) => {
				return className !== config.className;
			}).join();
		}, config.duration ? config.duration : 1000);
	}
}
