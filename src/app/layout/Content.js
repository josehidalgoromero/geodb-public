import React from "react";
import { DynamicContent } from "./content/DynamicContent";
import { BlogList } from "./content/BlogList";

export const Content = () => {
  return (
    <div>
      <main className="main-section">
        <section className="container">
          <DynamicContent />
        </section>
        <section className="container">
          <h3>Latest Blog posts</h3>
          <BlogList />
        </section>
      </main>
    </div>
  );
};
