export function toUpper(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word: string) {
      return (
        word[0].toUpperCase() +
        word.split("").map((letter) => {
          return letter.slice(1);
        })
      );
    })
    .join(" ");
}
