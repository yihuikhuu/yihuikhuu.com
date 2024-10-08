import { ArrowLeftIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Hero from "components/Hero";
import Subtitle from "components/Subtitle";
import Timeline, { TimelineEntry } from "components/Timeline";
import Title from "components/Title";
import { m } from "framer-motion";
import { classNames } from "helpers/classnames";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { siCsharp, siDotnet, siTypescript, siVuedotjs } from "simple-icons";

const timeline: TimelineEntry[] = [
  {
    header: "Web - ASP.NET and Vue.js",
    shortDescription: "AgTech Management System",
    content: [
      "Designed and implemented architecture of software application.",
      "Liase with client to determine and refine requirements.",
      "Implement app design according to UI/UX design documentation, and make adjustments according to client feedback.",
    ],
    icon: GlobeAltIcon,
    iconBackground: "bg-gray-400",
    iconList: [siCsharp, siTypescript, siDotnet, siVuedotjs],
  },
];

const LumientSecond: NextPage = () => (
  <>
    <Head>
      <title>Lumient - Yihui Khuu</title>
      <meta name="description" content="Yihui Khuu at Lumient 2021 - 2022" />
    </Head>
    <Hero>
      <Title size="large">
        <span className="block">Lumient.</span>

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
          Fullstack Web + DevOps.
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
          2021 - Now
        </m.span>
      </Subtitle>
    </Hero>
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[32.4rem] sm:min-h-[27.9rem] md:min-h-[26.9rem]">
        <div className="relative overflow-hidden">
          <m.div
            className="mx-1 mt-16"
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
            <div className="transition-colors dark:text-white">
              <div>
                Lumient provides software development services for their
                clients.
              </div>
              <div>
                I was responsible for the development of a comprehensive
                management system for the AgTech industry.
              </div>
            </div>

            <Timeline className="mt-16 -mb-8 pb-8 px-3" timeline={timeline} />

            <Link
              href="/about"
              className={classNames(
                "my-8 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
                `transition-colors bg-accent-600 hover:bg-accent-700 focus:ring-accent-500`
              )}
            >
              <ArrowLeftIcon className="mr-2 w-5 h-5" />
              Go back
            </Link>
          </m.div>
        </div>
      </div>
    </div>
  </>
);

export default LumientSecond;
