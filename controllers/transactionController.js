const getTransactionHistory = async (req, res, next) => {
  try {
    let transactions = [];

    const sortParam = req.query.sort;

    if (sortParam === "date") {
      transactions.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    res.status(200).json({ transactions });
  } catch (error) {
    next(new APIError(400, error.message));
  }
};
