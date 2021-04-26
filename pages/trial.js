import React from "react";

const trial = ({ posts }) => {
  // fetch data;
  return (
    <div>
      {posts.map((post) => {
        <h1>{post.latitude}</h1>;
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/mercha");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate:1,
  };
};



export const getServerSideProps = async () => {
  const res = await fetch("http//localhost:5000/mercha");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default trial;
