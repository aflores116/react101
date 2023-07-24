import React, {useEffect}from 'react'

interface UsingStateProps {
  sectionName: string;
}

const UsingState = (props: UsingStateProps) => {
  const {sectionName} = props;
  const [count, setCount] = React.useState<number>(0);

  function handleCount(){
    setCount(count + 1);
  }

  //guarnateed to run onMount.
  useEffect(() => {
    console.log('the count is now:', count)
  }, []);

  return (
   <>
   <section className='site-section'>
        <h2>What the flip is {sectionName}?</h2>
        <p>
            It's a react hook to perform side effects in an application. Basically things happening as a consequence of something else. Something happens in our app, something changes, something gets triggered, and as a side effect something happens. 
            Side effects are a result of state changes, when it goes from one value to another. 
        </p>
        <h3>Ways to use {sectionName}:</h3>
        <p> In the code below, you can either use no array, and empty array, or an array with dependencies.</p>
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
        <h3>Example of using {sectionName}:</h3>
        <div className="tutorial">
            <p className='tutorial__text'><strong>Current count: {count} </strong><em>(Open dev tools to look at the count there)</em></p>
            <button className='btn tutorial__btn' onClick={handleCount}>Increment</button>
            <p className='tutorial__text'> we pretty much want to react when count changes</p>
           
        </div>
    </section>
   </>
  )
}

export default UsingState