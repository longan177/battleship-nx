import type { NextPage } from "next";
import BoardLayout from "../component/BoardLayout/BoardLayout";
import Layout from "../component/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <BoardLayout />
    </Layout>
  );
};

export default Home;
