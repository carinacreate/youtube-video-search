function searchVideos() {
    const query = document.getElementById('search-query').value;
    const apiKey = 'AIzaSyAGatreum51ue7jf4weLEhRvHhBrW-lpq0'; // 替换为你的API密钥
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`;

    console.log(`Searching for: ${query}`); // 调试信息

    fetch(searchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const results = document.getElementById('results');
            results.innerHTML = '';
            if (data.items.length === 0) {
                results.innerHTML = '<p>No results found.</p>';
            } else {
                data.items.forEach(item => {
                    const videoTitle = item.snippet.title;
                    const videoId = item.id.videoId;
                    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                    const videoItem = document.createElement('div');
                    videoItem.classList.add('video-item');
                    videoItem.innerHTML = `<a href="${videoUrl}" target="_blank">${videoTitle}</a>`;
                    results.appendChild(videoItem);
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const results = document.getElementById('results');
            results.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
