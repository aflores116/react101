import React from 'react'

interface LetsUseContextChildProps {
  prop1: string;
}

const LetsUseContextChild = (props: LetsUseContextChildProps) => {
  const {prop1} = props;
  return (
    <h4>This is the child component of LetsUseContextParent.</h4>

  )
}

export default LetsUseContextChild