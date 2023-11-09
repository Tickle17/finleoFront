import React from "react";
import { Grid } from "@mui/material";
import "./style.scss";
import store from "../../../../shared/store/store";
import { observer } from "mobx-react-lite";
import Modal from "../../../../shared/items/modal/modal";
import ModalContentItem from "./modalContentItem/modalContentItem";

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

interface Item {
  id: number;
  title: string;
  description: string;
  img: string;
  price: string;
}

export default observer(function MenuItems() {
  return (
    <>
      <Grid container className="menuItems">
        {data.map((item: Item, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            className="menuItem"
            key={index}
            onClick={() => {
              store.openModal(
                <ModalContentItem item={item}></ModalContentItem>
              );
            }}
          >
            <Grid className="content">
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
          </Grid>
        ))}
        {store.modal ? (
          <Modal
            contentModal={store.modalContent}
            closeContentModal={() => {
              store.closeModal();
            }}
          ></Modal>
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
});
