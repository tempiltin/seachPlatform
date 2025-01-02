import React from 'react';
import { SearchInput } from './components/SearchInput';
import { QuestionCard } from './components/QuestionCard';
import { useSearch } from './hooks/useSearch';

function App() {
  const { searchTerm, setSearchTerm, filteredData } = useSearch();

  return (
    <div className="min-h-screen hemis-color from-blue-50 to-indigo-50  ">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white   p-6 md:p-8 mb-8">
         
          
          <SearchInput value={searchTerm} onChange={setSearchTerm} />

          <div className="space-y-4">
            {filteredData.map((question, index) => (
              <QuestionCard key={index} question={question} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;