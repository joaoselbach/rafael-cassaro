import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import { Container } from './styles'
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
      src: '/images/studio-1.png'
    },
    {
      src: '/images/studio-2.png'
    },
    {
      src: '/images/studio-3.png'
    },
    {
      src: '/images/studio-4.png'
    }
  ]

  return (
    <Swiper
    spaceBetween={40}
      autoplay={{
        delay: 4000
      }}
      loop
      navigation={true}
      modules={[Navigation]}
      className="swiper-studio"
    >
      <Container>
        {elements.map(e => {
          return (
            <SwiperSlide>
              <Studio src={e.src} />
            </SwiperSlide>
          )
        })}
      </Container>

    </Swiper>
  )
}

export default StudioCaroussel
