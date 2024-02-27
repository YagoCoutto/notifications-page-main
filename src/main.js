let valueNotification = document.querySelector('.notification-number');
const allRead = document.querySelector('.all-read');
const cards = document.querySelectorAll('.cards');
const icon = document.querySelectorAll('.icon-circle');

function markAllRead() {
    valueNotification.textContent = '0';
    cards.forEach(element => {
        element.style.backgroundColor = 'unset';
    });

    for(i in icon){
        icon[i].remove()
    }
}


allRead.addEventListener('click', () => {
    markAllRead()
})

cards.forEach(element => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = 'unset';
        let iconToRemove = element.querySelector('.icon-circle');
        if (iconToRemove) {
            iconToRemove.remove();
        }
        if(valueNotification.textContent > 0){
            valueNotification.textContent--
        }
    })
});

