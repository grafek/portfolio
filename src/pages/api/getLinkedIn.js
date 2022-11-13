import { groq } from "next-sanity";
import { sanityClient } from "../../lib/config";

const query = groq`
    *[_type == 'social' && title == 'LinkedIn'][0]
`;

export default async function getLinkedIn(req, res) {
  const linkedIn = await sanityClient.fetch(query);

  res.status(200).json({ linkedIn });
}
