import { getColumns } from '../../functions/portfolioFunctions';

export default function ProjectList({ projects }) {
  const columns = getColumns(projects, 3);

  return (
    <div className="projects-box">  
      {columns.map((column, idx) => <div className={`column_${idx}`} key={`column_${idx}`}>
        {column.map((item, id) => <div className='img-preview_box' key={`${column}-${item}-${id}`}>
          <img className='img-item' src={item.img} alt=''/></div>)}
      </div>)}    
    </div>
  );
}