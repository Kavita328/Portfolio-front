
  fetch(`https://portfolio-back-hh2tfka9k-kavita-bhatias-projects.vercel.app/videos`)
  .then((response) => response.json())
  .then((data) => {
   console.log('front:', data)
   
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


  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); }



 

