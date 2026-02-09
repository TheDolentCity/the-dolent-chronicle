export function mapAndCountTags(tags: (string | undefined)[]) {
  const map = new Map<string, number>();

  // Count the instance of each tag, ignoring empty tags
  tags.forEach((tag) => {
    if (tag?.trim() === "" || !tag) return;

    // Increment existing count, or set initial count
    map.set(tag, (map.get(tag) ?? 0) + 1);
  });

  // Map to an iterable, easy to read type
  return map
    .entries()
    .map((entry) => ({
      tag: entry[0],
      count: entry[1],
    }))
    .toArray()
    .sort((a, b) => b.count - a.count);
}