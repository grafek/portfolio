import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanityConfig";

const query = groq`
    *[_type == 'skill'] | order(_createdAt asc)
`;

export default async function getSkills(req, res) {
  const skills = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
