const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Transactions = async () => {
  await delay(3000);
  return <div className="h-full w-full">Transactions</div>;
};

export default Transactions;
