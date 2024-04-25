import { Form, redirect } from "react-router-dom";

const CreatePost=()=>{

  return (
  <Form method="POST" className="create-post">
    <div className="mb-3">
    <label htmlFor="userId" className="form-label">User Id:</label>
    <input type="text" className="form-control" id="userId" name="userId" placeholder="Enter your userId here"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post title:</label>
    <input type="text" className="form-control" id="title" name="title" placeholder="How are you feeling today....."/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content:</label>
    <textarea type="text" className="form-control" id="body" name="body" rows="4" placeholder="Tell us more about it."/>
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of reactions:</label>
    <input type="text" className="form-control" id="reactions" name="reactions" placeholder="How many people reacted to this post"/>
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter Hashtags:</label>
    <input type="text" className="form-control" id="tags" name="tags" placeholder="Please enter hashtags using space" />
  </div>

 
  <button type="submit" className="btn btn-primary">Post</button>
</Form>
  );
}

export async function createPostAction(data) {
  const formData= await data.request.formData();
  const postData=Object.fromEntries(formData);
  postData.tags=postData.tags.split(" ");
  console.log(postData);
  

  fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })
    .then(res => res.json())
    .then(()=>{
    });

    return redirect("/");
   
};

export default CreatePost;