export interface Personagem {
    id: number;
    name: string;
    status: string;
    species: string;
    tipo: string;
    gender: string;
    origin: { name: string, url: string };
    location: { nonameme: string, url: string };
    image: string;
    episode: string[];
    url: string;
    criado: string;
  }
  