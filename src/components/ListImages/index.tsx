"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./ListImages.module.css";
import {
  portraits,
  kids,
  preborn,
  newborn,
  food,
  city,
  landscape,
} from "@/actions";

type one = {
  [index: string]: {
    id: string;
    url: string;
    width: string;
    height: string;
  }[];
};

const ListImages = ({ category }: { category: string }) => {
  const nameList: one = {
    portraits,
    kids,
    preborn,
    newborn,
    food,
    city,
    landscape,
  };

  const actualList = nameList[category];
  console.log("nameList[category]", actualList);

  const [state, setState] = useState({
    url: actualList[0].url,
    width: actualList[0].width,
    height: actualList[0].height,
  });
  const changeState = (a: string, b: string, c: string) => {
    setState({ url: a, width: b, height: c });
  };
  return (
    <div className={styles.imagesContainer}>
      <div className={styles.inside}>
        {actualList.map(
          (a: { id: string; url: string; width: string; height: string }) => (
            <div
              onClick={() => changeState(a.url, a.width, a.height)}
              key={a.id}
              className={styles.separateImage}
            >
              <Image
                src={a.url}
                width={+a.width}
                height={+a.height}
                alt="image"
              />
            </div>
          )
        )}
      </div>
      <div className={styles.bigImage}>
        <div
          className="insideBg"
          style={{
            width: "100%",
            height: "90vh",
            backgroundImage: `url(${state.url})`,
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
