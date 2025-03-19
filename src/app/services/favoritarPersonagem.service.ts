import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class favoritarPersonagemService {
  private dbName: string = 'rickMorty-db'; 
  private storeName: string = 'Favoritos'; 
  private dbPromise: Promise<IDBDatabase | null>; 

  constructor() {
    this.dbPromise = this.openDatabase(); 
  }

  /**
   * Abre o banco de dados IndexedDB ou cria se não existir
   */
  private openDatabase(): Promise<IDBDatabase | null> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBRequest).result;
        if (db) {
          if (!db.objectStoreNames.contains(this.storeName)) {
            db.createObjectStore(this.storeName, { keyPath: 'id' });
          }
        }
      };

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = (event) => {
        console.error('Erro ao abrir o banco de dados', event);
        reject('Erro ao abrir o banco de dados');
      };
    });
  }

  /**
   * Recupera todos os personagens favoritos (apenas os IDs) do IndexedDB
   * @returns {Promise<number[]>} 
   */
  async getFavoritos(): Promise<number[]> {
    const db = await this.dbPromise;
    if (!db) throw new Error('Banco de dados não inicializado');

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result.map((fav: any) => fav.id)); 
      };

      request.onerror = () => {
        reject('Erro ao recuperar favoritos');
      };
    });
  }

  /**
   * Adiciona um personagem aos favoritos (salvando apenas o ID)
   * @param {number} id 
   */
  async addFavorito(id: number): Promise<void> {
    const db = await this.dbPromise;
    if (!db) throw new Error('Banco de dados não inicializado');

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add({ id });

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject('Erro ao adicionar favorito');
      };
    });
  }

  /**
   * Remove um personagem dos favoritos com base no ID
   * @param {number} id 
   */
  async removeFavorito(id: number): Promise<void> {
    const db = await this.dbPromise;
    if (!db) throw new Error('Banco de dados não inicializado');

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(id); // Remove pelo ID

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject('Erro ao remover favorito');
      };
    });
  }

  /**
   * Verifica se um personagem é favorito com base no ID
   * @param {number} id 
   * @returns {Promise<boolean>} 
   */
  async isFavorito(id: number): Promise<boolean> {
    const db = await this.dbPromise;
    if (!db) throw new Error('Banco de dados não inicializado');

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(id); // Verifica pelo ID

      request.onsuccess = () => {
        resolve(!!request.result); //
      };

      request.onerror = () => {
        reject('Erro ao verificar se é favorito');
      };
    });
  }
}
