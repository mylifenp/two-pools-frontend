"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useIntl } from "react-intl";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  const { formatMessage } = useIntl();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>{`${formatMessage({ id: "error" })} ${error.message}`}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {formatMessage({ id: "tryAgain" })}
      </button>
    </div>
  );
}
