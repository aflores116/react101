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
        A way to store data, and have it accessible to components in the tree without having to drill prop.
      </p>
      <h3>Example:</h3>
      <p> 
        This  component has a user which has a property of isSubscribed and name. The child component is called dashboard that recieves user as a prop. User prop is passed to Sidebar and Profile.
      </p>
       <p>Dashboard has components such as Sidebar and Profile. The dashboard recieves the user as props and passes it down to Both Sidebar and Profile compoents.</p>

      </section>

    </>
  );
};

export default LetsUseContextParent;
