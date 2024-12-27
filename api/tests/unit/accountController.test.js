const { getTransactions } = require("../../controllers/accounts.controller");
const { mockTransactions } = require("../../mocks/mockdata");

describe("getTransactions", () => {
  it("should return all transactions for an account id", () => {
    const req = { params: { id: "1" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    getTransactions(req, res);

    expect(res.json).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      mockTransactions.filter((transaction) => transaction.accountId === 1)
    );
  });

  it("should return an empty array if not found", () => {
    const req = { params: { id: "22" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    getTransactions(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([]);
  });
});
