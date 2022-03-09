import { useState } from "react";
import { useHistory } from "react-router-dom";



const Create = () => {

    const [title , setTitle ] = useState('');
    const [img , setImg ] = useState('');
    const [body , setBody ] = useState('');
    const [author , setAuthor ] = useState('');
    const [ isLoading , setIsloading] = useState(false)
    const History = useHistory();



    const handleAdd = ( e ) => {
        e.preventDefault();
        const blog = {
            title,
            img,
            body,
            author
        }

        setIsloading(true)

        
            
        fetch('http://localhost:8000/blogs' , {
            method : 'POST',
            headers: {'Content-Type' : "application/json"},
            body : JSON.stringify(blog)
        }).then(() => {

            setIsloading(false)
            History.push('/')
        })

        
    }



    return ( 
        <div className="newblog">
        <h2>Add a new Blog</h2>
        <form onSubmit={handleAdd}>
            <label>Blog Title :</label>
            <input type="text"  required value={title} onChange = { (e) => setTitle(e.target.value)}/>

            <label>Blog Body :</label>
            <textarea type="text" value={body}  required onChange = { (e) => setBody(e.target.value)}/>

            <label>Blog Image :</label>
            <input type="link"  value={img}  required onChange = { (e) => setImg(e.target.value)}/>

            <label>Blog's Author :</label>
            <input type="text" value={author}  required onChange = { (e) => setAuthor(e.target.value)}/>
            
            {!isLoading && <button className="addblog">Add Blog</button>}

            {isLoading && <button className="addblog">Add Blog...</button>}
            
        
 
        </form>
        
        </div>
     );
}
 
export default Create;