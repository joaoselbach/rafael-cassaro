import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import { Container } from './styles'
import { Testimonial } from '~/components/Testimonial'
import translates from '~/locales'
import { useRouter } from 'next/router'
import { Studio } from '~/components/Studio'

SwiperCore.use([Navigation, Autoplay])

const StudioCaroussel = () => {
  const router = useRouter()

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  const elements = [
    {
      src: '/images/studio.png'
    },
    {
      src: '/images/studio.png'
    },
    {
      src: '/images/studio.png'
    },
    {
      src: '/images/studio.png'
    }
  ]

  return (
    <Container>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 4000
        }}
        loop
        // navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {elements.map(e => {
          return (
            <SwiperSlide>
              <Studio src={e.src} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default StudioCaroussel
