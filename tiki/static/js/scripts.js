// Slider script
const Slider = document.querySelector('.slider')
const slideItems = Slider.querySelectorAll('.item')

Slider.querySelector('.icon.icon-next').addEventListener('click', () => {
    slideItems.forEach((item) => {
        item.parentElement.style.transition = 'transform 0.5s ease-in-out 0s'
        item.parentElement.style.transform = 'translateX(-940px)'
        Slider.querySelector('.icon.icon-next').style.display = 'none'
        Slider.querySelector('.icon.icon-prev').style.display = 'block'
    })
})
Slider.querySelector('.icon.icon-prev').addEventListener('click', () => {
    slideItems.forEach((item) => {
        item.parentElement.style.transition = 'transform 0.5s ease-in-out 0s'
        item.parentElement.style.transform = 'translateX(0)'
        Slider.querySelector('.icon.icon-prev').style.display = 'none'
        Slider.querySelector('.icon.icon-next').style.display = 'block'
    })
})
// End slider script

// Top content script
const TopContent = document.querySelector('.top-content')
const SlidesBannerContent = TopContent.querySelector('.slides')
const contentDeal = document.querySelector('.content-deal')
const contendDealSlides = contentDeal.querySelector('.deal-slider')
const contentReward = document.querySelector('.content-reward')
const contentRewardSlides = contentReward.querySelector('.reward-slider')
const slideShow = (btnControl, dotItems, root, children, index, slideWidth, slideLength, distance, dotClicked) => {
    if (btnControl === 'next') {
        dotItems != 'none' ? dotItems.querySelector(`.dot${index}`).classList.remove('activeDot') : undefined
        if (index < slideLength) {
            index += distance;
            root.querySelectorAll(children).forEach((item) => {
                dotItems != 'none' ? dotItems.querySelector(`.dot${index}`).classList.add('activeDot') : undefined
                item.style.transition = 'transform 0.5s ease-in-out 0s'
                item.style.transform = 'translateX(' + index * -slideWidth + 'px)'
            })
            return index;
        }
        else {
            dotItems != 'none' ? dotItems.querySelector(`.dot${index}`).classList.remove('activeDot') : undefined
            index = 0;
            root.querySelectorAll(children).forEach((item) => {
                dotItems != 'none' ? dotItems.querySelector(`.dot${index}`).classList.add('activeDot') : undefined
                item.style.transition = 'transform 0.5s ease-in-out 0s'
                item.style.transform = 'translateX(' + index * -slideWidth + 'px)'
            })
            return index;
        }
    }
    else if (btnControl === 'prev') {
        if (index === 0) {
            dotItems != 'none' ? dotItems.querySelector(`.dot${index}`).classList.remove('activeDot') : undefined
            index = slideLength;
            root.querySelectorAll(children).forEach((item) => {
                dotItems != 'none' ? dotItems.querySelector(`.dot${index}`).classList.add('activeDot') : undefined
                item.style.transition = 'transform 0.5s ease-in-out 0s'
                item.style.transform = 'translateX(' + index * -slideWidth + 'px)'
            })
            return index;
        }
        else {
            dotItems != 'none' ? dotItems.querySelector(`.dot${index}`).classList.remove('activeDot') : undefined
            index -= distance;
            root.querySelectorAll(children).forEach((item) => {
                dotItems != 'none' ? dotItems.querySelector(`.dot${index}`).classList.add('activeDot') : undefined
                item.style.transition = 'transform 0.5s ease-in-out 0s'
                item.style.transform = 'translateX(' + index * -slideWidth + 'px)'
            })
            return index;
        }
    }
    else if (btnControl === 'dot') {
        dotItems.querySelectorAll('span').forEach(item => {
            item.classList.remove('activeDot')
        })
        dotItems.querySelector(`.dot${parseInt((dotClicked.className).slice(3))}`).classList.add('activeDot')
        root.querySelectorAll(children).forEach((item) => {
            item.style.transition = 'transform 0.5s ease-in-out 0s'
            item.style.transform = 'translateX(' + parseInt((dotClicked.className).slice(3)) * -slideWidth + 'px)'
        })
        return parseInt((dotClicked.className).slice(3));
    }
}
// Banner content script
let countSlide1 = 0;
const getWidth1 = () => {
    return TopContent.querySelector('img').offsetWidth;
}
const dotItems1 = TopContent.querySelector('.dots')
SlidesBannerContent.querySelector('.icon.icon-next').addEventListener('click', () => {
    countSlide1 = slideShow('next', dotItems1, SlidesBannerContent, '.slide-item', countSlide1, getWidth1(), SlidesBannerContent.childElementCount - 3, 1)
})
SlidesBannerContent.querySelector('.icon.icon-prev').addEventListener('click', () => {
    countSlide1 = slideShow('prev', dotItems1, SlidesBannerContent, '.slide-item', countSlide1, getWidth1(), SlidesBannerContent.childElementCount - 3, 1)
})
dotItems1.querySelectorAll('span').forEach(item => {
    item.addEventListener('click', () => {
        countSlide1 = slideShow('dot', dotItems1, SlidesBannerContent, '.slide-item', countSlide1, getWidth1(), SlidesBannerContent.childElementCount - 3, 1, item)
    })
})
// End banner content script
// Deal content script
let countSlide2 = 0;
const getWidth2 = () => {
    return contentDeal.querySelector('.img').querySelector(img).offsetWidth;
}
contentDeal.querySelector('.icon.icon-next').addEventListener('click', () => {
    if (countSlide2 < 1) {
        countSlide2 = slideShow('next', 'none', contendDealSlides, '.slide-item', countSlide2, getWidth2(), contendDealSlides.childElementCount - 1, 5)
        contentDeal.querySelector('.icon.icon-prev').style.display = 'flex'
    }
    else if (countSlide2 = 1) {
        countSlide2 = slideShow('next', 'none', contendDealSlides, '.slide-item', countSlide2, getWidth2(), contendDealSlides.childElementCount - 1, 6)
        contentDeal.querySelector('.icon.icon-next').style.display = 'none'
    }
})
contentDeal.querySelector('.icon.icon-prev').addEventListener('click', () => {
    if (countSlide2 < 5) {
        slideShow('prev', 'none', contendDealSlides, '.slide-item', countSlide2, 0, contendDealSlides.childElementCount - 1, 0)
        contentDeal.querySelector('.icon.icon-prev').style.display = 'none'
        countSlide2 = 0
    }
    else if (countSlide2 = 5) {
        countSlide2 = slideShow('prev', 'none', contendDealSlides, '.slide-item', countSlide2, 148, contendDealSlides.childElementCount - 1, 2)
        contentDeal.querySelector('.icon.icon-next').style.display = 'flex'
    }
})

