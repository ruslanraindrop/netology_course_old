import { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

import portfolioProjects from '../../data/portfolio';
import { getFilters } from '../../functions/portfolioFunctions';


export default function Portfolio() {
  const filters = getFilters(portfolioProjects);
  const data = portfolioProjects;
  
  const [projects, setFilteredProgects] = useState(data);
  const [selected, setFilter] = useState('All');

  const onFilterClick = (filterName) => {    
    if (filterName === selected) return;    
    
    setFilter((prev) => prev = filterName);  

    if(filterName === 'All') {
      setFilteredProgects(data);
    } else {
      setFilteredProgects(data.filter((prj) => prj.category === filterName));
    }
  }
    
  return (
    <>
      <Toolbar 
        filters={filters}
        selected={selected}
        onSelectFilter={onFilterClick}
      />
      <ProjectList projects={projects}/>
    </>
  );
}