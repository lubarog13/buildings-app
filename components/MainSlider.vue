<template>
    <div class="main-slider">
        <div class="main-slider__content " ref="sliderRow" @scroll="onSliderScroll">
            <div class="main-slider__item slider__item" v-for="(item, index) in props.items" :key="`card-${index}`">
                <SliderCard :item="item" />
            </div>
        </div>
        <div class="main-slider__navigation">
            <div class="main-slider__navigation-buttons">
                <button class="main-slider__navigation-button main-slider__navigation-button--prev" :disabled="prevBtnHidden" @click="onPrevSlide">
                    <span></span>
                </button>
                <button class="main-slider__navigation-button main-slider__navigation-button--next" :disabled="nextBtnHidden" @click="onNextSlide">
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import SliderCard from '@/components/SliderCard.vue';
import slider from '@/mixins/slider';


const props = defineProps({
    items: {
        type: Array,
        required: false,
        default: () => []
    }
});

const { nextBtnHidden, prevBtnHidden, onSliderScroll, onPrevSlide, onNextSlide, sliderRow } = slider();
</script>

<style lang="scss" scoped>
.main-slider {
    position: relative;

    &__content {
        display: flex;
        gap: 20px;
        overflow: hidden;
    }

    &__navigation {
        border-radius: var(--border-radius-small);
        position: absolute;
        right: -18px;
        top: 50%;
        transform: translateY(-50%);

        &-buttons {
            display: flex;
            flex-direction: column;
            position: relative;
            padding: 5px;

            &::before {
                content: '';
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background: var(--navigation-background);
                backdrop-filter: blur(19px);
                border-radius: var(--border-radius-small);
                z-index: -1;
            }
        }

        &-button {
            width: 50px;
            height: 50px;
            background: transparent;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border-radius: var(--border-radius-small);
            border-top: 1px solid var(--navigation-border);

            span {
                display: block;
                width: 20px;
                height: 20px;
                background: var(--white);
                mask: url('@/assets/images/icons/arrow.svg') no-repeat center center;
                mask-size: contain;
            }

            &:disabled {
                pointer-events: none;
                cursor: default;
                border: none;

                span {
                    opacity: 0.4;
                }
            }
            &--prev {
                span {
                    transform: rotate(180deg);
                }
            }
        }
    }
}
</style>