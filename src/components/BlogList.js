import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
    
    
    return ( 
        
        <div className="blog--list">
            <h2 className="top-title">{title}</h2>
                <div className="blog-container" >
                        {blogs.map((blog) => (
             
                    <div className="blog-preview" key={blog.id}>
                        <div className="blog-content">
                           <Link to={`/blogs/${blog.id}`}>
                            <img src={blog.img} className ="img-post" alt="" />
                                 <div className="blog-flex">
                                    <h2>{blog.title}</h2>
                                    <p>Written by {blog.author}</p>
                                </div>
                           </Link>
                        </div>
                    </div>
            ))}
             </div>
        </div>
     );
}
 
export default BlogList;