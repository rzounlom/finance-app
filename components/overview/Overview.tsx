const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Overview() {
  await delay(3000);

  return (
    <div>
      <h1>Overview</h1>
    </div>
  );
}
