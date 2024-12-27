const { mockAccounts, mockTransactions } = require("../mocks/mockdata");
const IBAN = require("iban");

exports.transfer = (req, res) => {
  const { fromAccountId, toIban, amount } = req.body;
  const commission = 5;
  if (!IBAN.isValid(toIban)) {
    return res.status(400).json({ error: "Invalid IBAN" });
  }

  const fromAccount = mockAccounts.find(
    (account) => account.id === fromAccountId
  );
  const toAccount = mockAccounts.find((account) => account.iban === toIban);
  const isSameBank = toAccount && fromAccount.bankId === toAccount.bankId;

  if (!fromAccount) {
    return res.status(400).json({ error: "bank not found" });
  }

  if (!toAccount) {
    return res.status(400).json({ error: "Destination bank not found" });
  }

  const totalAmount = isSameBank ? amount : amount + commission;

  if (fromAccount.balance < totalAmount) {
    return res.status(400).json({ error: "Insufficient credit" });
  }

  fromAccount.balance -= totalAmount;
  toAccount.balance += amount;

  mockTransactions.push({
    id: mockTransactions.length + 1,
    type: "transfer",
    amount,
    fromAccountId,
    toAccountId: toAccount.id,
  });

  res.status(200).json({ message: "success" });
};
