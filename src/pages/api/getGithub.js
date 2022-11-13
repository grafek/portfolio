import { groq } from "next-sanity";
import { sanityClient } from "../../lib/config";

const query = groq`
    *[_type == 'social' && title == 'Github'][0]
`;

export default async function getGithub(req, res) {
  const github = await sanityClient.fetch(query);

  res.status(200).json({ github });
}
