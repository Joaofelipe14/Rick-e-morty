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
    episodio: string[];
    url: string;
    criado: string;
  }
  