import { createSlice } from '@reduxjs/toolkit';
import { nftApi } from '../api/nftApi';
import { getRandomBid, getRandomEndDate } from '@/shared/lib/random/random';
import { NftClient } from './types';
import { getRandomItem } from '@/shared/lib/random/getRandomItem';
import { nftImages } from '../../../../assets/images/nft';

const initialState: { items: NftClient[] } = {
  items: [],
};

const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(nftApi.endpoints.getNfts.matchFulfilled, (state, { payload }) => {
      state.items = payload.map((nft) => ({
        ...nft,
        bid: getRandomBid(),
        endDate: getRandomEndDate(),
        image: getRandomItem(nftImages),
      }));
    });
  },
});

export const nftReducer = nftSlice.reducer;
