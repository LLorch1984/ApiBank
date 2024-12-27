const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", pin: "1234" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", pin: "2345" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", pin: "3456" },
  { id: 4, name: "Bob Brown", email: "bob@example.com", pin: "4567" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", pin: "5678" },
  { id: 6, name: "Diana Evans", email: "diana@example.com", pin: "6789" },
  { id: 7, name: "Evan Foster", email: "evan@example.com", pin: "7890" },
  { id: 8, name: "Fiona Green", email: "fiona@example.com", pin: "8901" },
  { id: 9, name: "George Harris", email: "george@example.com", pin: "9012" },
  { id: 10, name: "Hannah White", email: "hannah@example.com", pin: "0123" },
];

const mockAccounts = [
  { id: 1, balance: 1000, userId: 1 },
  { id: 2, balance: 2000, userId: 2 },
  { id: 3, balance: 1500, userId: 3 },
  { id: 4, balance: 500, userId: 4 },
  { id: 5, balance: 3000, userId: 5 },
  { id: 6, balance: 2500, userId: 6 },
  { id: 7, balance: 4000, userId: 7 },
  { id: 8, balance: 3500, userId: 8 },
  { id: 9, balance: 4500, userId: 9 },
  { id: 10, balance: 5000, userId: 10 },
];

const mockCards = [
  {
    id: 1,
    type: "debit",
    limit: 2000,
    balance: 0,
    isActive: true,
    accountId: 1,
    bankId: 1,
  },
  {
    id: 2,
    type: "credit",
    limit: 3000,
    balance: 500,
    isActive: true,
    accountId: 2,
    bankId: 1,
  },
  {
    id: 3,
    type: "debit",
    limit: 1500,
    balance: 0,
    isActive: true,
    accountId: 3,
    bankId: 1,
  },
  {
    id: 4,
    type: "credit",
    limit: 1000,
    balance: 200,
    isActive: true,
    accountId: 4,
    bankId: 1,
  },
  {
    id: 5,
    type: "debit",
    limit: 2500,
    balance: 0,
    isActive: true,
    accountId: 5,
    bankId: 1,
  },
  {
    id: 6,
    type: "credit",
    limit: 2000,
    balance: 300,
    isActive: true,
    accountId: 6,
    bankId: 1,
  },
  {
    id: 7,
    type: "debit",
    limit: 3000,
    balance: 0,
    isActive: true,
    accountId: 7,
    bankId: 1,
  },
  {
    id: 8,
    type: "credit",
    limit: 3500,
    balance: 400,
    isActive: true,
    accountId: 8,
    bankId: 1,
  },
  {
    id: 9,
    type: "debit",
    limit: 4000,
    balance: 0,
    isActive: true,
    accountId: 9,
    bankId: 1,
  },
  {
    id: 10,
    type: "credit",
    limit: 5000,
    balance: 600,
    isActive: true,
    accountId: 10,
    bankId: 1,
  },
  {
    id: 11,
    type: "credit",
    limit: 5000,
    balance: 600,
    isActive: false,
    accountId: 10,
    bankId: 1,
  },
];

const mockTransactions = [
  { id: 1, type: "deposit", amount: 1000, accountId: 1 },
  { id: 2, type: "withdrawal", amount: 200, accountId: 2 },
  { id: 3, type: "deposit", amount: 500, accountId: 3 },
  { id: 4, type: "withdrawal", amount: 100, accountId: 4 },
  { id: 5, type: "deposit", amount: 1500, accountId: 5 },
  { id: 6, type: "withdrawal", amount: 300, accountId: 6 },
  { id: 7, type: "deposit", amount: 2000, accountId: 7 },
  { id: 8, type: "withdrawal", amount: 400, accountId: 8 },
  { id: 9, type: "deposit", amount: 2500, accountId: 9 },
  { id: 10, type: "withdrawal", amount: 500, accountId: 10 },
  { id: 11, type: "transfer", amount: 300, accountId: 1 },
  { id: 12, type: "transfer", amount: 400, accountId: 2 },
  { id: 13, type: "transfer", amount: 500, accountId: 3 },
  { id: 14, type: "transfer", amount: 600, accountId: 4 },
  { id: 15, type: "transfer", amount: 700, accountId: 5 },
  { id: 16, type: "transfer", amount: 800, accountId: 6 },
  { id: 17, type: "transfer", amount: 900, accountId: 7 },
  { id: 18, type: "transfer", amount: 1000, accountId: 8 },
  { id: 19, type: "transfer", amount: 1100, accountId: 9 },
  { id: 20, type: "transfer", amount: 1200, accountId: 10 },
];

module.exports = {
  mockUsers,
  mockAccounts,
  mockCards,
  mockTransactions,
};
