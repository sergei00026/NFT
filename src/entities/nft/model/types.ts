import type { StaticImageData } from 'next/image';

export type NFTs = {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
  symbol: string;
};
export type NftClient = {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
  symbol: string;
  bid: number;
  endDate: number;
  image: StaticImageData;
};
