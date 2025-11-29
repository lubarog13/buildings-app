<template>
  <div class="page-index container">
    <MainSlider :items="items" />
    <MainGridSection />
  </div>
</template>

<script setup>
    import MainSlider from '@/components/MainSlider.vue';
    useSeoMeta({
        title: 'Новостройки в России',
        description: 'Современные коттеджные поселки и жилые районы в России',
        keywords: 'Недвижимость, коттеджные поселки, жилые районы, Россия, купить недвижимость, старт продаж',
        ogTitle: 'Новостройки в России',
        ogDescription: 'Современные коттеджные поселки и жилые районы в России',
    });

    const items = ref([
        {
            title: 'Сертификат на мебель в подарок',
            date: '12 июня 2025',
            image: '/slider/legion.png',
            link: '#',
            location: 'Легион'
        },
        {
            title: 'Выгодное предложение на старте продаж',
            date: '12 июня 2025',
            image: '/slider/polet.png',
            link: '#',
            location: 'Полет'
        },
        
        {
            title: 'Отделка в подарок при покупке',
            date: '12 июня 2025',
            image: '/slider/voskresenie.png',
            link: '#',
            location: 'воскресенье'
        }
    ])
</script>



<style lang="scss" scoped>
@use '@/assets/styles/_variables.scss' as *;

.page-index {
  margin: 100px auto;
  @include media-breakpoint-down(sm) {
    margin: 50px auto;
  }
}
</style>