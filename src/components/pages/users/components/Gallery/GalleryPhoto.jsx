import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useState } from "react";
export default function GalleryPhoto() {
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
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={[
          { src: "/images/coupleOne.jpg" },
          { src: "/images/coupleTwo.jpg" },
          { src: "/images/coupleThree.jpg" },
          { src: "/images/coupleOne.jpg" },
          { src: "/images/coupleTwo.jpg" },
          { src: "/images/coupleThree.jpg" },
          { src: "/images/coupleOne.jpg" },
          { src: "/images/coupleTwo.jpg" },
          { src: "/images/coupleThree.jpg" },
        ]}
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
