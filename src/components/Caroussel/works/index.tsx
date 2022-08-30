import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import { SRLWrapper } from 'simple-react-lightbox'
import { Container } from './styles'

import { Image } from '@chakra-ui/react'

SwiperCore.use([Navigation, Autoplay])

const elements = [
  {
    key: '1',
    src: '/images/tatto1.png'
  },
  {
    key: '2',
    src: '/images/tatto2.png'
  },
  {
    key: '3',
    src: '/images/tatto3.png'
  },
  {
    key: '4',
    src: '/images/tatto4.png'
  },
  {
    key: '5',
    src: '/images/tatto5.png'
  },
  {
    key: '6',
    src: '/images/tatto6.png'
  },
  {
    key: '7',
    src: '/images/tatto7.png'
  },
  {
    key: '8',
    src: '/images/tatto8.png'
  },
  {
    key: '9',
    src: '/images/tatto9.png'
  },
  {
    key: '10',
    src: '/images/tatto10.png'
  },
  {
    key: '11',
    src: '/images/tatto11.png'
  },
  {
    key: '12',
    src: '/images/tatto12.png'
  },
  {
    key: '13',
    src: '/images/tatto13.png'
  },
]

const WorksCaroussel = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={6}
        breakpoints={{
          1460: {
            slidesPerView: 6
          },
          1160: {
            slidesPerView: 4
          },
          760: {
            slidesPerView: 3
          },
          330: {
            slidesPerView: 1
          }
        }}
        loop
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {elements.map(e => {
          return (
            <SwiperSlide>
              <SRLWrapper>
                <Image key={e.key} src={e.src} />
              </SRLWrapper>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default WorksCaroussel
