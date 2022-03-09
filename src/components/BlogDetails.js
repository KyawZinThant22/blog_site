import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const {data , error , isLoading} = UseFetch('http://localhost:8000/blogs/' + id)
    const History = useHistory();


    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id , {
            method : 'DELETE'
        }).then(() => {
            History.push('/')
        })
    }

    return ( 
        <div className="blog-details">
          {isLoading && <div>Loading</div>}
          {error && <div> { error} </div>}
          {data && (
              <div className="details-container">
            

         
              <h2 className="blog---title">{data.title}</h2>

                  <img className="blog---img" src={data.img}/>
                  <div className="blog---body">{data.body}</div>
                  <p className="blog---author">Written by {data.author}</p>
                  <button className="btn-del"  onClick={handleDelete}>Delete</button>
              
              </div>
          )}
        </div>
     );
}
 
export default BlogDetails;