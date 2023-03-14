import { PageInfo } from '../../../types';

export default async function fetchPageInfo() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();

  return data.pageInfo as PageInfo;
}
