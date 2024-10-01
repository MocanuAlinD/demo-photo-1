"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./NavbarPages.module.css";
import {
  portraits,
  kids,
  preborn,
  newborn,
  food,
  city,
  landscape,
} from "@/actions";

const ListImages = ({ category }) => {
  const listaNume = {
    portraits,
    kids,
    preborn,
    newborn,
    food,
    city,
    landscape,
  };

  const actualList = listaNume[category]
  
  const [state, setState] = useState({
    data: actualList[0].url,
    width: actualList[0].width,
    height: actualList[0].height,
  });
  const changeState = (a, b, c) => {
    setState({ data: a, width: b, height: c });
  };
  return (
    <div className={styles.imagesContainer}>
      <div className={styles.inside}>
        {actualList.map((a) => (
          <div
            onClick={() => changeState(a.url, a.width, a.height)}
            key={a.id}
            className={styles.separateImage}
          >
            <Image
              priority
              as="image"
              className={styles.imageLink}
              src={a.url}
              width={a.width}
              height={a.height}
              alt="image"
            />
          </div>
        ))}
      </div>
      <div className={styles.bigImage}>
        <div
          className="insideBg"
          style={{
            width: "100%",
            height: "90vh",
            backgroundImage: `url(${state.data})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundOrigin: "content-box",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ListImages;
