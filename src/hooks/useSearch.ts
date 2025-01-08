import { useState, useEffect } from 'react';
import { Question } from '../types';
import data from '../db/mobile.json';

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<Question[]>([]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredData([]);
      return;
    }

    const results = data.filter(item =>
      item.savol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.javob.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm]);

  return { searchTerm, setSearchTerm, filteredData };
}