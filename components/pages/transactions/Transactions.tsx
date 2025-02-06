const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Transactions = async () => {
  await delay(3000);
  return <div>Transactions Page</div>;
};

export default Transactions;
