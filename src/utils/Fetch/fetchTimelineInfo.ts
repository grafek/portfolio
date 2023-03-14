import { Timeline } from '../../../types';

export default async function fetchTimelineInfo() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTimelineInfo`
  );

  const data = await res.json();

  const timelineInfo: Timeline[] = data.timelineInfo;

  return timelineInfo;
}
