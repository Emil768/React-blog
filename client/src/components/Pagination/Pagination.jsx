import React, { useState } from "react";

import "./Pagination.scss"

function Pagination({postsPerPage,totalPosts,paginate}) {
  const [activePag,setActivePag] = useState(0)
  const pageNumbers = [];

  const handleActivePag = (number,index) =>{
    paginate(number);
    setActivePag(index)
  }

  for(let i = 1;i<=Math.ceil(totalPosts/postsPerPage);i++){
    pageNumbers.push(i)
  }
  return (
    <div className="pagination">
      <ul className="pagination-list"> 
        {
          pageNumbers.map((number,index)=>(
            <li className={activePag === index?"pagination-list__item active":"pagination-list__item "} key={index} >
            <a href="/#" onClick={()=>handleActivePag(number,index)}>{number}</a>
          </li>
          ))
        }
      </ul>
    </div>
  );
}



export default Pagination;
