import { useEffect, useState } from "react";
import "./AsyncDashboard.css";

export default function AsyncDashboard() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const [status, setStatus] = useState({
    users: "Loading...",
    posts: "Loading...",
    comments: "Loading...",
  });

  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    setStatus({
      users: "Loading...",
      posts: "Loading...",
      comments: "Loading...",
    });

    const start = Date.now();

    const urls = [
      "https://jsonplaceholder.typicode.com/users",
      "https://jsonplaceholder.typicode.com/posts?_limit=10",
      "https://jsonplaceholder.typicode.com/comments?_limit=20",
    ];

    try {
      const [usersRes, postsRes, commentsRes] = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
      );

      setUsers(usersRes);
      setPosts(postsRes);
      setComments(commentsRes);

      setStatus({
        users: "Loaded",
        posts: "Loaded",
        comments: "Loaded",
      });
    } catch (error) {
      console.warn("Promise.all failed, switching to allSettled", error);

      const results = await Promise.allSettled(
        urls.map((url) => fetch(url).then((res) => res.json()))
      );

      results.forEach((result, index) => {
        const key = ["users", "posts", "comments"][index];

        if (result.status === "fulfilled") {
          if (key === "users") setUsers(result.value);
          if (key === "posts") setPosts(result.value);
          if (key === "comments") setComments(result.value);

          setStatus((prev) => ({ ...prev, [key]: "Loaded" }));
        } else {
          setStatus((prev) => ({ ...prev, [key]: "Error" }));
        }
      });
    } finally {
      const end = Date.now();
      setTime(end - start);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const avgCommentsPerPost =
    posts.length > 0
      ? (comments.reduce((acc, c) => acc + 1, 0) / posts.length).toFixed(2)
      : 0;

  return (
    <div className="dashboard">
      <h2>Async Data Dashboard</h2>

      <button onClick={fetchData}>Reload</button>

      {loading && <p>Loading data...</p>}

      <p><strong>Load time:</strong> {time} ms</p>

      <div className="status">
        <p>Users: {status.users}</p>
        <p>Posts: {status.posts}</p>
        <p>Comments: {status.comments}</p>
      </div>

      <div className="stats">
        <h3>Statistics</h3>
        <p>Users count: {users.length}</p>
        <p>Avg comments per post: {avgCommentsPerPost}</p>
      </div>

      <div className="data">
        <div>
          <h3>Users</h3>
          <ul>
            {users.map((u) => (
              <li key={u.id}>{u.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Posts</h3>
          <ul>
            {posts.map((p) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Comments</h3>
          <ul>
            {comments.map((c) => (
              <li key={c.id}>{c.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}