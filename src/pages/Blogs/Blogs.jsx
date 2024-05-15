import { useState,useEffect } from "react"
import BlogPost from "./BlogPost";
import "./Blogs.css"

const Blogs = () => {
  const [blogs,setBlogs] = useState([]);
  const [currentPage,setCurrentPage]  = useState(1);
  const [postPerPage] = useState(4);

  useEffect(()=>{
      fetch('blogs.json')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        setBlogs(data);
      })
  },[])

   //Page
   const indexOfLastPage = currentPage * postPerPage;
   const indexOfFirstPage = indexOfLastPage - postPerPage;
   const currentPost  = blogs.slice(indexOfFirstPage,indexOfLastPage);

  const paginate=(pageNumber)=> setCurrentPage(pageNumber);
    


  return (
    <section className='blog'>
      <header>
        <h2 className="h2 article-title">
          Blogs
        </h2>
      </header>

        <div className="blog-posts">
          <ul className="blog-posts-list">
            {currentPost.map((post,index)=>(
              <BlogPost 
                key={index}
                title={post.title}
                description = {post.description}
                date={post.date}
                image={post.image}
                category = {post.category}
              />
            ))}
          </ul>
        </div>

        {/* Pagination */}
        <nav>
          <ul className="pagination">
            <li className= {`page-item ${currentPage===1?'disabled':''}`}>
              <button onClick={()=> paginate(currentPage-1)} className="page-link">Previous</button>
              </li>
              {
                Array.from({length:Math.ceil(blogs.length/postPerPage)},
              (_,index)=>(
                <li key={index} className= {`page-item ${currentPage===index+1?'active':''}`}>
                  <button onClick={()=> paginate(index+1)}
                  className='page-link' >{index+1}</button>
                </li>
              ))
              }
              <li className= {`page-item ${currentPage===Math.ceil(blogs.length/postPerPage)?'disabled':''}`}>
              <button  className="page-link" 
              onClick={()=> paginate(currentPage+1)} >Next</button>
              </li>
          </ul>
        </nav>
    </section>
  )
}

export default Blogs