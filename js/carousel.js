import { Carousel } from 'bootstrap';
const carouselData = [
    {
        src: '/images/1.jpg',
        caption: '1',
        alt: '1',
    },
    {
        src: '/images/2.jpg',
        caption: '2',
        alt: '2',
    },
    {
        src: '/images/3.jpg',
        caption: '3',
        alt: '3',
    },
];

function generateCarouselInnerItem(data, index) {
    return `
        <div class="carousel-item ${index === 1 ? 'active' : ''}">
            <img src="${data.src}" class="d-block w-100 h-50" alt="${data.alt}">
            <div class="carousel-caption d-none d-md-block">
                ${data.caption}
            </div>
        </div>
    `;
}

function generateCarouselIndicator(index) {
    return `
    <button type="button" data-bs-target="#simpleCarousel" 
        class="${index === 0 ? 'active' : ''}"
        data-bs-slide-to="${index}" 
        aria-label="Slide ${index}">
    </button>
    `;
}

function generateCarousel() {
    let carouselIndicator = '';
    let carouselItems = '';
    for (let i = 1; i <= carouselData.length; i++) {
        carouselIndicator += generateCarouselIndicator(i - 1);
        carouselItems += generateCarouselInnerItem(carouselData[i - 1], i);
    }
    return `
    <div class="carousel-indicators">
        ${carouselIndicator}
    </div>
    <div class="carousel-inner" style="max-height: 400px;">
        ${carouselItems}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#simpleCarousel"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#simpleCarousel"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    `;
}

export function setupCarousel(element) {
    if (element) {
        element.innerHTML = generateCarousel();
        const carousel = new Carousel(element, {
            interval: 2000,
            touch: false
        });
        console.log(carousel);
    }
}