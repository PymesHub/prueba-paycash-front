import { GenrePersonType } from "../domain/models/Genres.enums";

const genreArray = [
  { key: GenrePersonType.MALE, label: "Masculino" },
  { key: GenrePersonType.WOMAN, label: "Feminino" },
  { key: GenrePersonType.NO_BINARY, label: "No Binario" },
];

const keyToValueGenre = (key: string) => {
  const genre = genreArray.find((genre) => genre.key === key);

  return genre?.label;
};

export { genreArray, keyToValueGenre };
