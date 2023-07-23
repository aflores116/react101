import React, {useState, useEffect}from 'react'

interface UsingStateProps {
  sectionName: string;
  handleCount:() => any;
}

const UsingState = (props: UsingStateProps) => {
  const {sectionName} = props;
  const [count, setCount] = React.useState<number>(0);

  function handleCount(){
    setCount(count + 1);
  }

  useEffect(() => {
    console.log('the count is now:', count)
    return()=>{
        `<p>cleanp</p>`
    }
  }, []);

  return (
   <>
   <section className='site-section'>
        <h2>What the flip is {sectionName}?</h2>
        <p>
            It's a react hook to perform side effects in an application. Basically things happening as a consequence of something else. Something happens in our app, something changes, something gets triggered, and as a side effect something happens. 
            Side effects are a result of state changes, from one value to another.
        </p>
        <h3>Ways to use useEffect:</h3>
        <code>
        { `useEffect(() => {}, []);`}
        </code>
        <code>
            {`useEffect(() => {});`}
        </code>
        <code>
        { `useEffect(() => {
                return () => {
                    // cleanup
                }
            }, []);`}
        </code>
        <h3>Example of using state:</h3>
        <div className="tutorial">
            <p className='tutorial__text'>Current count:{count}</p>
            <p className='tutorial__text'>Open dev tools to look at the count there.</p>
            <button className='tutorial__button' onClick={handleCount}>Increment</button>
        </div>
    </section>
   </>
  )
}

export default UsingState