export default function slider() {
    const nextBtnHidden = ref(false);
    const prevBtnHidden = ref(true);
    const sliderRow = ref(null);

    function onSliderScroll(event) {
        prevBtnHidden.value = event.target.scrollLeft <= 0;
        nextBtnHidden.value =
            event.target.scrollLeft + event.target.clientWidth >=
            event.target.scrollWidth - 10;
    }


    function onPrevSlide() {
        const slider = sliderRow.value;
        slider.scrollLeft -= document.querySelector('.slider__item').clientWidth + 24;
    }

    function onNextSlide() {
        const slider = sliderRow.value;
        slider.scrollLeft += document.querySelector('.slider__item').clientWidth + 24;
    }

    return {
        sliderRow,
        nextBtnHidden,
        prevBtnHidden,
        onSliderScroll,
        onPrevSlide,
        onNextSlide,
    };
};

