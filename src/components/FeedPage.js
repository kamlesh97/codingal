import React, {useState,useEffect} from 'react'

export const FeedPage = () => {
    const [posts,setPosts]=useState([]);
    const [page, setPage] = useState(1);
    useEffect(()=>{

      fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .then(res=>res.json())
      .then(json=>setPosts([...posts,...json.data]))
   
    },[page]);


    console.log(posts[0]);
        
    const scrollToEnd=()=>{
      setPage(page+1)
    }

    window.onscroll=function(){
      if(window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){
        scrollToEnd()
      }
    }

    return (
        <div >
           {  
              posts.length>0 && posts.map((post,i)=>(
                <div className='main-lists' key={i}>
                <div className='list-title row'><div>Trip-Name:{post.name}</div><div><h6>{post.trips}</h6></div></div>
                <div className='list-body'>
                  <div className='list-img'><img src={post['airline'].logo}/></div>
                <div><h3>{post['airline'].slogan}</h3></div>
                <div className='row'>
                  <div><h4>{post['airline'].name}</h4></div><div><h6>{post['airline'].country}</h6></div>
                  </div>
                </div>
                </div>
              ))   
               
           }





        </div>
    )
}


