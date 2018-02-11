import dictionary from "./dictionary.json";

function filterDict(searchText) {
  if (dictionary.hasOwnProperty(searchText.toUpperCase())) {
    return dictionary[searchText.toUpperCase()];
  }
  return "Oops, word not found.";
}

export default filterDict;
