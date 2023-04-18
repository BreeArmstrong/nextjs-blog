import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Bree, A Web Developer!</p>
        <p>This is a sample site to learn how to make a react page like this! <a href="https://nextjs.org/learn">Tutorial Here</a>.</p>
      </section>
    </Layout>
  );
}
