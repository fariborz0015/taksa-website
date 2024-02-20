import EventCardItem from "@/components/event-card/EventCardItem";
import Pagination from "@/components/pagination/Pagination";
import EventsLayout from "@/containers/events/EventsLayout";
import React from "react";

const EventList = ({ data, pagination, popular }) => {
  return (
    <EventsLayout popular={popular}>
      <div className="w-full grid grid-cols-2 gap-4">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              className="w-full sm:col-span-1 col-span-full sm:p-0 p-4 "
              key={index}
            >
              <EventCardItem item={item} />
            </div>
          ))
        ) : (
          <div className="w-full text-center text-black col-span-full bg-white rounded-xl p-8  ">
            هیچ محتوایی وجود ندارد
          </div>
        )}
      </div>
      {!!data.length && (
        <div className="col-span-3 sm:w-fit sm:relative sm:-left-1/2 ">
          <Pagination {...pagination} />
        </div>
      )}
    </EventsLayout>
  );
};

export default EventList;
