import "./Home.scss";
import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard/PostCard";
import { Link } from "react-router-dom";

function Home() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allposts", {
      method: "get",
      headers: {
        Authorization: `dilshod ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllPosts(data.posts.reverse()));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="posts-row">
          <div className="allposts">
            {allPosts.length > 0 ? (
              allPosts.map((post) => <PostCard key={post._id} {...post} />)
            ) : (
              <>
                <h1>No posts yet</h1>
                <Link className="btn" to="/createpost">
                  Create new post
                </Link>
              </>
            )}
          </div>
          <div className="myPosts">
            <div className="own-card">
              <h1>My Posts</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
