import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  .mySwiper {
    padding-top: 50px;
    padding-bottom: 104px;
    text-align: -webkit-center;
  }

  .swiper-slide img {
    max-height: 600px;

    @media (max-width: 868px) {
      max-height: 300px;
    }

    @media (max-width: 460px) {
      max-height: 600px;
      width: 350px;
    }
  }

  .swiper-button-next {
    inset-block-start: auto;
    bottom: 8px;
    right: 47%;
    padding: 8px 20px;
    background-color: #26292b;
    border-radius: 50px;
    box-shadow: 0px 0px 10px 0px #C2AD60;
    cursor: pointer;

    @media (max-width: 1468px) {
      right: 44%
    }

    @media (max-width: 868px) {
      right: 41%
    }

    @media (max-width: 460px) {
      right: 35%
    }
  }

  .swiper-button-prev {
    inset-block-start: auto;
    bottom: 8px;
    left: 47%;
    padding: 8px 20px;
    background-color: #26292b;
    border-radius: 50px;
    box-shadow: 0px 0px 10px 0px #C2AD60;
    cursor: pointer;

    @media (max-width: 1468px) {
      left: 44%
    }

    @media (max-width: 868px) {
      left: 41%
    }

    @media (max-width: 460px) {
      left: 35%
    }
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 13px;
    font-weight: bold;
    color: #fff;
  }

`