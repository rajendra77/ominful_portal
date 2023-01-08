import { NavItem, NavLink } from "reactstrap";
import React, { useContext, useState } from "react";
import { Context } from "../hooks/Context";

const ChannelTab = ({}) => {
  const { tab, updateTab } = useContext(Context);

  return (
    <div class="d-flex flex-row my-4 border-b ml-4">
      <div
        class={`p-2 pl-3 cursor-pointer text-xs  ${
          tab === 1 && "borderBottom text-primary"
        }`}
        onClick={() => updateTab(1)}
      >
        Integrated (12)
      </div>
      <div
        class={`p-2 cursor-pointer text-xs ${
          tab === 2 && "borderBottom text-primary"
        }`}
        onClick={() => updateTab(2)}
      >
        All Channels(118)
      </div>
      <div
        class={`p-2 cursor-pointer text-xs ${
          tab === 3 && "borderBottom text-primary"
        }`}
        onClick={() => updateTab(3)}
      >
        Coming Soon(9)
      </div>
    </div>
  );
};

export default ChannelTab;
