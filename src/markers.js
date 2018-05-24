import { markers } from './markers/index.js';


function loadMarkers() {

	var sceneEl = document.querySelector('a-scene');

	markers.forEach((marker) => {
		var markerEl = document.createElement('a-marker');
		markerEl.setAttribute('id', marker.id);
		markerEl.setAttribute('preset', marker.preset);
		markerEl.setAttribute('type', marker.type);
		markerEl.setAttribute('url', marker.url);
		markerEl.appendChild(marker.content);
		sceneEl.appendChild(markerEl);
	});
}

export {
	loadMarkers,
};