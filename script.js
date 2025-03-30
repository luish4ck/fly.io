document.addEventListener("DOMContentLoaded", function () {
  const musicSelect = document.getElementById("music-select");
  const musicPlayer = document.getElementById("music-player");
  const musicSource = document.getElementById("music-source");
  const musicDescription = document.getElementById("music-description");
  const showMomentsBtn = document.getElementById("show-moments");
  const momentsGallery = document.getElementById("moments-gallery");

  const musicList = {
      "musica1.mp3": "Essa música me lembra você porque...",
      "musica2.mp3": "Sempre que ouço essa, lembro do nosso momento especial..."
  };

  for (const [file, description] of Object.entries(musicList)) {
      const option = document.createElement("option");
      option.value = file;
      option.textContent = file.replace(".mp3", "");
      musicSelect.appendChild(option);
  }

  musicSelect.addEventListener("change", function () {
      const selectedMusic = musicSelect.value;
      if (selectedMusic) {
          musicSource.src = selectedMusic;
          musicPlayer.load();
          musicDescription.textContent = musicList[selectedMusic];
      }
  });

  const moments = [
      { src: '1.jpg', legend: 'Nossa primeira mensagem' },
      { src: '2.jpg', legend: 'Os primeiros elogios kakakaka' },
      { src: '3.jpg', legend: 'Kakadeia kakaka' },
      { src: '4.jpg', legend: 'como tudo começou' },
      { src: '5.jpg', legend: 'A primeira vez que eu fui ai, e o primeiro beijo' },
      { src: '6.jpg', legend: 'Apaixonada em mim kakaka' },
      { src: '7.jpg', legend: 'E tome cadeia kakaka' },
      { src: '8.jpg', legend: 'eu fiquei apaixonado nessa foto sua kakaka' },
      { src: '9.jpg', legend: 'Mulher que terina na primeira facada' },
      { src: '10.jpg', legend: 'Leandrinha foi de f kakaka' },
      { src: '11.jpg', legend: 'O tanto que eu amo ela' },
      { src: '12.jpg', legend: 'E continuo amando' },
      { src: '13.jpg', legend: 'Nosso prieiro zap kakaka' },
      { src: '14.jpg', legend: 'Achando que manda em mim kakaka' },
      { src: '15.jpg', legend: 'E realmente manda' },
      { src: '16.jpg', legend: 'Seu presentinho' },
      { src: '17.jpg', legend: 'De novo kakaka' },
      { src: '18.jpg', legend: 'A melhor foto com  a rainha da festa' },
      { src: '19.jpg', legend: 'O "ultimo" eu te amo' },
  ];

  showMomentsBtn.addEventListener("click", function () {
      momentsGallery.classList.toggle("hidden");
      if (!momentsGallery.innerHTML) {
          momentsGallery.innerHTML = moments.map(moment => `
              <div class='moment'>
                  <img src='${moment.src}' alt='Momento especial'>
                  <p>${moment.legend}</p>
              </div>
          `).join('');
      }
  });

  function createHearts() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";
      document.querySelector(".hearts").appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
  }

  setInterval(createHearts, 500);
});
