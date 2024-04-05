document.addEventListener('DOMContentLoaded', function() {
    var card = document.querySelector('.card');

    card.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.details p');

    // Fungsi untuk menambahkan kelas animasi ke setiap huruf dalam suatu elemen
    function animateLetters(element) {
        const text = element.textContent;
        element.innerHTML = ''; // Kosongkan konten elemen

        // Iterasi setiap karakter dalam teks
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.classList.add('letter');
            span.style.animationDelay = `${i * 0.1}s`; // Atur penundaan animasi
            element.appendChild(span);
        }
    }
    function animateLetters(element) {
        const text = element.textContent;
        let charIndex = 0;

        // Iterasi setiap karakter dalam teks
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            if (text[i] === ' ') {
                // Jika karakter adalah spasi, tambahkan spasi tanpa animasi
                span.textContent = ' ';
            } 
            element.appendChild(span);
        }
    }

    // Fungsi untuk menganimasikan huruf-huruf dalam paragraf
    function animateParagraphs(paragraphs, index) {
        if (index < paragraphs.length) {
            animateLetters(paragraphs[index]); // Animasikan huruf-huruf dalam paragraf
            setTimeout(() => {
                paragraphs[index].style.opacity = 1; // Munculkan paragraf setelah animasi huruf selesai
                paragraphs[index].classList.add('fadeIn'); // Tambahkan efek memudar saat huruf muncul
                animateParagraphs(paragraphs, index + 1); // Animasikan paragraf berikutnya setelah penundaan
            }, paragraphs[index].textContent.length * 100 + 1000); // Penundaan selesai setelah semua huruf muncul
        }
    }

    // Mulai animasi huruf-huruf dalam paragraf secara berurutan
    animateParagraphs(paragraphs, 0);
});

