import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import type { Skill } from '../../../types';
import { sanityClient } from '../../lib/sanityConfig';

const query = groq`
    *[_type == 'skill'] | order(_createdAt asc)
`;

export default async function getSkills(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const skills: Skill[] = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
