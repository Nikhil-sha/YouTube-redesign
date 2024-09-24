import { youtubeData } from './data.js';
import Params from './parameters.js';

// Get the "vid" parameter from the URL
const videoId = Params.get("vid");

if (!videoId) {
	document.querySelector("main").innerHTML = '';
} else {
	// Find the video in the static data using the videoId
	const video = youtubeData.videos.find(v => v.videoId === videoId);

	if (video) {
		const metaTitle = document.createElement("title");
		metaTitle.innerHTML = video.title;
		document.querySelector('head').appendChild(metaTitle);
		
		// Update the video player and metadata in the HTML
		document.getElementById("channel").textContent = video.channel;
		document.getElementById("iframe").src = `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&controls=1&mute=1&fs=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&color=white`;
		document.getElementById("title").textContent = video.title;
		document.getElementById("description").textContent = video.description || "No description available.";
		document.getElementById("views").textContent = `${video.views} views`;
		document.getElementById("uploadDate").textContent = `Uploaded on ${new Date(video.uploadDate).toDateString()}`;
	} else {
		document.querySelector("main").innerHTML = 'Video Not Available!';
	}
}
