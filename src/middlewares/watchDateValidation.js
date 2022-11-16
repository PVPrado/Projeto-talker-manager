const watchDateValidation = (req, res, next) => {
    const { watchedAt } = req.body.talk;
    if (!watchedAt) {
      return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
    const isValidDate = watchedAt.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/); // https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy
    if (!isValidDate) {
      return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
  };

module.exports = watchDateValidation;