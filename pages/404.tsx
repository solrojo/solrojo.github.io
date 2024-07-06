import Head from "next/head";
import { ActionLink } from "@/components/Action";

export default () => (
  <>
    <Head>
      <title>404 Page not found</title>
    </Head>

    <section>
      <h1 className="mb-2vw">Page not found</h1>
      <ActionLink href="/" withBg>
        Go to main page
      </ActionLink>
    </section>
  </>
);
