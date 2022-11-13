export default async function fetchLinkedIn() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getLinkedIn`);

  const data = await res.json();

  return data.linkedIn;
}
