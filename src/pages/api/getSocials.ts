import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import type { SocialMedia } from '../../../types';
import { sanityClient } from '../../lib/sanityConfig';

const query = groq`
    *[_type == 'social']
`;

export default async function getLinkedIn(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const socials: SocialMedia[] = await sanityClient.fetch(query);

  res.status(200).json({ socials });
}
