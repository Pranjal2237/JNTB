
import { client } from "./client.js";
import { aboutBanner,arrow } from "../../assets/index.js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();
  const handlePage = (e) => {
    const newPage = Number(e.target.innerText);
    setPage(newPage);
  };

  useEffect(() => {
    async function getBlogs() {
      const response = await client.getEntries({
        content_type: "blogs",
        // limit: 1,
        // skip: 1*(page-1),
      });
      setBlogs([...response.items]);
    }
    getBlogs();
  }, [page]);
  return (
    <div>
      <div className="about-image">
        <img src={aboutBanner} alt="about" />
      </div>
      <div className="page-padding page-heading">
        <p>Blogs</p>
      </div>
      <div className="page-padding blogs-container">
        <div className="blogs-all-container">
          {blogs?.map(
            ({
              fields: { author, slug, title, excerpt, coverImage },
              sys: { createdAt },
            }) => {
              const date = new Date(createdAt);
              const d = date.getDate();
              const m = date.getMonth();
              const y = date.getFullYear();
              return (
                <div className="blog-card">
                  <div>
                    <img
                      src={`http:${coverImage?.fields?.file?.url}`}
                    />
                  </div>
                  <div className="blog-content">
                    <div>
                      <h3>{title}</h3>
                      <p>{excerpt}</p>
                    </div>
                    <div style={{ position: "relative",marginTop:'10px',height:'50px' }}>
                      <Link to={`/blogs/${slug}`} className="cardLink">
                        <span style={{ fontSize: "16px" }}>READ MORE</span>
                      </Link>
                    </div>
                  </div>
                  <div className="blogs-author">
                    <div>
                      <p>{author.fields.name}</p>
                    </div>
                    <div>
                      <p>{`${d}/${m + 1}/${y}`}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="trending-posts-container">
          <h3>Trending Posts</h3>
          {blogs?.map(({ fields: { author, title, slug } }) => (
            <div>
              <Link to={`/blogs/${slug}`}>
                <h4>{title}</h4>
              </Link>
              <p>{`By ${author.fields.name}`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="page-padding padding-block pagination-container">
        <div
          className="pagination-box"
          onClick={() => {
            setPage(page - 1);
          }}
          style={{ display: page == 1 ? "none" : "flex" }}
        >
          <img src={arrow} />
        </div>
        <div
          className="pagination-box"
          style={{
            fontWeight: page == 1 && "700",
            borderBottom: page == 1 && "3px solid blue",
          }}
          onClick={(e) => {
            handlePage(e);
          }}
        >
          {page == 1 ? page : page == maxPage ? page - 2 : page - 1}
        </div>
        <div
          className="pagination-box"
          style={{
            fontWeight: page > 1 && page < maxPage && "700",
            borderBottom: page > 1 && page < maxPage && "3px solid blue",
          }}
          onClick={(e) => {
            handlePage(e);
          }}
        >
          {page == 1 ? page + 1 : page == maxPage ? page - 1 : page}
        </div>
        <div
          className="pagination-box"
          style={{
            fontWeight: page == maxPage && "700",
            borderBottom: page == maxPage && "3px solid blue",
          }}
          onClick={(e) => {
            handlePage(e);
          }}
        >
          {page == 1 ? page + 2 : page == maxPage ? page : page + 1}
        </div>
        <div
          className="pagination-box"
          onClick={() => {
            setPage(page + 1);
          }}
          style={{ display: page == maxPage ? "none" : "flex" }}
        >
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

