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
import { useState } from 'react';
import { PolymorphicButton } from '@/shared/ui/polymorphicButton';
import { Left, Right } from '../../../../assets/icons/components';

export const NftSlider = () => {
  useGetNftsQuery();

  const NFTs = useSelector((state: RootState) => state.nft.items);

  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  if (NFTs.length === 0) {
    return <div className={s.wrapper}>Loading NFTs...</div>;
  }

  return (
    <div className={s.wraper}>
      <Swiper
        className={s.swiper}
        modules={[Navigation]}
        loop
        grabCursor
        centeredSlides
        autoHeight
        navigation={{ prevEl, nextEl }} // Передаем кнопки через state
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 32 },
          500: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5, spaceBetween: 40 },
          1024: { slidesPerView: 4.5, spaceBetween: 40 },
          2048: { slidesPerView: 5.5, spaceBetween: 80 },
        }}
      >
        {NFTs.map((nft) => (
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
            ref={(node: HTMLButtonElement | null) => setPrevEl(node)}
            className={s.prev}
          >
            <Left />
          </PolymorphicButton>
          <span></span>
          <PolymorphicButton
            variant='text'
            ref={(node: HTMLButtonElement | null) => setNextEl(node)}
            className={s.next}
          >
            <Right />
          </PolymorphicButton>
        </div>
      </div>
    </div>
  );
};
