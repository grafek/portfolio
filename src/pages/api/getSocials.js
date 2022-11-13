import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanityConfig";

const query = groq`
    *[_type == 'social']
`;

export default async function getSocials(req, res) {
  const socials = await sanityClient.fetch(query);

  res.status(200).json({ socials });
}