let countSlide3 = 0;
const getWidth3 = () => {
    return contentRewardSlides.querySelector('img').offsetWidth;
}
contentReward.querySelector('.dot.one').addEventListener('click', () => {
    if (countSlide3 === 1) {
        countSlide3 = slideShow('prev', 'none', contentRewardSlides, '.slide-item', countSlide3, getWidth3(), contentRewardSlides.childElementCount - 1, 1)
        contentReward.querySelector('.dot.one').style.backgroundColor = "#ab9bfa"
        contentReward.querySelector('.dot.two').style.backgroundColor = "#402da1"
    }
})
contentReward.querySelector('.dot.two').addEventListener('click', () => {
    if (countSlide3 === 0) {
        countSlide3 = slideShow('next', 'none', contentRewardSlides, '.slide-item', countSlide3, getWidth3(), contentRewardSlides.childElementCount - 1, 1)
        contentReward.querySelector('.dot.two').style.backgroundColor = "#ab9bfa"
        contentReward.querySelector('.dot.one').style.backgroundColor = "#402da1"
    }
})

let countSlide4 = 0;
const authenticBrand = document.querySelector('.authentic-brand')
const bannerSlider = authenticBrand.querySelector('.banner-slider')
const dotItems2 = authenticBrand.querySelector('.dots')
bannerSlider.parentElement.querySelector('.icon.icon-next').addEventListener('click', () => {
    countSlide4 = slideShow('next', dotItems2, bannerSlider, '.slide-item', countSlide4, 612, bannerSlider.childElementCount - 2, 2)
})
bannerSlider.parentElement.querySelector('.icon.icon-prev').addEventListener('click', () => {
    countSlide4 = slideShow('prev', dotItems2, bannerSlider, '.slide-item', countSlide4, 612, bannerSlider.childElementCount - 2, 2)
})
dotItems2.querySelectorAll('span').forEach((item) => {
    item.addEventListener('click', () => {
        countSlide4 = slideShow('dot', dotItems2, bannerSlider, '.slide-item', countSlide4, 612, bannerSlider.childElementCount - 3, 2, item)
    })
})

let countSlide5 = 0;
const brandsCard = authenticBrand.querySelector('.brands-card')
const brandsSlider = brandsCard.querySelector('.slide-card')
brandsCard.querySelector('.icon.icon-next').addEventListener('click', () => {
    if (countSlide5 < 5) {
        countSlide5 = slideShow('next', 'none', brandsSlider, '.card-item', countSlide5, 204, brandsSlider.childElementCount - 7, 6)
        brandsCard.querySelector('.icon.icon-prev').style.visibility = 'visible'
        document.documentElement.style.setProperty('--visibleBefore-visibility', 'visible')
    }
    else {
        countSlide5 = slideShow('next', 'none', brandsSlider, '.card-item', countSlide5, 204, brandsSlider.childElementCount - 7, 3)
        brandsCard.querySelector('.icon.icon-next').style.visibility = 'hidden'
        document.documentElement.style.setProperty('--visibleAfter-visibility', 'hidden')
    }
})
brandsCard.querySelector('.icon.icon-prev').addEventListener('click', () => {
    if (countSlide5 >= 9) {
        countSlide5 = slideShow('prev', 'none', brandsSlider, '.card-item', countSlide5, 204, brandsSlider.childElementCount - 7, 3)
        brandsCard.querySelector('.icon.icon-next').style.visibility = 'visible'
        document.documentElement.style.setProperty('--visibleAfter-visibility', 'visible')
    }
    else {
        countSlide5 = slideShow('prev', 'none', brandsSlider, '.card-item', countSlide5, 204, brandsSlider.childElementCount - 7, 6)
        brandsCard.querySelector('.icon.icon-prev').style.visibility = 'hidden'
        brandsCard.querySelector('.icon.icon-next').style.visibility = 'visible'
        document.documentElement.style.setProperty('--visibleBefore-visibility', 'hidden')
        document.documentElement.style.setProperty('--visibleAfter-visibility', 'visible')
    }
})
const moreProductItems = ['.more-item-1']
const btnMoreProduct = document.querySelector('.recommend-today').querySelector('.more-products-link')
countMoreProduct = 0;
btnMoreProduct.addEventListener('click', () => {
    countMoreProduct += 1;
    if (moreProductItems[countMoreProduct-1]) {
        document.querySelector('.recommend-today').querySelectorAll(moreProductItems[countMoreProduct-1]).forEach((item) => {
            item.style.display = 'flex'
        })
    }
    else {
        alert('Đã hết sản phẩm')
    }
})
// End deal content script

