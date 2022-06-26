const blueButton = document.getElementsByClassName('blueButton');

for (const blueButtonElement of blueButton) {
    blueButtonElement.addEventListener('mouseover', function () {
        blueButtonElement.style.background='#34455B';
    })
    blueButtonElement.addEventListener('mouseleave', function () {
        blueButtonElement.style.background='#3D5675';
    })
};

const yellowButton = document.getElementsByClassName('yellowButton');

for (const yellowButtonElement of yellowButton) {
    yellowButtonElement.addEventListener('mouseover', function () {
        yellowButtonElement.style.background='#FFCA3A';
        yellowButtonElement.style.border='grey solid 1px';
    })
    yellowButtonElement.addEventListener('mouseleave', function () {
        yellowButtonElement.style.background='#FFF';
        yellowButtonElement.style.border='none';
    })
};

const whiteButton = document.getElementsByClassName('whiteButton');

for (const whiteButtonElement of whiteButton) {
    whiteButtonElement.addEventListener('mouseover', function () {
        whiteButtonElement.style.background='#CECECE';
      

    })
    whiteButtonElement.addEventListener('mouseleave', function () {
        whiteButtonElement.style.background='#fff';
        
    })
};