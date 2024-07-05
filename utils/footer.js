const contacts = {
    phone: '10000000000',
    address: '',
    email: 'cosmetics@cosmetics.com',
    intagramm: 'https://instagram.com/cosmetics',
    facebook: 'https://www.facebook.com/people/Cosmetics/'
}


const emailLink = document.querySelector('#email');
const intagramm = document.querySelector('#intagramm');
const facebook = document.querySelector('#facebook');
const whatsapp = document.querySelector('#whatsapp');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');

window.addEventListener('DOMContentLoaded', () => {
        email.textContent = contacts.email
        phone.textContent= contacts.phone
        emailLink.href= `mailto: ${contacts.email}`
        intagramm.href= contacts.intagramm
        facebook.href =contacts.facebook
        whatsapp.href = `https://wa.me/${contacts.phone}`

  })