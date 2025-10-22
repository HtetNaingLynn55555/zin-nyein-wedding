import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { useState } from "react";

import { data } from "../../../../../data";

export default function GalleryPhoto() {
  let gallery = data.gallery;

  let images = gallery.map((item) => {
    return { src: item.src, width: 800, height: 1100 };
  });

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  return (
    <div>
      {/* <RowsPhotoAlbum
        photos={[
          { src: "/images/coupleOne.jpg", width: 800, height: 600 },
          { src: "/images/coupleTwo.jpg", width: 800, height: 600 },
          { src: "/images/coupleThree.jpg", width: 800, height: 600 },
          { src: "/images/coupleOne.jpg", width: 800, height: 600 },
          { src: "/images/coupleTwo.jpg", width: 800, height: 600 },
          { src: "/images/coupleThree.jpg", width: 800, height: 600 },
          { src: "/images/coupleOne.jpg", width: 800, height: 600 },
          { src: "/images/coupleTwo.jpg", width: 800, height: 600 },
          { src: "/images/coupleThree.jpg", width: 800, height: 600 },
        ]}
      /> */}
      <RowsPhotoAlbum
        padding={6}
        photos={images}
        rowConstraints={(containerWidth) => ({
          maxPhotos: containerWidth < 768 ? 1 : 3, // 1 photo for devices < 768px, 3 for larger
        })}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .7)" } }}
        slides={images}
        open={index >= 0}
        close={() => setIndex(-1)}
      />

      {/* <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "/images/coupleOne.jpg" },
          { src: "/images/coupleTwo.jpg" },
          { src: "/images/coupleThree.jpg" },
        ]}
      /> */}
    </div>
  );
}
