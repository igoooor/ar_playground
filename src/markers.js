import { Marker } from './classes/marker.js';

var marker = new Marker(
	'customMarker',
	'custom',
  	'pattern',
  	'https://raw.githubusercontent.com/igoooor/ar_playground/master/markers/start-marker.patt',
  	''
);


var markers = [
	marker,
];



var sceneEl = document.querySelector('a-scene');

//for (i = 0; i < markers.length; i++) {
markers.forEach(function(marker) {
	//var marker = markers[i];
	var markerEl = document.createElement('a-marker');
	markerEl.setAttribute('id', marker.id);
	markerEl.setAttribute('preset', marker.preset);
	markerEl.setAttribute('type', marker.type);
	markerEl.setAttribute('url', marker.url);

	var el = document.createElement('a-box');

	el.id = 'customBox';
	el.setAttribute('position', '0 0 0');
	el.setAttribute('color', "orange");


	markerEl.appendChild(el);
	sceneEl.appendChild(markerEl);
//}
});
