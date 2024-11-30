import Head from "next/head";
import HomeLanding from "@/components/Home/HomeLanding";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeLanding />
      </main>
    </div>
  );
};

export default Home;
