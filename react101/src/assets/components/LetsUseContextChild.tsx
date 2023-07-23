
interface LetsUseContextChildProps {
  sectionName: string;
}

const LetsUseContextChild = (props: LetsUseContextChildProps) => {
  const {sectionName} = props;
  return (
    <h4>This is the child component of {sectionName}.</h4>

  )
}

export default LetsUseContextChild