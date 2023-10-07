import "../App.css"
import Post from "./Post";
import boy from "./Pics/boy.png";
import nurse from "./Pics/nurse.png";
import man from "./Pics/man.png";
import singer from "./Pics/singer.png";

function PostList() {
  return (
    <div className="PostList">
        <Post avt={boy}  src="https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg" />
        <Post avt={nurse}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsiPSqo0kUGCW_VVRz4kkaLTLfQMFBpxrVg&usqp=CAU" />
        <Post avt={man}  src="https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind_x630.jpg?v=1624444348" />
        <Post avt={singer}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiewe4bfdhD3oeIHg24N3EIY5vlHheP_BcyQ&usqp=CAU" />
        <Post avt={nurse}  src="https://www.science.org/do/10.1126/science.adk5076/full/_20230824_on_cats_prefer_tuna-1693424623970.jpg" />
    </div>
  );
}

export default PostList;
