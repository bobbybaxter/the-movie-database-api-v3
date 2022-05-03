module.exports = response => {
  const { id, release_date, title, popularity } = response;
  return {
    id,
    date: release_date,
    name: title,
    rating: popularity,
  };
};