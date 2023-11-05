import React, { useContext, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { PieChart, Settings, User } from "react-feather";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import JWTContext from "../../contexts/JWTContext";
import useAuth from "../../hooks/useAuth";

import { myAppConfig } from "../../config";
import { useNavigate } from "react-router-dom";

const NavbarUser = () => {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const onViewTecher = () => {
    navigate(`${myAppConfig.baseURL}/teacherProfile`)
  }

  const onViewSchool = () => {
    navigate(`${myAppConfig.baseURL}/schooProfile`)
  }

  const onViewStudent = () => {
    navigate(`${myAppConfig.baseURL}/studentProfile`)
  }

  return (
    <Dropdown className="nav-item" align="end">
      <span className="d-inline-block d-sm-none">
        <Dropdown.Toggle as="a" className="nav-link">
          <Settings size={18} className="align-middle" />
        </Dropdown.Toggle>
      </span>
      <span className="d-none d-sm-inline-block">
        <Dropdown.Toggle as="a" className="nav-link">
          <img
            src={user?.avatar}
            className="avatar img-fluid rounded-circle me-1"
            alt={user?.displayName}
          />
          <span className="text-dark">{user?.displayName}</span>
        </Dropdown.Toggle>
      </span>
      <Dropdown.Menu>
        {/* {user?.role === '' ? console.log('nice') : console.log('hey')} */}

        {user?.role === 'teacher' && <Dropdown.Item onClick={() => onViewTecher()} >
          <User size={18} className="align-middle me-2" />
          Teacher Profile
        </Dropdown.Item>}
        {user?.role === 'schooladmin' && <Dropdown.Item onClick={() => onViewSchool()}>
          <User size={18} className="align-middle me-2" />
          School Profile
        </Dropdown.Item>}
        {user?.role === 'student' && <Dropdown.Item onClick={() => onViewStudent()}>
          <User size={18} className="align-middle me-2" />
          Student Profile
        </Dropdown.Item>}



        {/* <Dropdown.Item onClick={() => onViewTecher()} >
          <User size={18} className="align-middle me-2" />
          Teacher Profile
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onViewSchool()}>
          <User size={18} className="align-middle me-2" />
          School Profile
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onViewStudent()}>
          <User size={18} className="align-middle me-2" />
          Student Profile
        </Dropdown.Item> */}


        <Dropdown.Divider />

        <Dropdown.Item>Settings & Privacy</Dropdown.Item>
        <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavbarUser;
