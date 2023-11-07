import React from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import "./style.scss";
import basket from "../../../shared/imgs/basket.svg";
import search from "../../../shared/imgs/search.svg";
import profile from "../../../shared/imgs/profile.svg";

export default function Header() {
  return (
    <header>
      <Grid container className="header">
        <Grid item xs={3}>
          <NavLink to="/">
            <img src="" alt="Логотип" />
          </NavLink>
        </Grid>
        <Grid container item xs={6}>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Товары</NavLink>
              </li>
              <li>
                <NavLink to="/delivery">Доставка</NavLink>
              </li>
            </ul>
          </nav>
        </Grid>
        <Grid item xs={3} container>
          <Grid item xs={3}>
            <img src={search} alt="search" />
          </Grid>
          <Grid item xs={3}>
            <img src={basket} alt="basket" />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <img src={profile} alt="profile" />
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
}
