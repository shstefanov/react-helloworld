import React    from "react";
import { Link, Outlet } from "react-router-dom";


export default () => <div>
  <div>
    Top menu:
    <Link to="/">Home</Link>
    <Link to="/test">Test</Link>
  </div>
  <div>
    <Outlet />
  </div>
</div>;