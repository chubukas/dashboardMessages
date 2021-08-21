export const createNameAcronym = (fullName) => {
  let str = fullName;
  let matches = str?.match(/\b(\w)/g);
  let acronym = matches?.join(" ");
  return acronym?.toUpperCase();
};
