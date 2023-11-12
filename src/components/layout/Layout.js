import { Layout as AntLayout, Menu } from "antd";
import React, { useState} from "react";
import {  Outlet } from "react-router-dom";
import Navbar2 from "./Navbar";
import './Layout.css';


const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleAside = () => setCollapsed(!collapsed);


  return (
    <AntLayout >
      <Navbar2 toggleAside={toggleAside} collapsed={collapsed} />
      <AntLayout>
        <div className='w-100 mt-4'>
          <Outlet />
        </div>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
