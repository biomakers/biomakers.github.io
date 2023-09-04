import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        buildTime
      }
    }
  `);

  const BUILD_TIME = new Date(data.site.buildTime);
  console.log(BUILD_TIME);

  return (
    <footer className="bg-emerald-800 text-rose-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 px-6 py-8 md:grid-cols-1">
          <div>
            <p className="font-light text-xs italic">
              page last updated: {BUILD_TIME.toDateString()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
