
export interface Libro {
  titulo: string;
  autor: string;
  portada: string;
  goodreads: string;
}

export const libros: Libro[] = [
  {
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    portada: "/libros/frankenstein.png",
    goodreads: "https://www.goodreads.com/",
  },
  {
    titulo: "What Moves the Dead",
    autor: "T. Kingfisher",
    portada: "/libros/what-moves-the-dead.png",
    goodreads: "https://www.goodreads.com/",
  },
];
