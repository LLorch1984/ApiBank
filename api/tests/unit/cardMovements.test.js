const {
  withdraw,
  deposit,
} = require("../../controllers/cardMovements.controller");
const {
  mockAccounts,
  mockCards,
  mockTransactions,
} = require("../../mocks/mockdata");

describe("cardMovement Controller", () => {
  describe("withdraw", () => {
    beforeEach(() => {
      mockAccounts.forEach((account) => (account.balance = 1000));
      mockTransactions.length = 0;
    });

    it("should successfully withdraw money from a debit card whit enougth credit", () => {
      const req = { body: { cardId: 1, amount: 300 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      withdraw(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: "success",
      });
      expect(mockAccounts[0].balance).toBe(700);
      expect(mockTransactions).toHaveLength(1);
      expect(mockTransactions[0]).toMatchObject({
        type: "withdrawal",
        amount: 300,
        accountId: 1,
      });
    });

    it("should fail to withdraw money card is not activate", () => {
      const req = { body: { cardId: 11, amount: 100 } };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      withdraw(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Card is not active" });
    });

    it("should fail to withdraw money from a debit card with not enoutg credit", () => {
      const req = { body: { cardId: 1, amount: 2000 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      withdraw(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: "you haven't enougth credit",
      });
    });

    it("should fail to withdraw money from a credit card if withdraw is superior than limit", () => {
      const req = { body: { cardId: 2, amount: 3001 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      withdraw(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: `you can't withdraw more than 3000`,
      });
    });
  });

  describe("deposit", () => {
    beforeEach(() => {
      mockAccounts.forEach((account) => (account.balance = 1000));
      mockTransactions.length = 0;
    });

    it("should deposit money if the card is active", () => {
      const req = { body: { cardId: 1, amount: 200 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      deposit(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "success" });
      expect(mockAccounts[0].balance).toBe(1200);
      expect(mockTransactions).toHaveLength(1);
      expect(mockTransactions[0]).toMatchObject({
        type: "deposit",
        amount: 200,
        accountId: 1,
      });
    });

    it("should fail to deposit money if the card is not activated", () => {
      const req = { body: { cardId: 1, amount: 200 } };
      mockCards[0].isActive = false;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      deposit(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "something went wrong" });
    });

    it("should fail to deposit money if the card does not belong to the account", () => {
      const req = { body: { cardId: 1, amount: 200 } };
      mockCards[0].accountId = 2; // Change the card to belong to a different account

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      depositMoney(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "something went wrong" });
    });
  });
});
