<template>
  <section id="speedkit-picture" class="speedkit-picture">
    <SpeedkitPicture class="picture" v-bind="picture" />
  </section>
</template>

<script>

import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';

export default {
  components: {
    SpeedkitPicture
  },
  data () {
    return {
      picture: {
        placeholders: [
          {
            media: '(min-width: 1024px)',
            format: 'jpg',
            url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAPAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAEwAeAwERAAIRAQMRAf/EAHAAAQEBAQAAAAAAAAAAAAAAAAAFAwgBAQADAQAAAAAAAAAAAAAAAAABAgQDEAABAwMEAwADAAAAAAAAAAACAREDABIFMUEEFCEiEzIGFhEAAQMDAgcAAAAAAAAAAAAAAAERAjESAyFBYYGR0YITFf/aAAwDAQACEQMRAD8A6poBQCgFAT89hOHm8ZLjuWcoQSqKkUEhRG4EhJ7Ds6aL4odMWRYTSSVQnJ+j4lDjPs5B4hERHvcpB9BEUVQSS12BNtfOtTdoxEpqs71q78OlOQ/h8SoIEnJyEopb4k53JJHHdlNnqrG76eR3RIJ4R7FvqRdLpuXy+fxe5b7bbfy1dt6kw+xbrt3c2oUFAKAUB//Z'
          },
          {
            media: '(min-width: 768px)',
            format: 'jpg',
            url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAPAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgAeAwERAAIRAQMRAf/EAIEAAQACAwEAAAAAAAAAAAAAAAAFBgMEBwgBAQACAwEAAAAAAAAAAAAAAAABAgMEBQYQAAEDAgYCAgEFAAAAAAAAAAECAwUABBEhEiITBjFBURQyYUIjQwcRAAIBAwIFAQkAAAAAAAAAAAABAhEhAzFB8FFhEgRxkbEiYhMjFAUG/9oADAMBAAIRAxEAPwD1TQCgFAKAUBV5X/Q4KL7DYxF7rbYkUq+vKbTacyVaeEuA5KHv4yx81NDcw+FLLjc40fbtv6mxA92ipeVv4lKXLSSsHFIVa3ACFrQk4ciB7FVTMvlfrcmHHHJaUJrVbdGWCpOcQvdIeVmes38bE36o2/uGylm6T6+UkjckLG0qTmPIq0Wk7lZJtWOBRvV5eEsL6AlrEG4mkttRvWG3OcouGwEGRLgUriJKVaQk7gTjtTV82VbanZ/n/Byd7zSl9PFDV8+nHvoTVnZys1OQ8DCvfYmIDKV7MgnRboGSbdKv7uPNIKvyzA24msPZar1O9LzMeKM5yj9nJpj5/N0rxc71oc4dHJ/Jpw5cBjqw/LDxUnjKqtaWMEo5JN2Lq4xlq4vk4cLL7habVuGrUtKVkbcf21KKMgAe4qufvuwUab5vSzbrFyouBlZUXMXSziBkjaB8+fFJJbG34s4tOGSUow1ter9Kox2dv3Gzdc+lDRNi1cKU9dcTq1KW+opJcOltrEqAIOP6HH0a1ZuT/Fkvinkk1pZae18bFtqTkigFAKAUAoBQCgFAf//Z'
          },
          {
            media: '(min-width: 576px)',
            format: 'jpg',
            url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAPAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAEwAeAwERAAIRAQMRAf/EAHAAAQEBAQAAAAAAAAAAAAAAAAAFAwgBAQADAQAAAAAAAAAAAAAAAAABAgQDEAABAwMEAwADAAAAAAAAAAACAREDABIFMUEEFCEiEzIGFhEAAQMDAgcAAAAAAAAAAAAAAAERAjESAyFBYYGR0YITFf/aAAwDAQACEQMRAD8A6poBQCgFAT89hOHm8ZLjuWcoQSqKkUEhRG4EhJ7Ds6aL4odMWRYTSSVQnJ+j4lDjPs5B4hERHvcpB9BEUVQSS12BNtfOtTdoxEpqs71q78OlOQ/h8SoIEnJyEopb4k53JJHHdlNnqrG76eR3RIJ4R7FvqRdLpuXy+fxe5b7bbfy1dt6kw+xbrt3c2oUFAKAUB//Z'
          },
          {
            format: 'jpg',
            url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAPAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgAeAwERAAIRAQMRAf/EAIEAAQACAwEAAAAAAAAAAAAAAAAFBgMEBwgBAQACAwEAAAAAAAAAAAAAAAABAgMEBQYQAAEDAgYCAgEFAAAAAAAAAAECAwUABBEhEiITBjFBURQyYUIjQwcRAAIBAwIFAQkAAAAAAAAAAAABAhEhAzFB8FFhEgRxkbEiYhMjFAUG/9oADAMBAAIRAxEAPwD1TQCgFAKAUBV5X/Q4KL7DYxF7rbYkUq+vKbTacyVaeEuA5KHv4yx81NDcw+FLLjc40fbtv6mxA92ipeVv4lKXLSSsHFIVa3ACFrQk4ciB7FVTMvlfrcmHHHJaUJrVbdGWCpOcQvdIeVmes38bE36o2/uGylm6T6+UkjckLG0qTmPIq0Wk7lZJtWOBRvV5eEsL6AlrEG4mkttRvWG3OcouGwEGRLgUriJKVaQk7gTjtTV82VbanZ/n/Byd7zSl9PFDV8+nHvoTVnZys1OQ8DCvfYmIDKV7MgnRboGSbdKv7uPNIKvyzA24msPZar1O9LzMeKM5yj9nJpj5/N0rxc71oc4dHJ/Jpw5cBjqw/LDxUnjKqtaWMEo5JN2Lq4xlq4vk4cLL7habVuGrUtKVkbcf21KKMgAe4qufvuwUab5vSzbrFyouBlZUXMXSziBkjaB8+fFJJbG34s4tOGSUow1ter9Kox2dv3Gzdc+lDRNi1cKU9dcTq1KW+opJcOltrEqAIOP6HH0a1ZuT/Fkvinkk1pZae18bFtqTkigFAKAUAoBQCgFAf//Z'
          }
        ],
        sources: [
          {
            media: '(min-width: 1024px)',
            format: 'webp',
            sizes: [
              // webp
              { width: 1024, media: '(min-width: 1024px)', url: require('static/img/light/1024.webp') },
              { width: 1280, media: '(min-width: 1200px)', url: require('static/img/light/1280.webp') },
              { width: 1680, media: '(min-width: 1600px)', url: require('static/img/light/1680.webp') },
              { width: 1920, media: '(min-width: 1900px)', url: require('static/img/light/1920.webp') }
            ]
          },
          {
            media: '(min-width: 1024px)',
            format: 'jpg',
            sizes: [
              // jpg
              { width: 1024, media: '(min-width: 1024px)', url: require('static/img/light/1024.jpg') },
              { width: 1280, media: '(min-width: 1200px)', url: require('static/img/light/1280.jpg') },
              { width: 1680, media: '(min-width: 1600px)', url: require('static/img/light/1680.jpg') },
              { width: 1920, media: '(min-width: 1900px)', url: require('static/img/light/1920.jpg') }
            ]
          },
          {
            media: '(min-width: 768px)',
            format: 'webp',
            sizes: [
              // webp
              { width: 768, media: '(min-width: 768px)', url: require('static/img/light/768.webp') }
            ]
          },
          {
            media: '(min-width: 768px)',
            format: 'jpg',
            sizes: [
              // jpg
              { width: 768, media: '(min-width: 768px)', url: require('static/img/light/768.jpg') }
            ]
          },
          {
            media: '(min-width: 576px)',
            format: 'webp',
            sizes: [
              // webp
              { width: 576, media: '(min-width: 576px)', url: require('static/img/light/576.webp') }
            ]
          },
          {
            media: '(min-width: 576px)',
            format: 'jpg',
            sizes: [
              // jpg
              { width: 576, media: '(min-width: 576px)', url: require('static/img/light/576.jpg') }
            ]
          },
          {
            format: 'webp',
            sizes: [
              // webp
              { width: 414, url: require('static/img/light/414.webp') }
            ]
          },
          {
            format: 'jpg',
            sizes: [
              // jpg
              { width: 414, url: require('static/img/light/414.jpg') }
            ]
          }
        ]
      }
    };
  }
};

</script>

<style lang="postcss" scoped>
.speedkit-picture {
  position: relative;

  & .picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

</style>
