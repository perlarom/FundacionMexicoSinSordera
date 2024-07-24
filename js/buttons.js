///DESGLOSAR INFORMACIÓN////
/* Nosotros */
document.getElementById('nosotrosButton').addEventListener('click', function() {
    var nosotrosContent = document.getElementById('nosotrosContent');
    if (nosotrosContent.style.display === 'none' || nosotrosContent.style.display === '') {
        nosotrosContent.style.display = 'block';
        this.classList.add('active');
    } else {
        nosotrosContent.style.display = 'none';
        this.classList.remove('active');
    }
});
/* Misión */
document.getElementById('misionButton').addEventListener('click', function() {
    var misionContent = document.getElementById('misionContent');
    if (misionContent.style.display === 'none' || misionContent.style.display === '') {
        misionContent.style.display = 'block';
        this.classList.add('active');
    } else {
        misionContent.style.display = 'none';
        this.classList.remove('active');
    }
});
/* Visión */
document.getElementById('visionButton').addEventListener('click', function() {
    var visionContent = document.getElementById('visionContent');
    if (visionContent.style.display === 'none' || visionContent.style.display === '') {
        visionContent.style.display = 'block';
        this.classList.add('active');
    } else {
        visionContent.style.display = 'none';
        this.classList.remove('active');
    }
});
/* Objetivo */
document.getElementById('objetivoButton').addEventListener('click', function() {
    var objetivoContent = document.getElementById('objetivoContent');
    if (objetivoContent.style.display === 'none' || objetivoContent.style.display === '') {
        objetivoContent.style.display = 'block';
        this.classList.add('active');
    } else {
        objetivoContent.style.display = 'none';
        this.classList.remove('active');
    }
});
/*Redes Sociales*/
document.getElementById('socialMediaButton').addEventListener('click', function() {
    var socialIcons = document.getElementById('socialIcons');
    if (socialIcons.style.display === 'none' || socialIcons.style.display === '') {
        socialIcons.style.display = 'block';
        this.classList.add('active');
    } else {
        socialIcons.style.display = 'none';
        this.classList.remove('active');
    }
});

document.getElementById('contactUsButton').addEventListener('click', function() {
    var contactInfo = document.getElementById('contactInfo');
    if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';
        this.classList.add('active');
    } else {
        contactInfo.style.display = 'none';
        this.classList.remove('active');
    }
});

document.getElementById('directoryHeader').addEventListener('click', function() {
    var directoryAccordion = document.getElementById('directoryAccordion');
    if (directoryAccordion.style.display === 'none' || directoryAccordion.style.display === '') {
        directoryAccordion.style.display = 'block';
        this.classList.add('active');
    } else {
        directoryAccordion.style.display = 'none';
        this.classList.remove('active');
    }
});

document.getElementById('courseButton').addEventListener('click', function() {
    var courseContent = document.getElementById('courseContent');
    if (courseContent.style.display === 'none' || courseContent.style.display === '') {
        courseContent.style.display = 'block';
        this.classList.add('active');
    } else {
        courseContent.style.display = 'none';
        this.classList.remove('active');
    }
});

document.getElementById('donationButton').addEventListener('click', function() {
    var donationAccordion = document.getElementById('donationAccordion');
    if (donationAccordion.style.display === 'none' || donationAccordion.style.display === '') {
        donationAccordion.style.display = 'block';
        this.classList.add('active');
    } else {
        donationAccordion.style.display = 'none';
        this.classList.remove('active');
    }
});

document.getElementById('signalsButton').addEventListener('click', function() {
    var signalsContent = document.getElementById('signalsContent');
    if (signalsContent.style.display === 'none' || signalsContent.style.display === '') {
        signalsContent.style.display = 'block';
        this.classList.add('active');
    } else {
        signalsContent.style.display = 'none';
        this.classList.remove('active');
    }
});

document.getElementById('eventsButton').addEventListener('click', function() {
    var eventsContent = document.getElementById('eventsContent');
    if (eventsContent.style.display === 'none' || eventsContent.style.display === '') {
        eventsContent.style.display = 'block';
        this.classList.add('active');
    } else {
        eventsContent.style.display = 'none';
        this.classList.remove('active');
    }
});

////FUNCIONES////
/*PARA SABER MÁS*/
function toggleInfo() {
    var moreInfo = document.getElementById("moreInfo");
    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
    } else {
        moreInfo.style.display = "block";
    }
}
/*COPIAR EL NUMERO*/
function copyNumber(phoneNumber) {
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert('Número copiado al portapapeles: ' + phoneNumber);
    }).catch(err => {
        console.error('Error al copiar el número: ', err);
    });
}
/*Ver correos*/
function toggleEmail(id) {
    var emailContent = document.getElementById(id);
    emailContent.classList.toggle("show");
}
/* Ver dirección */
function toggleLocation() {
    var locationContent = document.getElementById("locationContent");
    locationContent.classList.toggle("show");
}

function toggleEmailDirectory() {
    var emailContentDirectory = document.getElementById("emailContentDirectory");
    emailContentDirectory.classList.toggle("show");
}

function toggleBankInfo() {
    var content = document.getElementById('bankInfoContent');
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
}

function donar(preferenceId) {
    // Ensure the container exists
    const mpContainer = document.getElementById('mp-container');
    if (!mpContainer) {
        console.error('mp-container element not found');
        return;
    }

    // Remove any existing script
    const existingScript = mpContainer.querySelector('script');
    if (existingScript) {
        existingScript.remove();
    }

    // Create new script element
    const script = document.createElement('script');
    script.src = 'https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js';
    script.setAttribute('data-preference-id', preferenceId);
    script.setAttribute('data-source', 'button');

    // Append the script to the placeholder container
    mpContainer.appendChild(script);
}

function toggleInfo() {
    var moreInfo = document.getElementById("moreInfo");
    var toggleText = document.querySelector(".more-info-toggle");
    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
        toggleText.textContent = "Para saber más";
    } else {
        moreInfo.style.display = "block";
        toggleText.textContent = "Ocultar";
    }
}