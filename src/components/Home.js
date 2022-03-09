import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {

   
const {data , isLoading, error} = UseFetch('http://localhost:8000/blogs')

 

    return ( 
        <div className="home">
            {isLoading && <div> Loading... </div>}
            {error && <div>{ error} </div>}
           { data && <BlogList blogs={data} title = {'All Blogs!'} />}
          
        </div>
     )
}
 
export default Home;