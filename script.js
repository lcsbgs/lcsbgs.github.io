document.getElementById('videoName').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        playVideo();
    }
});

function playVideo() {
    var videoName = document.getElementById('videoName').value;
    var videoPlayer = document.getElementById('videoPlayer');
    var celebrationImage = new Image();
    var applauseAudio = new Audio('caminho/para/seu/arquivo-de-aplausos.mp3'); // Substitua pelo caminho do seu arquivo de áudio

    // Substitua 'caminho/para/sua/pasta/' pelo caminho real da sua pasta de vídeos
    var videoPath = 'musicas/';

    var videoSource = videoPath + videoName + '.mp4';

    videoPlayer.src = videoSource;

    // Verifica se o arquivo existe antes de tentar reproduzir
    videoPlayer.addEventListener('error', function() {
        alert('Vídeo não encontrado. Verifique o nome e tente novamente.');
    });

    videoPlayer.load();
    videoPlayer.play();

    // Adiciona um listener para entrar em tela cheia quando o vídeo começar a ser reproduzido
    videoPlayer.addEventListener('play', function() {
        if (videoPlayer.requestFullscreen) {
            videoPlayer.requestFullscreen();
        } else if (videoPlayer.mozRequestFullScreen) { // Firefox
            videoPlayer.mozRequestFullScreen();
        } else if (videoPlayer.webkitRequestFullscreen) { // Chrome, Safari e Opera
            videoPlayer.webkitRequestFullscreen();
        } else if (videoPlayer.msRequestFullscreen) { // IE/Edge
            videoPlayer.msRequestFullscreen();
        }
    });

    // Adiciona um listener para sair da tela cheia e redirecionar para uma nova página quando o vídeo acabar
    videoPlayer.addEventListener('ended', function() {
        exitFullscreen();
        showCelebration(celebrationImage, applauseAudio);
        var randomPage = ['nota0', 'nota25', 'nota50', 'nota75', 'nota100'][Math.floor(Math.random() * 5)];

        setTimeout(function() {
            window.location.href = randomPage + '.html'; // Redireciona para a página aleatória
        }, 100); // Aguarda 5 segundos antes de redirecionar
    });
}

function showCelebration(image, audio) {
    image.src = 'caminho/para/sua/imagem-de-comemoracao.jpg'; // Substitua pelo caminho da sua imagem
    image.style.width = '100%';
    image.style.height = '100%';
    document.body.appendChild(image);

    audio.play();

    // Adiciona um listener para remover a imagem após o término do áudio
    audio.addEventListener('ended', function() {
        document.body.removeChild(image);
    });

    // Adiciona um listener para remover a imagem se a tecla ESC for pressionada
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.body.removeChild(image);
        }
    });
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari e Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}
