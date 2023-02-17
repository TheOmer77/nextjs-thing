'use client';

import { H1, H2 } from 'components/headings';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <H1>Oh no!</H1>
      <p>{`Hmm... We couldn't load this: ${error.message}`}</p>
      <button className='text-blue-700 underline' onClick={reset}>
        Try again
      </button>
      <H2>Error details</H2>
      <pre>{error.stack}</pre>
    </div>
  );
};

export default Error;
