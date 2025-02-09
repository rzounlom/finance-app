const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const RecurringBills = async () => {
  await delay(5000);
  return <div>Recurring Bills Page</div>;
};

export default RecurringBills;
