import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanityConfig";

const query = groq`
    *[_type == 'project']
`;

export default async function getProjects(req, res) {
  const projects = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
