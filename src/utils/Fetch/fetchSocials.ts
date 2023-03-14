import { SocialMedia } from '../../../types';

export default async function fetchSocials() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();

  const socials: SocialMedia[] = data.socials;

  return socials;
}
