const { mockTransactions } = require("../mocks/mockdata");

exports.getTransactions = (req, res) => {
  const accountId = parseInt(req.params.id);
  const transactions = mockTransactions.filter(
    (transaction) => transaction.accountId === accountId
  );
  res.status(200).json(transactions);
};
