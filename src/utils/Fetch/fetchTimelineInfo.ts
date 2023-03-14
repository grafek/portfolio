import { Timeline } from '../../../types';

export default async function fetchTimelineInfo() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTimelineInfo`
  );

  const data = await res.json();

  return data.timelineInfo as Timeline[];
}
