class initThemeSlider {
   constructor() {
      this.checkIfSwiperIsLoaded();
      this.init();
      this.smallCollectionGrid = document.querySelectorAll('.section-small-collection-grid_content');
   }

   checkIfSwiperIsLoaded() {
      const swiper = document.querySelector('.swiper');
      if (swiper) {
         this.init();
      }
   }
   initSmallCollectionGrid() {
      this.smallCollectionGrid.forEach(section => {
         new Swiper('.section-small-collection-grid_content', {
            spaceBetween: 10,
            freeMode: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: {{ collection_to_show }},
              },
              1280: {
                slidesPerView: {{ collection_to_show }},
              },
            },
          });
      });s
   }

   

   init() {
      console.log('initThemeSlider');
   }
}