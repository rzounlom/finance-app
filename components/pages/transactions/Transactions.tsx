const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Transactions = async () => {
  await delay(5000);
  return <div className="h-full w-full">Transactions</div>;
};

export default Transactions;
