import React from "react";
import PlaylistPlaySharpIcon from "@material-ui/icons/PlaylistPlaySharp";
import ExpandLessSharpIcon from "@material-ui/icons/ExpandLessSharp";
import SidebarRow from "./SidebarRow";

function ExpandSidebar({isExpanded, setIsExpanded}) {

    const ExpandLessSidebarHandler = () => {
        if (isExpanded) {
            setIsExpanded(false);
          }
    }
  return (
    <div className="sidebar">
      <SidebarRow Icon={PlaylistPlaySharpIcon} title="Hindi" />
      <SidebarRow Icon={PlaylistPlaySharpIcon} title="Punjabi" />
      <button onClick={ExpandLessSidebarHandler}>
        <SidebarRow Icon={ExpandLessSharpIcon} title="Show Less" />
      </button>
    </div>
  );
}

export default ExpandSidebar;
