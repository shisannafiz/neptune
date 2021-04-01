import React from 'react';
import './SidebarRow.css';

function SidebarRow({ title, Icon, selected }) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <h1 className="sidebarRow__icon">
        <Icon />
      </h1>
      <h1 className="sidebarRow__title">{title}</h1>
    </div>
  );
}

export default SidebarRow;
