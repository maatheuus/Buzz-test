import { timeLineData } from "../utils";
import CardTimeline from "./CardTimeline";

function TimelineContainer({ children }) {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="bg-black relative h-screen"
    >
      {timeLineData.map((items) => (
        <CardTimeline key={items.id} data={items} />
      ))}

      {children}
    </section>
  );
}

export default TimelineContainer;
