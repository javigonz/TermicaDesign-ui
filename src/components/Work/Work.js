import React from "react";
import { useQuery } from "react-query";
import "./Work.css";
import client from "../../client";
import Loading from "../Loading";
import AsyncImage from "../AsyncImage";

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
          {works.map((work) => (
            <article className="card" key={work.workId}>
              <header className="card__thumb">
                <AsyncImage src={work.image} />
              </header>
              <div className="card__body">
                <div className="card__category">
                  <a>{work.tag}</a>
                </div>
                <h2 className="card__title">
                  <a>{work.title}</a>
                </h2>
                <div className="card__subtitle">{work.subtitle}</div>
                <p className="card__description">{work.description}</p>
              </div>
              <footer className="card__footer">
                <p>{work.skills}</p>
                {work.gotourl !== "" && (
                  <p>
                    <a target="blank" href={work.url}>
                      {work.gotourl}
                    </a>
                  </p>
                )}
              </footer>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default Work;
