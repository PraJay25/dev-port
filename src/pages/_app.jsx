import "../styles/globals.css";
import Layout from "@/components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
