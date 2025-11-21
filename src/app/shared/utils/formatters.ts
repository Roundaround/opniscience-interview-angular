export function formatRuntime(runtime: number): string {
  const minutes = runtime % 60;
  const hours = Math.round((runtime - minutes) / 60);

  let str = `${minutes} min`;
  if (hours > 0) {
    str = `${hours} hr, ${str}`;
  }

  return str;
}
