import { SEARCH_MODE_AND, SEARCH_MODE_OR } from "./constants";

export const search = (data, query, mode) => {
  const searchWords = query.split(/\s+/);

  if (mode === SEARCH_MODE_AND) {
    query = searchWords.map(q => `(?=.*${q})`).join("");
  }
  if (mode === SEARCH_MODE_OR) {
    query =`(${searchWords.join("|")})`;
  }

  const regex = new RegExp(query, "gi");
  return data.filter(row => regex.test(
    `${row.name} ${row.role} ${row.connectedOn} ${row.status}`
  ));
};