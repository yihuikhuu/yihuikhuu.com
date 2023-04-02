import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { m } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hero from "components/Hero";
import Subtitle from "components/Subtitle";
import Title from "components/Title";
import { classNames } from "helpers/classnames";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home - Yihui Khuu</title>
      <meta name="description" content="Hello. My name is Yihui Khuu" />
    </Head>
    <Hero className="text-left">
      <Title size="large">
        <span className="block">Hello.</span>
        <m.span
          className={classNames("block", `transition-colors text-accent-500`)}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                delay: 0.75,
              },
            },
          }}
        >
          My name is Yihui Khuu.
        </m.span>
      </Title>
      <Subtitle className="mt-3 max-w-md">
        <m.span
          initial="hidden"
          animate="show"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                delay: 1.5,
              },
            },
          }}
        >
          A professional software developer.
        </m.span>
      </Subtitle>
    </Hero>

    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[27.6rem] sm:min-h-[22.4rem] md:min-h-[20.6rem]">
        <div className="relative overflow-hidden">
          <m.div
            className="m-1"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  delay: 1.5,
                },
              },
            }}
          >
            <Link
              href="/about"
              className={classNames(
                "mt-8 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
                `transition-colors bg-accent-600 hover:bg-accent-700 focus:ring-accent-500`
              )}
            >
              More about me
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </m.div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
