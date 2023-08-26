import './App.css';
import SearchForm from './Components/SearchForm';
import FlightList from './Components/FlightList';
import { useState } from 'react';

function App() {
  const [filters, setFilters] = useState({});
    
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

  return (
    <div className="App">
      <h1>Flight Search App</h1>
      <SearchForm onFilterChange={handleFilterChange}/>
      <FlightList filters={filters} />
    </div>
  );
}

export default App;
