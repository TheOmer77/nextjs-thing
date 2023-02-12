"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <p>{`Hmm... We couldn't load this: ${error}`}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;
