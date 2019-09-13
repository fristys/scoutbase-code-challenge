import React from 'react';

export function ErrorMessage({ error }) {
  return (
    <div>
      Error occurred: {JSON.stringify(error)}
    </div>
  );
}
