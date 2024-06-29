     function searchVideos() {
         const query = document.getElementById('search-query').value;
         const apiKey = 'AIzaSyAGatreum51ue7jf4weLEhRvHhBrW-lpq0'; // 替换为你的API密钥
         const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`;

         fetch(searchUrl)
             .then(response => response.json())
             .then(data => {
                 const results = document.getElementById('results');
                 results.innerHTML = '';
                 data.items.forEach(item => {
                     const videoTitle = item.snippet.title;
                     const videoId = item.id.videoId;
                     const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                     const videoItem = document.createElement('div');
                     videoItem.classList.add('video-item');
                     videoItem.innerHTML = `<a href="${videoUrl}" target="_blank">${videoTitle}</a>`;
                     results.appendChild(videoItem);
                 });
             })
             .catch(error => {
                 console.error('Error:', error);
             });
     }
