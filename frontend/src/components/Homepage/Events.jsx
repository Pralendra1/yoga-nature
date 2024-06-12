import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo2 from "./Photo2";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/events");
        // Assuming the API returns an array of events, we take the first 4
        setEvents(response.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="h-full p-4">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  items-center justify-between py-4 lg:py-10 mx-2 md:mx-0">
          {/* Photo */}
          <div className="rounded-2xl my-4">
            <Photo2 />
          </div>
          {/* Text */}
          <div className="text-center xl:text-right flex-grow">
            <span className="text-4xl uppercase m-1 my-0 md:mx-10">events</span>
            {events.map((event, index) => {
              const formattedDate = new Date(event.date).toLocaleDateString();
              return (
                <div
                  key={index} // Added key prop
                  className="bg-green-400 text-white rounded-2xl text-4 border border-none flex flex-row justify-evenly gap-5 my-3 p-3 hover:bg-purple-100 hover:text-gray-800 md:mx-10"
                >
                  <div>{event.name}</div>
                  <div>{event.location}</div>
                  <div>{formattedDate}</div>
                </div>
              );
            })}
            <button className="btn btn-outline hover:text-green-400 hover:bg-gray-600 hover:border-none uppercase md:mr-10">
              check upcoming events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
