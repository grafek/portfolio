import { SocialMedia } from '../../../types';

export default async function fetchLinkedIn() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();

  return data.socials as SocialMedia[];
}