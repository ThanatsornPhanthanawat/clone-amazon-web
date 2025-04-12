import * as React from "react";
import { NavbarBanner } from "./navbar-banner/navbar-banner";
import NavbarBelt from "./navbar-belt/navbar-belt";


export function Navbar() {
    return (
        <div className="sticky top-0 left-0 w-full z-50 bg-white shadow">
          <NavbarBelt />
          <NavbarBanner />
        </div>
      );
}