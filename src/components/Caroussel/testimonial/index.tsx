import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import { Container } from './styles'
import { Testimonial } from '~/components/Testimonial'
import translates from '~/locales'
import { useRouter } from 'next/router'

SwiperCore.use([Navigation, Autoplay])

const TestimonialCaroussel = () => {
  const router = useRouter()

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  const elements = [
    {
      description: t.testimonials.nick,
      name: 'Nick',
      src: '/images/nick.png'
    },
    {
      description: t.testimonials.andres,
      name: 'Andres',
      src: '/images/andres.png'
    },
    {
      description: t.testimonials.luis,
      name: 'Luis',
      src: '/images/luis.png'
    },
    {
      description: t.testimonials.sabrina,
      name: 'Sabrina',
      src: '/images/sabrina.jpeg'
    }
  ]

  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={90}
        autoplay={{
          delay: 4000,
        }}
        breakpoints={{
          1368: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          260: {
            slidesPerView: 1
          }
        }}
        loop
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {elements.map(e => {
          return (
            <SwiperSlide>
              <Testimonial
                name={e.name}
                src={e.src}
                description={e.description}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default TestimonialCaroussel
