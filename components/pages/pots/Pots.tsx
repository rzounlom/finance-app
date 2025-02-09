const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Pots = async () => {
  await delay(5000);
  return <div>Pots Page</div>;
};

export default Pots;
