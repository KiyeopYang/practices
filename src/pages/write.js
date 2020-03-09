import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import Link from "next/link";
import List from "components/List";
import PostWriter from "containers/PostWriter";
import { useRouter } from "next/router";

export default () => {
  const [items, setItems] = useState([]);
  const Router = useRouter();
  useEffect(() => {
    console.log(Router.query);
  }, [Router.query]);
  return (
    <Layout>
      <h4>페이지 2</h4>
      <Link href="/">
        <a>페이지 1</a>
      </Link>
      <PostWriter onAdd={item => setItems([...items, item])} />
      <List items={items} />
      <div>
        <button
          onClick={() =>
            Router.push("/write?selected=A", "/write?selected=A", true)
          }
        >
          A
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            Router.push("/write?selected=B", "/write?selected=B", true)
          }
        >
          B
        </button>
      </div>
    </Layout>
  );
};
