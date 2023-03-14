import { Skill } from '../../../types';

export default async function fetchSkills() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

  const data = await res.json();

  const skills: Skill[] = data.skills;

  return skills;
}
