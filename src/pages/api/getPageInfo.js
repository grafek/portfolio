import { groq } from "next-sanity";
import { sanityClient } from "../../lib/config";

const query = groq`
    *[_type == 'pageInfo'][0]
`;

export default async function getPageInfo(req, res) {
  const pageInfo = await sanityClient.fetch(query);

  res.status(200).json({ pageInfo });
}
