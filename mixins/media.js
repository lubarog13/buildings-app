export default function mediaMixin() {
  const media = ref({
    isDesktop: true,
    isTablet: false,
    isMobile: false,
    isSmallMobile: false,
  });
  
  function checkMedia() {
    media.value = {
      isDesktop: import.meta.client && window.matchMedia('(min-width: 1210px)').matches,
      isTablet: import.meta.client && window.matchMedia('(max-width: 1023px)').matches,
      isMobile: import.meta.client && window.matchMedia('(max-width: 767px)').matches,
      isSmallMobile: import.meta.client && window.matchMedia('(max-width: 550px)').matches,
    };
  }

  onMounted(() => {
    checkMedia();
    window.addEventListener('resize', checkMedia);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkMedia);
  });

  return {
    media,
  };
}