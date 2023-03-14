import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import type { PageInfo } from '../../../types';
import { sanityClient } from '../../lib/sanityConfig';

const query = groq`
    *[_type == 'pageInfo'][0]
`;

export default async function getPageInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);

  res.status(200).json({ pageInfo });
}
