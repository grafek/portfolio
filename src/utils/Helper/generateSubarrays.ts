function generateSubarrays<T>(arr: T[], chunkSize: number): T[][] {
  const subarrays: T[][] = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    subarrays.push(arr.slice(i, i + chunkSize));
  }

  return subarrays;
}

export default generateSubarrays;
