export default async function fetchGithub() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getGithub`);

  const data = await res.json();

  return data.github;
}
