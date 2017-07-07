import { animateCSS } from '../Types/animate-css';
export interface AnimateCss {
	selector: string;
	className: animateCSS;
	duration: number;
	count?: string | number;
}
