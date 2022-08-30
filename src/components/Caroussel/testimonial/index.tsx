import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import { Container } from './styles'
import { Testimonial } from '~/components/Testimonial'

SwiperCore.use([Navigation, Autoplay])

const elements = [
  {
    description: `Rafael is one of the best tattoo artists I know! He was very nice and enthusiastic with my idea, the whole experience was great. I'll be back soon to get another tattoo done with him. The work he did exceeded all my expectations. I definitely recommend him!`,
    name: 'andres',
    src: '/images/nick.png'
  },
  {
    description: `It was a good experience to get a tattoo with Rafael, the final design was excellent as I wanted it to be, and I thank Rafael for such an excellent job, it exceeded all my expectations. It's been a while and the piece healed super solid the color super well. Soon I'll be thinking about my new project with Rafael`,
    name: 'andres',
    src: '/images/andres.png'
  },
  {
    description: `I'm eternally grateful for the quality of my tattoo, the coloring and healing were perfect!
    He Exceeded my expectation by 100% and has already become my official tattoo artist.
    I lost count of how many times I was stopped on the street and I received compliments about the tattoo, simply sensational!`,
    name: 'luis',
    src: '/images/luis.png'
  },
  {
    description: `As soon as i was his work, i immediately fell in love with his style. I contacted him by message and he was very invested and kind from the start.
    This was one of the best tattoo experiences i had. He understood exactly what i was looking ofr and the tattoo was just beyond my expectations.
    If you're looking for a true artist, don't hesitate to contact him`,
    name: 'Sabrina',
    src: '/images/sabrina.jpeg'
  }
]

const TestimonialCaroussel = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={90}
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
