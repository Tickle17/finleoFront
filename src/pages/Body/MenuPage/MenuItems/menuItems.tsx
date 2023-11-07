import React from "react";
import { Grid } from "@mui/material";
import "./style.scss";

const data = [
  {
    id: 1,
    title: "Phone 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "https://avatars.mds.yandex.net/get-mpic/5289362/img_id6752968735460984265.jpeg/600x600",
    price: "100",
  },
  {
    id: 2,
    title: "Phone 2",
    description: "Lorem ipsum dolor sit amet.",
    img: "https://avatars.mds.yandex.net/get-mpic/5289362/img_id6752968735460984265.jpeg/600x600",
    price: "200",
  },
  {
    id: 3,
    title: "Phone 3",
    description: "Lorem ipsum dolor sit amet.",
    img: "https://avatars.mds.yandex.net/get-mpic/5289362/img_id6752968735460984265.jpeg/600x600",
    price: "300",
  },
  {
    id: 4,
    title: "Phone 4",
    description: "Lorem ipsum dolor sit amet.",
    img: "https://avatars.mds.yandex.net/get-mpic/5289362/img_id6752968735460984265.jpeg/600x600",
    price: "400",
  },
  {
    id: 5,
    title: "Phone 5",
    description: "Lorem ipsum dolor sit amet.",
    img: "https://avatars.mds.yandex.net/get-mpic/5289362/img_id6752968735460984265.jpeg/600x600",
    price: "500",
  },
];

export default function MenuItems() {
  return (
    <>
      <Grid container className="menuItems">
        {data.map((item, index) => (
          <Grid
            item
            xs={3}
            container
            className="menuItem"
            key={index}
            // onClick={() => props.openModalHandler(item)}
          >
            <Grid item xs={12}>
              <img src={item.img} alt="" />
            </Grid>
            <Grid className="menuTitle" item xs={12}>
              {item.title}
            </Grid>
            {item.description && item.description !== "" && (
              <Grid className="menuDescription" item xs={12}>
                <div>{item.description}</div>
              </Grid>
            )}
            <Grid item xs={12} className="menuDescription">
              {item.price} р.
            </Grid>
            {/*<Grid item xs={12}>*/}
            {/*  <ShowModalButton visible={item.visible}></ShowModalButton>*/}
            {/*</Grid>*/}
          </Grid>
        ))}
      </Grid>
    </>
  );
}
