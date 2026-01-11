'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { NftCard } from '@/entities/nft/ui/NftCard';
import { useSelector } from 'react-redux';
import type { RootState } from '@/shared/store/store';
import { useGetNftsQuery } from '@/entities/nft/api/nftApi';
import s from './nftSlider.module.scss';
import { useEffect, useRef, useState } from 'react';
import { PolymorphicButton } from '@/shared/ui/polymorphicButton';
import { Left, Right } from '../../../../assets/icons/components';
import type { Swiper as SwiperType } from 'swiper';
import type { NavigationOptions } from 'swiper/types';

export const NftSlider = () => {
  useGetNftsQuery();

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const NFTs = useSelector((state: RootState) => state.nft.items);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!swiperInstance) return;
    if (!prevRef.current || !nextRef.current) return;

    const navigation = swiperInstance.params.navigation;

    // если navigation = true | false | undefined → заменяем объектом
    if (typeof navigation !== 'object') {
      swiperInstance.params.navigation = {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      } satisfies NavigationOptions;

      swiperInstance.navigation?.init();
      swiperInstance.navigation?.update();
      return;
    }

    // navigation уже объект
    (swiperInstance.params.navigation as NavigationOptions).prevEl = prevRef.current;
    (swiperInstance.params.navigation as NavigationOptions).nextEl = nextRef.current;

    swiperInstance.navigation?.update();
  }, [swiperInstance]);

  if (NFTs.length === 0) {
    return <div className={s.wrapper}>Loading NFTs...</div>;
  }

  return (
    <div className={s.wraper}>
      <Swiper
        className={s.swiper}
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop
        grabCursor
        centeredSlides
        autoHeight
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 32,
          },
          500: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 40,
          },
          2048: {
            slidesPerView: 5.5,
            spaceBetween: 80,
          },
        }}
      >
        {NFTs?.map((nft) => (
          <SwiperSlide
            key={nft.id}
            className={s.slide}
          >
            <NftCard nft={nft} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s.navBody}>
        <div className={s.nav}>
          <PolymorphicButton
            variant='text'
            ref={prevRef}
            className={s.prev}
          >
            <Left />
          </PolymorphicButton>
          <span></span>
          <PolymorphicButton
            variant='text'
            ref={nextRef}
            className={s.next}
          >
            <Right />
          </PolymorphicButton>
        </div>
      </div>
    </div>
  );
};
