import { Helmet } from 'react-helmet-async';

import { AuditLogView } from 'src/sections/audit-log/view';

// ----------------------------------------------------------------------

export default function AuditLogPage() {
  return (
    <>
      <Helmet>
        <title> Audit Log</title>
      </Helmet>

      <AuditLogView />
    </>
  );
}
