import { classNames } from "helpers/classnames";
import { SimpleIcon } from "simple-icons";
import Icon from "components/Icon";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export type TimelineEntry = {
  header: string;
  shortDescription: string;
  content: string[];
  icon: typeof GlobeAltIcon;
  iconBackground: string;
  iconList: (string | SimpleIcon)[];
};

type TimelineProps = {
  className?: string;
  timeline: TimelineEntry[];
};

const Timeline = ({ className, timeline }: TimelineProps) => (
  <ul role="list" className={className}>
    {timeline.map((event, eventIdx) => (
      <li key={eventIdx}>
        <div className="relative pb-8">
          {eventIdx !== timeline.length ? (
            <span
              className="transition-colors absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-600"
              aria-hidden="true"
            />
          ) : null}
          <div className="relative flex space-x-3 items-center">
            <div>
              <span
                className={classNames(
                  event.iconBackground,
                  "transition-colors h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-600"
                )}
              >
                <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="min-w-0 flex-1 pl-3 py-6 flex justify-between space-x-4">
              <div>
                <p className="transition-colors text-lg text-gray-700 dark:text-white">
                  {event.header}
                </p>
                <p className="transition-colors text-gray-500 dark:text-gray-400">
                  {event.shortDescription}
                </p>
                <ul className="transition-colors ml-6 mt-6 list-disc text-gray-500 font-light dark:text-gray-400">
                  {event.content.map((content, index) => (
                    <li key={`${eventIdx}-content-${index}`}>{content}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-6">
                  {event.iconList?.map((icon, index) =>
                    typeof icon === "string" || icon instanceof String ? (
                      <span
                        key={`${eventIdx}-${index}`}
                        className="transition-colors h-10 flex items-center dark:text-white whitespace-nowrap"
                      >
                        {icon}
                      </span>
                    ) : (
                      <div
                        key={`${eventIdx}-${index}`}
                        className="transition-colors rounded-full flex items-center justify-center h-10 w-10 p-1 bg-transparent dark:bg-white"
                      >
                        <Icon icon={icon} size={24} />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default Timeline;
