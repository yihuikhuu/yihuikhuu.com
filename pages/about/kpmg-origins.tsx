import { ArrowLeftIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Hero from "components/Hero";
import Timeline, { TimelineEntry } from "components/Timeline";
import { classNames } from "helpers/classnames";
import { NextPage } from "next";
import Head from "next/head";
import { m } from "framer-motion";
import { siCsharp, siDotnet, siReact, siTypescript } from "simple-icons";
import Title from "components/Title";
import Subtitle from "components/Subtitle";
import Link from "next/link";

const timeline: TimelineEntry[] = [
  {
    header: "Building Trustworthy Indicator",
    shortDescription:
      "Developing and launching the Building Trustworthy Indicator",
    content: [
      "Rapidly integrated into the existing team",
      "Made significant contributions to the project, resulting in the successful launch of the project",
    ],
    icon: GlobeAltIcon,
    iconBackground: "bg-gray-400",
    iconList: [siCsharp, siDotnet, siTypescript, siReact],
  },
  {
    header: "Asset Impact",
    shortDescription: "Developing and launching the Asset Impact solution",
    content: [
      "Responsible for a large portion of the development of the original Asset Impact solution",
      "Critical to the successful launch of the project",
    ],
    icon: GlobeAltIcon,
    iconBackground: "bg-gray-400",
    iconList: [siCsharp, siDotnet, siTypescript, siReact],
  },
  {
    header: "Integrated Waste Tracking Solution",
    shortDescription:
      "Leading a team to develop and launch the Integrated Waste Tracking Solution",
    content: [
      "Team lead and technical mentor for the Integrated Waste Tracking Solution project",
      "Successfully led a team in the development of the IWTS project, and was responsible for its successful launch",
    ],
    icon: GlobeAltIcon,
    iconBackground: "bg-gray-400",
    iconList: [siCsharp, siDotnet, siTypescript, siReact],
  },
];

const KpmgOrigins: NextPage = () => (
  <>
    <Head>
      <title>KPMG Origins - Yihui Khuu</title>
      <meta
        name="description"
        content="Yihui Khuu at KPMG Origins 2022 - Now"
      />
    </Head>
    <Hero>
      <Title size="large">
        <span className="block">KPMG Origins</span>

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
          Fullstack Web + Lead.
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
          2022 - Now
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
              <div>KPMG Origins, a venture backed by KPMG</div>
              <div>
                Responsible for the development of several core parts of the
                Origins platform.
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

export default KpmgOrigins;
