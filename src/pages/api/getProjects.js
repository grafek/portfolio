import { groq } from "next-sanity";
import { sanityClient } from "../../lib/config";

const query = groq`
    *[_type == 'project'] {
      ...,
      technologies[] ->
    }
`;

export default async function getProjects(req, res) {
  const projects = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
