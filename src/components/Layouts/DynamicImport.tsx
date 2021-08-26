//libs
import React from 'react'
import Loadable from 'react-loadable'

const WrapperContentLoading = ({ children }: any) => {
  return (
    <div className='utils__content'>
      <section className='card'>
        <div className='card-body'>{children}</div>
      </section>
    </div>
  )
}

function Loading(props: any) {
  if (props.error) {
    // When the loader has errored
    return (
      <WrapperContentLoading>
        <div>
          Error! <button onClick={props.retry}>Retry</button>
        </div>
      </WrapperContentLoading>
    )
  } else if (props.timedOut) {
    // When the loader has taken longer than the timeout
    return (
      <WrapperContentLoading>
        <div>
          Taking a long time... <button onClick={props.retry}>Retry</button>
        </div>
      </WrapperContentLoading>
    )
  } else {
    // When the loader has just started
    return null
  }
}

const DynamicImport = (Component: any) =>
  Loadable({
    loader: Component,
    loading: Loading
  })

export default DynamicImport
