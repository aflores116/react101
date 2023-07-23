import LetsUseContextChild from "./LetsUseContextChild";

interface LetsUseContextParentProps {
  sectionName: string;
}

const LetsUseContextParent = (props: LetsUseContextParentProps) => {
  const { sectionName } = props;
  return (
    <>
    <section className="site-section">
      <h2>What the flip is {sectionName}?</h2>
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
      <LetsUseContextChild
      sectionName={'context child'} />
      {/* test comment to push  */}
      </section>
    </>
  );
};

export default LetsUseContextParent;
