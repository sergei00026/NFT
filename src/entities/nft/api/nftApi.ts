import { baseApi } from '@/shared/api/baseApi';
import type { NFTs } from '@/entities/nft/model/types';

export const nftApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNfts: build.query<NFTs[], void>({
      query: () => 'nfts/list',
    }),
  }),
});

export const { useGetNftsQuery } = nftApi;
