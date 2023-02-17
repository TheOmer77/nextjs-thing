'use client';

import { H1 } from 'components/headings';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <H1>Oh no!</H1>
      <p>{`Hmm... We couldn't load this: ${error}`}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;
