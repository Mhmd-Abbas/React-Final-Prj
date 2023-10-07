import * as React from 'react';
import p1 from "./explorePics/360_F_577514801_dQYirVqOAgFDFZMyI9Ea7tinfQOITO1R.jpg"
import p2 from "./explorePics/718479_9115045a51c2428e9eed06f0b182f0f0~mv2.jpg"
import p3 from "./explorePics/7c67d210a731c81342f00ba1e3186a03.jpg"
import p4 from "./explorePics/FpLmwCoXoAY2ECK.jpg"
import p5 from "./explorePics/HD-wallpaper-cats-cat-pet-sunglasses.jpg"
import p6 from "./explorePics/b5f055967b05a328aa985d54fa16094f.jpg"
import p7 from "./explorePics/desktop-wallpaper-white-baby-fennec-fox-white-fox.jpg"
import p8 from "./explorePics/download (1).jpeg"
import p9 from "./explorePics/download.jpeg"
import p10 from "./explorePics/fox-6324515_960_720.jpg"
import p11 from "./explorePics/images (1).jpeg"
import p12 from "./explorePics/images.jpeg"
import p13 from "./explorePics/lovely-fluffy-ginger-cat-wearing-fashion-glasses-and-straw-hat-yellow-background-400-262900368.jpg"
import p14 from "./explorePics/tumblr_96b8c83af3391b5f9622e050fc807fd6_bcdcf1db_500.png"

export default function ExplorePage() {

  const ExPics = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14]

  const explore = ExPics.map((p) => {
    return <img src={p} style={{ height:"160px" , width:"160px", objectFit:"cover" }} />
  })  

  return (
    <div style={{ marginLeft:"60%", width:"500px",  display:"flex", flexWrap:"wrap", alignContent:"flex-start", gap:"5px"}} >
      {explore}
    </div>
  );
}
