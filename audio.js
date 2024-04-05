document.getElementById('audioButton').addEventListener('click', function() {
    // Mengganti opasitas tombol
    this.style.opacity = '0.0';
  
    // Memulai audio
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
  
    // Mengatur waktu untuk mengembalikan opasitas setelah audio selesai diputar
    setTimeout(function() {
      document.getElementById('audioButton').style.opacity = '1';
    }, audioPlayer.duration * 1000);
  });