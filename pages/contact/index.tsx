import { NextPage } from "next";
import Head from "next/head";
import Hero from "components/Hero";
import Title from "components/Title";
import { useContext } from "react";
import ColourThemeContext from "contexts/colour-theme-context";
import { classNames } from "helpers/classnames";

const Contact: NextPage = () => {
  const { theme } = useContext(ColourThemeContext);

  return (
    <>
      <Head>
        <title>Contact - Yihui Khuu</title>
        <meta name="description" content="Contact Yihui Khuu" />
      </Head>
      <Hero>
        <div className="relative">
          <h2 className="sr-only">Get in touch</h2>

          <Title size="large">
            <span className="block">Get in touch.</span>
          </Title>

          <div className="py-10 lg:col-span-2 xl:py-12">
            <form
              name="contact"
              action="/contact/success"
              method="POST"
              className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label
                  htmlFor="first-name"
                  className="transition-colors block text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className={classNames(
                      "transition-colors py-3 px-4 block w-full text-gray-900 border-gray-300 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-white",
                      `focus:ring-${theme}-500 focus:border-${theme}-500`
                    )}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="transition-colors block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className={classNames(
                      "transition-colors py-3 px-4 block w-full text-gray-900 border-gray-300 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-white",
                      `focus:ring-${theme}-500 focus:border-${theme}-500`
                    )}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="transition-colors block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={classNames(
                      "transition-colors py-3 px-4 block w-full text-gray-900 border-gray-300 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-white",
                      `focus:ring-${theme}-500 focus:border-${theme}-500`
                    )}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="transition-colors block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone
                  </label>
                  <span
                    id="phone-optional"
                    className="transition-colors text-sm text-gray-500 dark:text-gray-400"
                  >
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className={classNames(
                      "transition-colors py-3 px-4 block w-full text-gray-900 border-gray-300 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-white",
                      `focus:ring-${theme}-500 focus:border-${theme}-500`
                    )}
                    aria-describedby="phone-optional"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="transition-colors block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className={classNames(
                      "transition-colors py-3 px-4 block w-full text-gray-900 border-gray-300 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-white",
                      `focus:ring-${theme}-500 focus:border-${theme}-500`
                    )}
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
                    className="transition-colors block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Message
                  </label>
                  {/* <span id="message-max" className="text-sm text-gray-500">
                    Max. 500 characters
                  </span> */}
                </div>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={classNames(
                      "transition-colors py-3 px-4 block w-full text-gray-900 border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-white",
                      `focus:ring-${theme}-500 focus:border-${theme}-500`
                    )}
                    aria-describedby="message-max"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="submit"
                  className={classNames(
                    "mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto",
                    `transition-colours bg-${theme}-600 hover:bg-${theme}-700 focus:ring-${theme}-500`
                  )}
                >
                  Fire away
                </button>
              </div>
            </form>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default Contact;
