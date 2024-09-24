import { youtubeData } from './data.js';
const container = document.getElementById("feed-container");

if (youtubeData)
	container.innerHTML = '';

youtubeData.videos.forEach(video => {
	const videoCard = document.createElement("div");
	videoCard.innerHTML = `
	<div class="w-full bg-white p-4 rounded-lg">
		<div class="relative">
			<a href="/YouTube-redesign/p/watch.html?vid=${video.videoId}">
				<div class="w-full rounded-lg aspect-video overflow-hidden relative">
					<img class="w-full h-full object-cover object-center" src="${video.thumbnailUrl}" alt="${video.title}">
				</div>
			</a>
			<div class="absolute -bottom-6 left-4 w-12 h-12 bg-white rounded-full overflow-hidden border-2 border-gray-300">
				<img class="w-full h-full object-cover" src="https://picsum.photos/100" alt="Channel Logo">
			</div>
		</div>
		<div class="mt-8">
			<a href="/YouTube-redesign/p/watch.html?vid=${video.videoId}">
				<h2 class="text-lg font-semibold leading-tight text-gray-900">${video.title}</h2>
			</a>
			<a href="/YouTube-redesign/p/channel.html">
				<p class="text-sm text-gray-600">${video.channel}</p>
			</a>
			<div class="flex justify-between items-center text-sm text-gray-500 mt-2">
				<span>${video.views} views</span>
				<span>${new Date(video.uploadDate).toDateString()}</span>
			</div>
		</div>
	</div>
	`;
	
	container.appendChild(videoCard);
});