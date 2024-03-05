import { Helmet } from 'react-helmet-async';

import { TestingView } from 'src/sections/testing/view';

// ----------------------------------------------------------------------

export default function TestingPage() {
  return (
    <>
      <Helmet>
        <title> Testing | Minimal UI </title>
      </Helmet>

      <TestingView />
    </>
  );
}
