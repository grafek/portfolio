import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanityConfig";

const query = groq`
    *[_type == 'timeline']
`;

export default async function getTimelineInfo(req, res) {
  const timeline = await sanityClient.fetch(query);

  res.status(200).json({ timeline });
}
