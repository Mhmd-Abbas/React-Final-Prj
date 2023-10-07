import React from 'react'
import p1 from "./catpics/IMG_8563.JPG"
import p2 from "./catpics/IMG_8564.JPG"
import p3 from "./catpics/IMG_8570.JPG"
import p4 from "./catpics/IMG_8568.JPG"

export const PfPosts = () => {

    const Pics = [p1,p2,p3,p4];

    const posts = Pics.map((p) => {
      return <img src={p} style={{ height:"150px" , width:"150px", objectFit:"cover" }} />
    }) 

  return (
    <div style={{width:"460px",  display:"flex", flexWrap:"wrap", alignContent:"flex-start", gap:"5px"}} >
        {posts}
    </div>
  )
}
