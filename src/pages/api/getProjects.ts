import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import type { Project } from '../../../types';
import { sanityClient } from '../../lib/sanityConfig';

const query = groq`
    *[_type == 'project'] {
      ...,
      technologies[] ->
    }
`;

export default async function getProjects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projects: Project[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
