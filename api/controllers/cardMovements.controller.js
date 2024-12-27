const {
  mockAccounts,
  mockCards,
  mockTransactions,
} = require("../mocks/mockdata");

exports.withdraw = (req, res) => {
  const { cardId, amount, bankId } = req.body;
  const card = mockCards.find((card) => card.id === parseInt(cardId));
  const account = mockAccounts.find((account) => account.id === card.accountId);

  if (card.bankId != bankId) {
    return res.status(400).json({ error: "That card is not from our bank" });
  }

  if (!card.isActive) {
    return res.status(400).json({ error: "Card is not active" });
  }
  if (card.type === "debit" && account.balance < amount) {
    return res.status(400).json({ error: "you haven't enougth credit" });
  }
  if (card.type === "credit" && card.balance + amount > card.limit) {
    return res
      .status(400)
      .json({ error: `you can't withdraw more than ${card.limit}` });
  }

  account.balance -= amount;
  mockTransactions.push({
    id: mockTransactions.length + 1,
    type: "withdrawal",
    amount,
    accountId: account.id,
  });
  res.status(200).json({ message: "success" });
};

exports.deposit = (req, res) => {
  const { cardId, amount } = req.body;
  const card = mockCards.find((card) => card.id === parseInt(cardId));
  const account = mockAccounts.find((account) => account.id === card.accountId);

  if (card.isActive && card.accountId === account.id) {
    account.balance += amount;
    mockTransactions.push({
      id: mockTransactions.length + 1,
      type: "deposit",
      amount,
      accountId: account.id,
    });
    res.status(200).json({ message: "success" });
  } else {
    res.status(400).json({ error: "something went wrong" });
  }
};
