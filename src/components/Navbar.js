import React,{useState}  from "react";


import { FeedPage } from './FeedPage'
const Navbar = () => {
  const [c,setC]=useState(false);
  const post1=(c)=>{
    setC(c=true)
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div>

    <div class="topnav" id="myTopnav">
  
  <a href="#/" ><img src='./img/logo-with-text.png' alt="logo" id='logo' /></a>
  <div>
  <a href="#passenger" class="active" onClick={post1}>Post1</a>
  <a href="#post2" class="active">Post2</a>
  <a href="#check" class="active btn"><button >End Class</button></a>
  
  </div>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i class="fa fa-bars"></i>
  </a>
</div>

{c?<FeedPage/>:null}
    </div>
  );
};

export default Navbar;
