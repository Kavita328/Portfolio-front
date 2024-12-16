
  fetch(`https://portfolio-back-delta.vercel.app/`)
  .then((response) => response.json())
  .then((data) => {
   console.log('front:', data.videos.items)
   console.log('haha')
            data.videos.items.forEach(video => {
              const videoId = video.id.videoId;
              console.log('video', videoId)
              const title = video.snippet.title;
              const thumbnail = video.snippet.thumbnails.high.url;
      
            
              document.getElementById('video-list').innerHTML += `
                <div class="video">
                  <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                    <img src="${thumbnail}" alt="${title}" />
                    <h3>${title}</h3>
                  </a>
                </div>
              `;
       
  })})


  

