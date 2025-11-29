<template>
    <div class="slider-card">
        <div class="slider-card__content">
            <div class="slider-card__content-text">
                <div class="slider-card__content-text--badge">
                    до {{ props.item.date }}
                </div>
                <h3 class="slider-card__content-text--title">{{ props.item.title }}</h3>
                <a v-if="props.item.link" :href="props.item.link" class="slider-card__content-text--link" >
                    <span></span>
                </a>
            </div>
        </div>
        <div class="slider-card__image">
            <img v-if="sliderCardImage" :src="sliderCardImage" :alt="props.item.title" />
            <div v-if="props.item.location" class="slider-card__image--location">
                <img src="@/assets/images/icons/map.svg" alt="Карта" />
                <span>{{ props.item.location }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    const img = useImage();

    const props = defineProps({
        item: {
            type: Object,
            required: true,
        },
    });

    const sliderCardImage = computed(() => {
        return props.item.image ? img(props.item.image, {  format: 'webp'}) : null;
    })
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.slider-card {
    display: flex;
    border-radius: var(--border-radius);
    overflow: hidden;
    align-items: flex-end;
    cursor: pointer;
    flex-shrink: 0;
    &__content {
        background-color: var(--secondary);
        clip-path: path("M0 25C0 11.1929 11.1929 0 25 0H263.758C273.526 0 280.688 9.18768 278.304 18.6605L236.532 184.66C234.854 191.327 228.86 196 221.985 196H25C11.1929 196 0 184.807 0 171V25Z");
        padding: 15px 47px 15px 15px;
        &-text {
            display: flex;
            flex-direction: column;
            gap: 15px;
            height: 100%;
            width: 221px;
            height: 166px;
            &--badge {
                font-size: $font-size-small;
                color: var(--white);
                background: var(--main-gradient);
                padding: 9px 12px;
                text-transform: uppercase;
                border-radius: var(--border-radius-x-small);
                width: fit-content;
                line-height: 100%;
                transition: all 0.5s ease;
            }
            &--title {
                font-size: $font-size;
                text-transform: uppercase;
                transition: all 0.5s ease;
                }
            &--link {
                display: block;
                width: 40px;
                height: 40px;
                background: var(--white);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                border-radius: var(--border-radius-x-small);
                margin-top: auto;
                span {
                    display: block;
                    width: 20px;
                    height: 20px;
                    mask: url('@/assets/images/icons/arrow.svg') no-repeat center center;
                    mask-size: contain;
                    background: var(--text-primary);
                }
                &:hover {
                    background: var(--hover-color);
                    span {
                        background: var(--white);
                    }
                }
            }
        }
    }

    &__image {
        overflow: hidden;
        margin-left: -35px;
        position: relative;
        transition: all 0.3s ease;
        width: 201px;
        height: 207px;
        clip-path: path("M48.7548 15.0909C51.0019 6.21605 58.988 0 68.1429 0H176.054C189.861 0 201.054 11.1929 201.054 25V182.644C201.054 196.451 189.861 207.644 176.054 207.644H19.2714C9.49419 207.644 2.3304 198.44 4.73027 188.962L48.7548 15.0909Z");
        img {
            transition: all 0.5s ease;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &--location {
            position: absolute;
            right: 8px;
            bottom: 10px;
            background: var(--white);
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 5px 8px;
            text-transform: uppercase;
            font-size: $font-size-small;
            border-radius: var(--border-radius-big);
            font-family: $font-family-tt-travels-next-trial-medium;
            font-weight: 600;
            img {
                width: 12px;
                height: 12px;
            }
        }
    }

    &:hover {
        .slider-card__content {
            background: var(--block-gradient);
            &-text {
                &--badge {
                    background: var(--white);
                    color: var(--text-primary);
                }
                &--title {
                    color: var(--white);
                }
            }
        }
        .slider-card__image {
            img {
                transform: scale(1.1);
            }
        }
    }
    @include media-breakpoint-down(sm) {
        width: 230px;
        flex-direction: column;
        .slider-card__content {
            width: 100%;
            clip-path: path("M0 15C0 6.71573 6.71573 0 15 0H215C223.284 0 230 6.71573 230 15V126.188C230 133.994 224.014 140.495 216.235 141.137L16.2349 157.659C7.49337 158.381 0 151.481 0 142.71V15Z");
            padding: 8px 8px 11px;
            &-text {
                height: 140px;
                width: 100%;
                &--title {
                    font-size: $font-size-medium;
                }
            }
        }
        .slider-card__image {
            margin-left: 0;
            margin-top: -10px;
            width: 100%;
            height: 132px;
            clip-path: path("M0 32.8799C0 25.0762 5.98343 18.5761 13.7604 17.9312L213.76 1.34663C222.504 0.621623 230 7.52215 230 16.2953V117C230 125.284 223.284 132 215 132H15C6.71573 132 0 125.284 0 117V32.8799Z");
            &--location {
                left: 8px;
                bottom: 6px;
                width: fit-content;
                font-size: $font-size-extra-small;
            }
        }
    }
}
</style>