import { useContext, useState,useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";


const PostList=()=>{

  const {postList, addInitialPosts} =useContext(PostListData);
  // const [dataFetched, setDataFetched]=useState(false); method 1
  const [fetching, setFetching]=useState(false);



  useEffect(()=>{
    setFetching(true);

    const controller=new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
    .then(data=>{
      addInitialPosts(data.posts);
    setFetching(false);

    });

    return ()=>{
  
      controller.abort();
    }
  },[]);

// method 1
  // if (!dataFetched) {
  //   fetch('https://dummyjson.com/posts')
  //   .then(res => res.json())
  //   .then(data=>{
  //     addInitialPosts(data.posts);
  //   });
    
    // setDataFetched(true); 
  // } 



return <>

{fetching && <LoadingSpinner></LoadingSpinner>}

{!fetching && postList.length===0 && <WelcomeMessage />}

{!fetching && postList.map((post)=>(

<Post key={post.id} post={post}/>
  ))}



</>
}

export default PostList;