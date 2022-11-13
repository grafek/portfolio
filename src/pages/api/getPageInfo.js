import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanityConfig";

const query = groq`
    *[_type == 'pageInfo']
`;

export default async function getPageInfo(req, res) {
  const pageInfo = await sanityClient.fetch(query);

  res.status(200).json({ pageInfo });
}
