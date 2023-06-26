export function toUpper(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word: string) {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}
