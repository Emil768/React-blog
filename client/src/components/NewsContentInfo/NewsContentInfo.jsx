import React, { useState } from "react";
import "./NewsContentInfo.scss";

import AdminBlock from "../AdminBlock/AdminBlock";

import CategoryPanel from "../CategoryPanel/CategoryPanel";
import NewsSearch from "../NewsSearch/NewsSearch";

function NewsContentInfo({ data, setSearch, activeName }) {
  return (
    <div className="news__content-info">
      <NewsSearch searchNews={setSearch} />
      <CategoryPanel data={data} activeName={activeName} />
      <AdminBlock />
    </div>
  );
}

export default NewsContentInfo;
