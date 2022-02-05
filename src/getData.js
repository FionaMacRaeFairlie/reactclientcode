import React, { useState, useEffect } from 'react'

export default function Posts() {
  const [post, getPost] = useState([])
  const API = 'http://localhost:3001/json';
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getPost(res)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <>
      <h2>React Example: fetching json data from endpoint and formatting on the client</h2>
      <div>
        {post.map((item, i) => {
          return (
            <div key={i} className="card">
                <div className="card-body">
                    <h4 className ="card-title">{item.subject}</h4>
                        <p className="card-text">
                            {item.contents}
                        </p>
                    <div className="card-footer">
                        <p>Written by {item.author}</p>
                    </div>
                    </div>
            </div>
          )  
        })}
      </div>
    
    </>
  )
}