import { Popover } from "@headlessui/react";
import AccentColourContext from "contexts/accent-colour-context";
import { Transition } from "@headlessui/react";
import { classNames } from "helpers/classnames";
import { Fragment } from "react";

type AccentColourSelectorProps = {
  className?: string;
};

const AccentColourSelector: React.FC<AccentColourSelectorProps> = ({
  className,
}) => (
  <AccentColourContext.Consumer>
    {({ colour, setColour: setTheme }) => (
      <Popover className={className + " relative h-6 w-6"}>
        <Popover.Button
          className={classNames(
            "w-6 h-6 rounded-full ring-2 ring-offset-2 dark:ring-offset-gray-900",
            `transition-colors bg-${colour}-500 ring-${colour}-500`
          )}
          aria-label="accent-colour-selector"
        ></Popover.Button>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-2"
        >
          <Popover.Panel className="absolute right-[-4.75rem] z-10 h-12 w-44 flex justify-center items-center bg-white shadow-lg rounded-md border border-gray-100 transition transform origin-center">
            <div className="grid grid-cols-5 gap-2">
              <span
                className="transition w-6 h-6 rounded-full cursor-pointer bg-violet-500 ring-2 ring-transparent ring-offset-2 hover:ring-violet-500"
                onClick={() => setTheme("violet")}
              ></span>
              <span
                className="transition w-6 h-6 rounded-full cursor-pointer bg-teal-500 ring-2 ring-transparent ring-offset-2 hover:ring-teal-500"
                onClick={() => setTheme("teal")}
              ></span>
              <span
                className="transition w-6 h-6 rounded-full cursor-pointer bg-sky-500 ring-2 ring-transparent ring-offset-2 hover:ring-sky-500"
                onClick={() => setTheme("sky")}
              ></span>
              <span
                className="transition w-6 h-6 rounded-full cursor-pointer bg-lime-500 ring-2 ring-transparent ring-offset-2 hover:ring-lime-500"
                onClick={() => setTheme("lime")}
              ></span>
              <span
                className="transition w-6 h-6 rounded-full cursor-pointer bg-pink-500 ring-2 ring-transparent ring-offset-2 hover:ring-pink-500"
                onClick={() => setTheme("pink")}
              ></span>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    )}
  </AccentColourContext.Consumer>
);

export default AccentColourSelector;
