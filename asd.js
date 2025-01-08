(() => {
    // Sahifadagi barcha radio tugmachalarni toping
    const radios = document.querySelectorAll('input[type="radio"]');
    
    // To'g'ri javoblarni topish uchun AJAX yoki Fetch so'rovi kuzatiladi
    radios.forEach((radio) => {
        // Belgilash
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));

        // Har bir javobdan so'ng so'rov yuborilishi va javob olinishi mumkin
        fetch(window.location.href, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `answer=${radio.value}`, // Serverga har bir javobni yuborish
        })
        .then(response => response.text())
        .then((data) => {
            console.log('Server javobi:', data); 
            // Serverning javobini tahlil qilib, to'g'ri javoblarni toping
        });
    });
})();
