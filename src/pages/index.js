import Header from "../components/Header";
import * as React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const Section = ({ children }) => {
  return (
    <div className="py-4">
      <div className="max-w-5xl mx-auto px-4">{children}</div>
    </div>
  );
};
const IndexPage = () => {
  const API_KEY = "AIzaSyCa0M2tj3j3LKNliS3-YHXreeDHdMWgrfw";
  const calendars = [
    { calendarId: "35bg4nr3dd5usovi6sug5feo8o@group.calendar.google.com" },
  ];

  return (
    <div className="min-h-screen bg-rose-100 min-w-[24rem]">
      <Header />
      <main>
        <div>
          <div className="max-w-5xl mx-auto px-4 flex flex-col justify-center h-[600px]">
            <p className="font-light text-6xl py-4">
              An open community of creators
            </p>
            <ul>
              <li>About ↗</li>
              <li>The Huang-Hobbs BioMaker Space ↗</li>
              <li>Community initiatives ↗</li>
              <li>Independent projects ↗</li>
              <li>Upcoming events ↗</li>
            </ul>
          </div>
        </div>

        <Section>
          <h2 className="font-light text-4xl mb-4 border-b-2 border-emerald-800">
            About
          </h2>
          <p className="">
            MIT BioMakers is an open community of students that are designing
            and leading hands-on bioengineering projects. In our biomakerspace —
            the Huang-Hobbs BioMaker Space — students move their ideas into the
            iterative design-build-test-learn cycle, developing engineered
            biological systems to both explore the fundamentals of biology and
            tackle some of society's most difficult technical challenges.
            Through workshops, community projects, reading groups, and more,
            students develop the skills to build with biology, while also
            considering humanity's responsibility to do so ethically and
            sustainably.
          </p>
          <p className="mt-4">
            Join our mailing list (
            <a
              href="https://groups.mit.edu/webmoira/list/biomakers-prospectives"
              target="_blank"
              rel="noreferrer"
              className="font-mono underline bg-emerald-800 text-white p-[2px] rounded"
            >
              biomakers-prospectives(@mit.edu)
            </a>
            ) to hear about our upcoming events!
          </p>

          <p className="mt-4">
            If you're interested in joining the MIT BioMakers student group,
            come to our meetings that take place every{" "}
            <span className="font-bold">
              Monday and Friday at 5:30 pm in room 26-033
            </span>
            !
          </p>
        </Section>

        <Section>
          <h2 className="font-light text-4xl mb-4 border-b-2 border-emerald-800">
            The Huang-Hobbs BioMaker Space
          </h2>
        </Section>

        <Section>
          <h2 className="font-light text-4xl mb-4 border-b-2 border-emerald-800">
            Community initiatives
          </h2>
        </Section>

        <Section>
          <h2 className="font-light text-4xl mb-4 border-b-2 border-emerald-800">
            Independent projects
          </h2>
        </Section>

        <Section>
          <h2 className="font-light text-4xl mb-4 border-b-2 border-emerald-800">
            Upcoming events
          </h2>
          <Calendar
            styles={{
              calendar: { border: "none" },
              day: {
                paddingLeft: "10px",
                paddingRight: "10px",
              },
            }}
            showFooter={false}
            apiKey={API_KEY}
            calendars={calendars}
          />
        </Section>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
