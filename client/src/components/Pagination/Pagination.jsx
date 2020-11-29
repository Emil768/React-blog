import React, { useState } from "react";

function Pagination() {
  const [state, setState] = useState({
    offset: 0,
    data: [],
    perPage: 5,
    currentPage: 0,
  });

  return (
    <div className="pagination">
      <div className="container"></div>
    </div>
  );
}

export default Pagination;
