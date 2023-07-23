import React from "react";
import LetsUseContextChild from "./LetsUseContextChild";

interface LetsUseContextParentProps {
  prop1: string;
}

const LetsUseContextParent = (props: LetsUseContextParentProps) => {
  const { prop1 } = props;
  return (
    <>
    <section className="site-section">
      <h2>What the flip is context?</h2>
      <p>
        Context is almost what it sounds like. We pass down global state
        variables without having to drill props down through multiple
        components.
      </p>
      <h3>Our current structure for our context components:</h3>
      <ul>
        <li>
          app
          <ul>
            <li>LetsUseContextParent</li>
            <ul>
              <li>LetsUseContextChild</li>
            </ul>
          </ul>
        </li>
      </ul>
      <LetsUseContextChild />
      </section>
    </>
  );
};

export default LetsUseContextParent;
