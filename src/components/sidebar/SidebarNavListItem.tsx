/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

import { Badge, Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface SidebarNavListItemProps {
  className?: string;
  depth: number;
  href: string;
  icon: IconDefinition;
  badge?: string;
  open?: boolean;
  title: string;
  children?: React.ReactNode;
}

const SidebarNavListItem = (props: SidebarNavListItemProps) => {
  const {
    title,
    href,
    depth = 0,
    children,
    icon: Icon,
    badge,
    open: openProp = false,
  } = props;

  const [open, setOpen] = React.useState(openProp);

  const handleToggle = () => {
    setOpen((state) => !state);
  };

  if (children) {
    return (
      <li className={`sidebar-item ${open ? "active" : ""}`}>
        <a
          className={`sidebar-link ${open ? "" : "collapsed"}`}
          data-bs-toggle="collapse"
          aria-expanded={open ? "true" : "false"}
          data-depth={depth}
          onClick={handleToggle}
        >
          {Icon && <FontAwesomeIcon icon={Icon as IconDefinition} />}{" "}
          <span className="align-middle" data-depth={depth}>
            {title}
          </span>
          {badge && (
            <Badge className="badge-sidebar-primary" bg="">
              {badge}
            </Badge>
          )}
          {open ? <div /> : <div />}
        </a>
        <Collapse in={open}>
          <ul className="sidebar-dropdown list-unstyled">{children}</ul>
        </Collapse>
      </li>
    );
  }

  return (
    <li className="sidebar-item">
      <NavLink data-depth={depth} to={href} className="sidebar-link">
        {Icon && <FontAwesomeIcon icon={Icon as IconDefinition} />}{" "}
        <span className="align-middle" data-depth={depth}>
          {title}
        </span>
        {badge && (
          <Badge className="badge-sidebar-primary" bg="">
            {badge}
          </Badge>
        )}
      </NavLink>
    </li>
  );
};

export default SidebarNavListItem;
