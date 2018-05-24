import { Marker } from '../marker.js';

var el = document.createElement('a-image');

el.setAttribute('src', 'https://raw.githubusercontent.com/igoooor/ar_playground/master/assets/images/arrow.png');
el.setAttribute('rotation', "-90 0 0");

var marker = new Marker(
	'start',
	'custom',
  	'pattern',
  	'https://raw.githubusercontent.com/igoooor/ar_playground/master/assets/markers/start-marker.patt',
  	el
);

export {
	marker,
};