//modelo de datos. Todos los modelos van aquí


export interface MovieDetails{
    title: string;
    image: string;
    country?: string; // '?' es opcional
    date: string;
    sinopsis: string;
    isSelected?: boolean;
  }