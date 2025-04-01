import Image from "next/image";
import * as React from "react";
import { NavbarBanner } from "./navbar-banner/navbar-banner";
import NavbarBelt from "./navbar-belt/navbar-belt";


export function Navbar() {
    return (
        <div>
          <NavbarBelt />
          <NavbarBanner />
        </div>
      );
}