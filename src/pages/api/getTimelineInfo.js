import { groq } from "next-sanity";
import { sanityClient } from "../../lib/config";

const query = groq`
  *[_type == 'timeline'] | order(year asc)
`;

export default async function getTimelineInfo(req, res) {
  const timelineInfo = await sanityClient.fetch(query);

  res.status(200).json({ timelineInfo });
}
