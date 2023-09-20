import { useEffect, useState } from 'react';

export function useAnimalSearch() {
  const [animals, setAnimals] = useState([]);

  const search = async (q) => {
    const res = await fetch(
      'http://localhost:8080?' + new URLSearchParams({ q })
    );
    const data = await res.json();
    setAnimals(data);

    localStorage.setItem('lastQuery', q);
  };

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');
    search(lastQuery);
  }, []);

  return { search, animals };
}
