module.exports = response => {
  const { id, first_air_date, name, popularity } = response;
  return {
    id,
    date: first_air_date,
    name,
    rating: popularity,
  };
};