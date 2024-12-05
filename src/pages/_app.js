// pages/_app.js
import "../styles/globals.css"; // Ensure global styles are imported
import Layout from "@/components/Layout/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
