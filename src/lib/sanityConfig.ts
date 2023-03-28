import { createClient } from 'next-sanity';
import createImageBuilder from '@sanity/image-url';
import type { SanityImage } from '../../types';
export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: 'y1eewb5s',
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(sanityConfig);

export const getImgUrl = (src:SanityImage) => {
  return createImageBuilder(sanityClient).image(src);
};
