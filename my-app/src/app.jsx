import { useState } from "react";

function App() {
  // State to hold all blog posts
  const [posts, setPosts] = useState([]);

  // State for form inputs
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Add a new blog post
  const addPost = () => {
    if (title.trim() === "" || content.trim() === "") return;
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  // Delete a blog post
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // Inline styles
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#f4f4f9",
      minHeight: "100vh",
    },
    heading: {
      color: "#333",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      margin: "20px auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    textarea: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
      minHeight: "80px",
    },
    button: {
      backgroundColor: "#007BFF",
      color: "#fff",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    buttonDelete: {
      backgroundColor: "#dc3545",
      color: "#fff",
      padding: "8px 12px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      marginTop: "10px",
    },
    posts: {
      maxWidth: "600px",
      margin: "20px auto",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    post: {
      backgroundColor: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      textAlign: "left",
    },
    postTitle: {
      margin: "0 0 10px 0",
      color: "#007BFF",
    },
    postContent: {
      margin: "0 0 10px 0",
      color: "#444",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 My Blog App</h1>

      {/* Blog Form */}
      <div style={styles.card}>
        <input
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Enter blog content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={styles.textarea}
        ></textarea>
        <button onClick={addPost} style={styles.button}>
          Add Blog
        </button>
      </div>

      {/* Blog Posts */}
      <div style={styles.posts}>
        {posts.length === 0 ? (
          <p>No blog posts yet. Start writing!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} style={styles.post}>
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p style={styles.postContent}>{post.content}</p>
              <button
                onClick={() => deletePost(post.id)}
                style={styles.buttonDelete}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
