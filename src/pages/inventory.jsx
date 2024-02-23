import { Helmet } from 'react-helmet-async';

import { InventoryView } from 'src/sections/inventory/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Inventory</title>
      </Helmet>

      <InventoryView />
    </>
  );
}
