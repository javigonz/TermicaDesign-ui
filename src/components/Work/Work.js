import React from "react";
import { useQuery } from "react-query";
import "./Work.css";
import client from "../../client";
import Loading from "../loading";
import CardWork from "../CardWork";
import Delayed from "../Delayed";

function Work() {
  const { data: works = [], isLoading } = useQuery(
    "works",
    () => client.getWorks(),
    {
      refetchOnWindowFocus: false,
      select: (data) => {
        const newSortedWorks = data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });

        return newSortedWorks;
      },
    }
  );

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="main-content_work">
          {works.map(
            (work, index) =>
              index < 13 && (
                <Delayed key={work.workId} waitBeforeShow={index * 100}>
                  <CardWork key={work.workId} item={work}></CardWork>
                </Delayed>
              )
          )}
        </div>
      )}
    </>
  );
}

export default Work;
