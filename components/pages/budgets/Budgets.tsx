const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Budgets = async () => {
  await delay(5000);
  return <div>Budgets Page</div>;
};

export default Budgets;
