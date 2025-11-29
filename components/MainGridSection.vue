<template>
    <div class="page-section">
        <div class="page-section__item item-white">
            <h2 class="title">15+</h2>
            <p>лет на рынке недвижимости</p>
            <div class="item-background"></div>
            <div class="item-background item-background-2"></div>
        </div>
        <div class="page-section__item item-blue">
            <h2 class="title-small">Надежность</h2>
            <p class="small">Стабильная работа без задержек, прозрачные договоры и честные отношения с каждым
                покупателем на протяжении всего сотрудничества.</p>
            <div class="item-background"></div>
        </div>
        <div class="page-section__item item-picture">
            <h2 class="title-medium">6000</h2>
            <p class="small">Довольных семей в сданных объектах</p>
            <div class="item-background"></div>
        </div>
        <div class="page-section__item item-light">
            <h2 class="title-small">Современные технологии</h2>
            <p class="small">Применение качественных материалов и передовых строительных решений для создания
                энергоэффективного и экологически чистого жилья.</p>
            <div class="item-background"></div>

        </div>
        <div class="page-section__item item-white">
            <h2 class="title">1<span>млн м²</span></h2>
            <p>Коттеджных поселков и жилых районов</p>
            <div class="item-background"></div>
            <div class="item-background item-background-2"></div>
        </div>
        <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg"
            version="1.1">
            <defs>
                <filter id="round">
                    <feGaussianBlur in="SourceGraphic" :stdDeviation="media.isMobile ? 8 : 16" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
            </defs>
        </svg>

    </div>
</template>

<script setup>
import mediaMixin from '@/mixins/media.js';

const { media } = mediaMixin();
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.page-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 13px;
    margin-top: 50px;
    width: 100%;

    &__item {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 324px;

        h2 {
            font-weight: 600;
            height: fit-content;
            text-transform: uppercase;
            line-height: 130%;
        }

        .title {
            font-size: 160px;
            line-height: 100%;
            margin-bottom: 6px;
            height: 160px;
            white-space: nowrap;

            span {
                font-size: 32px;
            }
        }

        .title-small {
            font-size: $font-size-extra-large-2;
            margin-bottom: 12px;
        }

        .title-medium {
            font-size: $font-size-huge;
            line-height: 100%;
            margin-bottom: 5px;
        }

        p {
            font-size: $font-size-extra-large;
            font-weight: 600;
            line-height: 130%;
        }

        .small {
            font-size: $font-size-large;
            font-weight: 400;
            color: var(--secondary-text);
            font-family: $font-family-tt-norms;
        }

        .item-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1 !important;
            filter: url(#round);
        }

        &.item-white {
            position: relative;
            justify-content: flex-end;
            padding-bottom: 24px;
            padding-left: 40px;
            background-position: right center;

            background-size: auto 100%;
            padding-right: 131px;

            &>* {
                z-index: 1;
            }

            .item-background {
                &::before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    clip-path: polygon(0 0, 100% 0, calc(100% - 131px) 100%, 0 100%);
                    background: #d0d0d1;
                }
            }

            .item-background-2 {
                &::before {
                    width: calc(100% - 2px);
                    height: calc(100% - 2px);
                    background: #fff;
                    margin: 1px;
                }
            }

            &:last-of-type {
                border-left: none;
                background-position: left center;
                padding-left: 131px;
                padding-right: 40px;
                margin-left: -131px;

                .item-background::before {
                    clip-path: polygon(131px 0, 100% 0%, 100% 100%, 0% 100%);
                }
            }
        }

        &.item-blue {
            color: var(--white);
            justify-content: flex-end;
            background-image: url("@/assets/images/icons/key.svg");
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: center center;
            padding-right: 179px;
            margin-left: -131px;
            margin-right: -131px;
            padding-left: 91px;
            padding-bottom: 30px;

            p {
                color: var(--white);
            }

            .item-background {
                &::before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: var(--blue-icon);
                    clip-path: polygon(131px 0%, 100% 0%, calc(100% - 131px) 100%, 0% 100%);
                }
            }
        }

        &.item-picture {
            padding-left: 82px;
            color: var(--white);
            padding-bottom: 32px;
            justify-content: flex-end;

            p {
                max-width: 167px;
                color: var(--white);
            }

            .item-background {
                &::before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(33.78deg, rgba(0, 0, 0, 0.4) 30.68%, rgba(0, 0, 0, 0) 56.38%) center center / cover,
                        var(--white) url('@/assets/images/family.png') no-repeat center center / cover;
                    clip-path: polygon(131px 0, 100% 0%, 100% 100%, 0% 100%);
                }
            }
        }

        &.item-light {
            grid-column: span 2;
            background: url("@/assets/images/icons/light.svg") no-repeat left 32px center / auto 100%;
            padding-left: 40px;
            padding-bottom: 30px;
            padding-right: 131px;
            justify-content: flex-end;
            background-size: auto 100%;

            .item-background {
                &::before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: var(--secondary-gradient);
                    clip-path: polygon(0 0, 100% 0, calc(100% - 131px) 100%, 0 100%);
                }
            }
        }
    }

    @include media-breakpoint-down(md) {
        &__item {
            .title {
                font-size: 100px;
                height: 100px;
            }

            p {
                font-size: $font-size-large;
            }
        }
    }

    @include media-breakpoint-down(sm) {
        grid-template-columns: 100%;
        row-gap: 8px;
        margin-top: 25px;

        &__item {
            height: auto;

            .title-small {
                font-size: $font-size-x-large-2;
            }

            .title-medium {
                font-size: $font-size-extra-large-3;
            }

            p.small {
                font-size: $font-size;
            }

            .title {
                span {
                    font-size: $font-size-x-large;
                }
            }

            &.item-white {
                padding: 16px 20px 34px;
                justify-content: flex-start;

                .item-background {
                    &::before {
                        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), 0 100%);
                    }
                }

                &:last-of-type {
                    margin: -25px 0 0;
                    justify-content: flex-end;
                    padding: 20px 45px 15px;

                    .item-background {
                        &::before {
                            clip-path: polygon(0 25px, 100% 0, 100% 100%, 0 100%);
                        }
                    }
                }
            }

            &.item-blue {
                margin: -25px 0 0;
                padding: 50px 20px 18px;
                justify-content: flex-start;

                .item-background {
                    &::before {
                        clip-path: polygon(0 25px, 100% 0, 100% 100%, 0 100%);
                    }
                }
            }

            &.item-picture {
                padding: 20px 16px;
                height: 195px;

                .item-background {
                    &::before {
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                    }
                }
            }

            &.item-light {
                grid-column: span 1;
                padding: 24px 20px 30px;
                background-position: center center;
                justify-content: flex-start;

                .item-background {
                    &::before {
                        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), 0 100%);
                    }
                }

            }
        }
    }

}
</style>