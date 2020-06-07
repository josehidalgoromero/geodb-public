import React, { Component } from "react";
import { BlogPost } from "../components/BlogPost";

export class BlogList extends Component {
  state = { posts: [] };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@geodatablock`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ posts: data.items });
      });
  };

  render() {
    return (
      <div className="BlogList">
        {this.state.posts.map((post) => {
          if (post.thumbnail.startsWith("https://cdn-images")) {
            return (
              <div key={post.guid} className="BlogList-item">
                <BlogPost
                  title={post.title}
                  year={post.pubDate}
                  poster={post.thumbnail}
                  link={post.link}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
