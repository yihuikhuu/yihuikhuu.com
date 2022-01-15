import { classNames } from "helpers/classnames";
import { SimpleIcon } from "simple-icons";
import Icon from "components/Icon";

export type TimelineEntry = {
  header: string;
  shortDescription: string;
  content: string[];
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  iconBackground: string;
  iconList: (string | SimpleIcon)[];
};

type TimelineProps = {
  className?: string;
  timeline: TimelineEntry[];
};

const Timeline: React.FC<TimelineProps> = ({ className, timeline }) => (
  <ul role="list" className={className}>
    {timeline.map((event, eventIdx) => (
      <li key={eventIdx}>
        <div className="relative pb-8">
          {eventIdx !== timeline.length - 1 ? (
            <span
              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            />
          ) : null}
          <div className="relative flex space-x-3 items-center">
            <div>
              <span
                className={classNames(
                  event.iconBackground,
                  "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                )}
              >
                <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="min-w-0 flex-1 pl-6 py-6 flex justify-between space-x-4">
              <div>
                <p className="text-lg text-gray-700">{event.header}</p>
                <p className="text-gray-500">{event.shortDescription}</p>
                <ul className="ml-6 mt-6 list-disc text-gray-500 font-light">
                  {event.content.map((content, index) => (
                    <li key={`${eventIdx}-content-${index}`}>{content}</li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-4">
                  {event.iconList?.map((icon, index) =>
                    typeof icon === "string" || icon instanceof String ? (
                      <span key={`${eventIdx}-${index}`}>{icon}</span>
                    ) : (
                      <Icon
                        key={`${eventIdx}-${index}`}
                        icon={icon}
                        size={24}
                      />
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
