import { useEffect, useState } from 'react';
import { getTimeLeft } from '@/shared/lib/random/timer';
import type { NftClient } from '../model/types';
import Image from 'next/image';
import { PolymorphicButton } from '@/shared/ui/polymorphicButton';
import { MdiEthereum } from '../../../../assets/icons/components';
import s from './nftCard.module.scss';

type Props = {
  nft: NftClient;
};

export const NftCard = ({ nft }: Props) => {
  const [time, setTime] = useState(() => getTimeLeft(nft.endDate));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft(nft.endDate));
    }, 1000);

    return () => clearInterval(id);
  }, [nft.endDate]);

  return (
    <div className={s.card}>
      <div className={s.timer}>{time}</div>
      <Image
        src={nft.image}
        alt={nft.name}
        className={s.img}
      />
      <h3 className={s.name}>{nft.name}</h3>
      <div className={s.boxBid}>
        <div className={s.bid}>
          <span>Current bid</span>
          <strong>
            {' '}
            <MdiEthereum /> {nft.bid}
          </strong>
        </div>
        <PolymorphicButton className={s.btn}>PLACE BID</PolymorphicButton>
      </div>
    </div>
  );
};
