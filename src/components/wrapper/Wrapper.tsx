import { Content } from "../content/Content";
import { Sidebar } from "../sidebar/Sidebar";
import React from 'react'
export const Wrapper = () => {
  return (
    <div className="flex min-h-screen px-20 pt-5">
      <div className="basis-1/4">
        <Sidebar />
      </div>
      <div className="basis-3/4">
        <Content />
      </div>
    </div>
  );
};
