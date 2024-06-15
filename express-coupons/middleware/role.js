const isAdmin = (req, res, next) => {
  const { type } = res.locals.payload;
  if (type === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Forbidden: Admin access required' });
};

const isVendor = (req, res, next) => {
  const { type } = res.locals.payload;
  if (type === 'vendor') {
    return next();
  }
  return res.status(403).json({ message: 'Forbidden: Vendor access required' });
};

const isClient = (req, res, next) => {
  const { type } = res.locals.payload;
  if (type === 'client') {
    return next();
  }
  return res.status(403).json({ message: 'Forbidden: Client access required' });
};

module.exports = {
  isAdmin,
  isVendor,
  isClient,
};
