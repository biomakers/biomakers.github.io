import Header from "../components/Header";
import Footer from "../components/Footer";
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
              <li>
                <a className="underline" href="#about">
                  About ↗
                </a>
              </li>
              <li>
                <a className="underline" href="#space">
                  The Huang-Hobbs BioMaker Space ↗
                </a>
              </li>
              <li>
                <a className="underline" href="#initiatives">
                  Community initiatives ↗
                </a>
              </li>
              <li>
                <a className="underline" href="#projects">
                  Independent projects ↗
                </a>
              </li>
              <li>
                <a className="underline" href="#upcoming-events">
                  Upcoming events ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Section>
          <h2
            id="about"
            className="font-light text-4xl mb-4 border-b-2 border-emerald-800"
          >
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
            <a
              className="underline"
              href="https://groups.mit.edu/webmoira/list/biomakers-prospectives"
            >
              Join our mailing list
            </a>{" "}
            (
            <a
              target="_blank"
              rel="noreferrer"
              className="font-mono bg-emerald-800 text-white p-[2px] rounded"
            >
              biomakers-prospectives [at] mit.edu
            </a>
            ) to hear about our upcoming events, and reach out to our exec team
            (
            <span className="font-mono bg-emerald-800 text-white p-[2px] rounded">
              biomakers-exec [at] mit.edu
            </span>
            ) with any questions!
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
          <h2
            id="space"
            className="font-light text-4xl mb-4 border-b-2 border-emerald-800"
          >
            The Huang-Hobbs BioMaker Space
          </h2>

          <p className="mt-4">
            The Huang-Hobbs BioMaker Space is a BL2 biological lab located in
            the basement of Building 26, room 26-035. It includes the essential
            equipment for most biological and chemical engineering projects.
            Adjacent to the lab is a lounge area in 26-033 where students can
            work and hang out.
          </p>

          <div className="w-full mt-4 flex flex-col flex-wrap md:flex-row  gap-y-4 md:gap-y-8 md:gap-x-20 justify-start">
            <div className="shrink-0 md:w-60">
              <p className="font-bold mb-2">Utility</p>
              <ul>
                <li>Autoclave</li>
                <li>Milli-Q waster</li>
                <li>Ice machine</li>
                <li>Dishwasher</li>
              </ul>
            </div>
            <div className="shrink-0 md:w-80">
              <p className="font-bold mb-2">General</p>
              <ul>
                <li>Vortexers, shakers, stirrers, nutators</li>
                <li>Minifuges, microfuges, table-top centrifuges</li>
                <li>Thermocycler</li>
                <li>qPCR machine</li>
                <li>Electrophoresis (agarose, SDS-PAGE)</li>
                <li>Spectrophotometer (UV/Vis)</li>
                <li>Gel transilluminators (blue light, UV)</li>
                <li>Protein purification (affinity column, FPLC)</li>
                <li>Electroporator</li>
                <li>Balance/scales</li>
                <li>Sonication probe</li>
                <li>Microfluidics/PDMS equipment</li>
                <li>Spincoater</li>
                <li>Rotovap</li>
                <li>Chemical hoods</li>
                <li>Power supply, signal generator, oscilloscope</li>
                <li>Potentiostat</li>
                <li>Soldering station</li>
                <li>Arduinos</li>
              </ul>
            </div>
            <div className="shrink-0 md:w-60">
              <p className="font-bold mb-2">Microbial culture</p>
              <ul>
                <li>Anaerobic glove box</li>
                <li>37ºC incubator</li>
                <li>30ºC incubator</li>
                <li>Biosafety cabinet</li>
                <li>Fermenter/bioreactor</li>
              </ul>
            </div>
            <div className="shrink-0 md:w-60">
              <p className="font-bold mb-2">Tissue culture</p>
              <ul>
                <li>
                  37ºC incubator with 5% CO<sub>2</sub>
                </li>
                <li>4ºC fridge</li>
                <li>Water and bead baths</li>
                <li>Table-top centrifuge</li>
                <li>Inverted microscope</li>
                <li>-20ºC freezer</li>
                <li>Biosafety cabinet (2)</li>
              </ul>
            </div>
            <div className="shrink-0 md:w-80">
              <p className="font-bold mb-2">Measurement</p>
              <ul>
                <li>Histology microscope (brightfield, phase, fluorescence)</li>
                <li>Fluorescence activated cell sorter</li>
                <li>5-mode plate reader</li>
                <li>AFM</li>
                <li>Microbalance</li>
              </ul>
            </div>
            <div className="shrink-0 md:w-60">
              <p className="font-bold mb-2">Storage</p>
              <ul>
                <li>4ºC fridge</li>
                <li>-20ºC freezer</li>
                <li>Ultra low-temperature (-80ºC) freezer</li>
                <li>Vapor-phase liquid nitrogen</li>
                <li>Room-temperature cubbies</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section>
          <h2
            id="initiatives"
            className="font-light text-4xl mb-4 border-b-2 border-emerald-800"
          >
            Community initiatives
          </h2>

          <p className="mb-4">
            Community initiatives are student-led groups that gather together
            students with a shared interest. Generally, community initiatives
            center around a goal, e.g. developing better cancer therapies, or
            charting the path for sustainable manufacturing. Community
            initiatives usually meet at least once at week outside of the Monday
            and Friday general BioMakers meetings.
          </p>

          <p className="mb-4">
            Want to build a community around a certain topic? Have a project
            idea and want to find other students to work on it with you? If so,
            come share your ideas with us during our Monday or Friday meetings!
          </p>

          <p className="mb-4">
            Here's a list of our current community initiatives:
          </p>

          <h3 className="font-light text-3xl mb-4">Cancer</h3>
          <p className="mb-4">
            Cancer remains one of the most formidable diseases of our time.
            Treatments, no matter how novel, are eventually met with recurrence,
            resistance, and eventually metastasis. The cancer initiative meets
            weekly to learn about the biology of cancer, discuss novel
            treatments from both a molecular biology and clinical perspective,
            and work on projects integrating experiments with computation to
            answer some of the most pertinent questions in cancer research.
          </p>
          <p>
            Meeting times for Fall 2023 will be decided after the first general
            BioMakers meeting (
            <span className="italic">September 11, 2023</span>), so check back
            shortly!
          </p>
        </Section>

        <Section>
          <h2
            id="projects"
            className="font-light text-4xl mb-4 border-b-2 border-emerald-800"
          >
            Independent projects
          </h2>

          <p className="mt-4">
            Project applications are reviewed on a rolling basis. Note that it
            can take up to a month to get{" "}
            <a
              className="underline"
              href="https://ehs.mit.edu/"
              target="_blank"
              rel="noreferrer"
            >
              MIT EHS approval
            </a>
            , so start your application early! We will work with you to move
            your idea into a full-fledged proposal, so don't be afraid to submit
            a partially-completed application. If you have any questions, reach
            out to us at{" "}
            <span className="bg-emerald-800 text-white rounded p-[2px] font-mono">
              biomakerspace [at] mit.edu
            </span>{" "}
            or directly to our space director, Dr. Justin Buck (
            <span className="bg-emerald-800 text-white rounded p-[2px] font-mono">
              jbuck [at] mit.edu
            </span>
            ).
          </p>
          <p className="mt-4">
            The application can be found at{" "}
            <a
              className="underline bg-emerald-800 text-white p-[2px] rounded"
              href="https://tinyurl.com/hhbms-app"
              target="_blank"
              rel="noreferrer"
            >
              https://tinyurl.com/hhbms-app
            </a>
            .
          </p>
        </Section>

        <Section>
          <h2
            id="upcoming-events"
            className="font-light text-4xl mb-4 border-b-2 border-emerald-800"
          >
            Upcoming events
          </h2>

          <p className="my-4">
            View our{" "}
            <a
              className="underline bg-emerald-800 text-white rounded p-[2px]"
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/1jzqxt-ak6K1-IvG70qIBaDSD5GIpFHKyfaX73qLmUp0/edit?usp=sharing"
            >
              Fall 2023 Offerings Catalog
            </a>
            , including workshops, info sessions, and events! This catalog
            (along with the calendar) will be updated throughout the semester,
            so check back frequently for additional offerings!
          </p>

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

      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
