const items = document.querySelectorAll("[data-src]");

function loadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.onload = () => {img.removeAttribute('data-src');};
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach(item => {
        if (!item.isIntersecting) {
            return;
        } else {
            loadImage(item.target);
            imgObserver.unobserve(item.target);
        }
    });
}, imgOptions);

items.forEach(image => {
    imgObserver.observe(image);
});