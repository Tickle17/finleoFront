import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "./style.scss";
import basket from "../../shared/imgs/basket.svg";
import search from "../../shared/imgs/search.svg";
import profile from "../../shared/imgs/profile.svg";

export default function Header() {
  return (
    <header>
      <Grid container>
        <Grid item xs={3}>
          Logo
        </Grid>
        <Grid container item xs={6}>
          <nav>
            <ul>
              <li>
                <Link to="/">Товары</Link>
              </li>
              <li>
                <Link to="/delivery">Доставка</Link>
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
