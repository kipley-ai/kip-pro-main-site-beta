import React, { useState } from "react";
import styles from "./ImageGallery.module.sass";

const ImageGallery = () => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const handleMouseOver = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseOut = () => {
        setActiveIndex(-1);
    };

    const images: string[] = [
        "/images/community/top.png",
        "/images/community/top1.png",
        "/images/community/top2.png",
        "/images/community/top3.png",
        "/images/community/top4.png",
        "/images/community/top5.jpg",
    ];

    return (
        <div className={styles.imgContainer}>
            {images.map((src, index) => (
                <img
                    key={src}
                    src={src}
                    className={`${styles.imgExpand} ${
                        activeIndex === index ? styles.big : styles.small
                    }`}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={handleMouseOut}
                />
            ))}
        </div>
    );
};

export default ImageGallery;
