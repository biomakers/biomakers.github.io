import Header from "../components/Header";
import * as React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const IndexPage = () => {
  const API_KEY = "AIzaSyCa0M2tj3j3LKNliS3-YHXreeDHdMWgrfw";
  const calendars = [
    { calendarId: "35bg4nr3dd5usovi6sug5feo8o@group.calendar.google.com" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto px-4 bg-white">
        <div className="flex h-[600px] justify-center items-stretch">
          <div className="w-screen shrink-0 hero">
            <div className="max-w-5xl mx-auto h-full px-4 flex flex-col justify-center">
              <h1 className="text-3xl">MIT BioMakers</h1>
              <p>an open community for biomaking</p>
            </div>
          </div>
        </div>
        <h2 className="text-3xl">About</h2>
        <p>
          MIT BioMakers is an open community of students that are designing and
          leading hands-on bioengineering projects. In our biomakerspace — the
          Huang-Hobbs BioMaker Space — students move their ideas into the
          iterative design-build-test-learn cycle, developing engineered
          biological systems to both explore the fundamentals of biology and
          tackle some of society's most difficult technical challenges. Through
          workshops, community projects, reading groups, and more, students
          develop the skills to build with biology, while also considering
          humanity's responsibility to do so ethically and sustainably.
        </p>
        <p>
          Join our mailing list (
          <a
            href="https://groups.mit.edu/webmoira/list/biomakers-prospectives"
            target="_blank"
            rel="noreferrer"
            className="font-mono"
          >
            biomakers-prospectives [at] mit.edu
          </a>
          ) to hear about our upcoming events!
        </p>
        <h2>The BioMakers student group</h2>
        <h2>The space</h2>
        <h2>Community initiatives</h2>
        <h2></h2>
        <h2 className="text-2xl font-bold">Upcoming events</h2>
        <Calendar showFooter={false} apiKey={API_KEY} calendars={calendars} />

        <h2>Donate</h2>
        <p>
          <a href="https://giving.mit.edu/search/node/2860813">
            giving.mit.edu
          </a>
        </p>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
