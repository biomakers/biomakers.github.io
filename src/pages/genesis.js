import Header from "../components/Header";
import Footer from "../components/Footer";
import * as React from "react";

const Section = ({ children }) => {
  return (
    <div className="py-4">
      <div className="max-w-5xl mx-auto px-6">{children}</div>
    </div>
  );
};

const GenesisPage = () => {
  return (
    <div className="min-h-screen bg-emerald-800 min-w-[24rem] text-rose-200">
      <Header />
      <main>
        <div>
          <div className="max-w-5xl mx-auto px-6 flex flex-col justify-center h-[600px]">
            <p className="italic font-light text-8xl py-2">Genesis:</p>
            <p className="font-light text-4xl">
              A synthetic biology design challenge
            </p>
          </div>
        </div>

        <Section>
          <p>
            Pre-registration is open!{" "}
            <a
              href="https://forms.gle/bfeBZCH4HvSfnhmD6"
              target="_blank"
              rel="noreferrer"
              className="underline bg-rose-200 text-emerald-800 p-[2px] rounded"
            >
              Fill out this form
            </a>{" "}
            to indicate your interest in participating in Genesis 2024, and we
            will follow up with team registration details in December!
          </p>
        </Section>

        <Section>
          <h2 id="about" className="font-light text-4xl mb-4">
            The world needs more builders.
          </h2>
          <p>
            The climate crisis is one of the greatest challenges the world faces
            today. Solutions to climate change will require a convergence of
            skills from science, engineering, computation, and math in order to
            scale to humanity's needs without compromising the environment.
          </p>

          <br />

          <p>
            Synthetic biology can enable us to build with, instead of against,
            nature. But we need more makers who know how to build with biology.
            The goal of this challenge is provide makers with the knowledge and
            skills necessary to design solutions that work symbiotically with
            nature.
          </p>
        </Section>

        <Section>
          <h2 id="about" className="font-light text-4xl mb-4">
            Tentative schedule
          </h2>

          <table className="w-full table-auto">
            <tr>
              <td>Friday</td>
              <td>December 1</td>
              <td>Team registration opens</td>
            </tr>
            <tr>
              <td>Monday</td>
              <td>January 8</td>
              <td>Synthetic Biology Crash Course begins</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>January 12</td>
              <td>Team registration closes</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>January 19</td>
              <td>Synthetic Biology Crash Course ends</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>January 25</td>
              <td>Practice presentations</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>January 26</td>
              <td>Final presentations and awards ceremony</td>
            </tr>
          </table>
        </Section>

        <Section>
          <h2 id="sponsors" className="font-light text-4xl mb-4">
            Sponsors
          </h2>
          <p>
            Interested in sponsoring and building the next generation of makers?
            Please reach out to{" "}
            <span className="p-[2px] rounded font-mono bg-rose-200 text-emerald-800">
              genesis-challenge@mit.edu
            </span>{" "}
            to start the conversation!
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default GenesisPage;
