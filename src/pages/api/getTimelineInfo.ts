import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import type { Timeline } from '../../../types';
import { sanityClient } from '../../lib/sanityConfig';

const query = groq`
  *[_type == 'timeline'] | order(year asc)
`;

export default async function getTimelineInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const timelineInfo: Timeline = await sanityClient.fetch(query);

  res.status(200).json({ timelineInfo });
}
