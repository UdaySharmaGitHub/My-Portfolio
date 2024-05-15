import { useState ,useEffect} from 'react'
import {FaRegEye} from 'react-icons/fa'

const Portfolio = () => {

    // Filter Buttons 
    const filterButton = ['All','Web design','Web development','Applications'];
// hooks for selecting the categories
        const [selectCategory, setSelectCategory] = useState('All')

    // fetch the data from Projects Json File
    const [projects,setProjects] = useState([]);
    const [filteredProjects,setFilteredProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setProjects(data);
            setFilteredProjects(data);
        })
        .catch(error => console.error('Error loading project data:', error));
    }, [])
    
    const handleFilterClick = (category) => {
        setSelectCategory(category);
        if (category === 'All') {
          setFilteredProjects(projects);
        } else {
          const filtered = projects.filter(project => project.category === category);
          setFilteredProjects(filtered);
        }
      };

  return (
    <section>
        <header>
        <h2 className='h2 article-title'>Portfolio</h2>
        </header>
        {/* filter buttons */}
        <ul className='filter-list'>
            {filterButton.map((category)=>(
                <li key={category} className='filter-item'>
                    <button className={category=== selectCategory? 'active':''}
                    onClick={()=>handleFilterClick(category)}
                    data-filter-bin>
                    {category}
                    </button>
                </li>
            ))}
        </ul>

        {/* Shows Projects */}
       <section className="projects">
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Portfolio