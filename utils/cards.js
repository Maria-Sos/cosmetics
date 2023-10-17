function change_image(image){
    const container = document.getElementById("main-image");
    container.src = image.src;
}

const itemImages = document.querySelectorAll('main-image');
itemImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList('is-click')
    })

    image.addEventListener('mouseleave', () => {
        image.remove('is-click')
    })
})