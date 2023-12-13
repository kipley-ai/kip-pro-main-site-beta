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
    "https://cdn.discordapp.com/attachments/1179677508975722567/1180829326594277417/leftkoons_cyperpunk_technology_augmented_beautiful_blonde_her_r_58f4e69b-6747-47db-bc6c-00dfa7a97b4c.png?ex=657ed802&is=656c6302&hm=52d6397fde53e87edcbad27a7d21975539daa6a9254e1fafba0fb83493471aa1&",
    "https://cdn.discordapp.com/attachments/1179677508975722567/1180845832690466826/leftkoons_cyperpunk_technology_eurasian_mechanic_looking_back_u_067cd373-aa2c-4e88-acd3-e8980c597345.png?ex=657ee761&is=656c7261&hm=74ce65d1a9aa4a660a0daa46a07bb0ee4f8a79b5f4bd404700ec7cb91e1dddac&",
    "https://cdn.discordapp.com/attachments/1179677508975722567/1180830084609871933/leftkoons_cyperpunk_technology_augmented_handsome_priest_wearin_bd56e94f-66ca-4361-b893-47e4d676d216.png?ex=657ed8b6&is=656c63b6&hm=182694b1f1972f99dfeed131cff1145694663d2a7235ae95a249df56225bebd0&",
    "https://cdn.discordapp.com/attachments/1090127722455519252/1184423554306019368/galxe_1.jpg?ex=658beb64&is=65797664&hm=4dd3c991cf654358784bf40082cdc25a767069a3278dcfa73ab16550c56d4564&",
    "https://cdn.discordapp.com/attachments/1090127722455519252/1184425829221015552/WhatsApp_Image_2023-12-13_at_16.22.56_ad94fb4d.jpg",
    "https://cdn.discordapp.com/attachments/1090127722455519252/1184425828625416213/WhatsApp_Image_2023-12-13_at_16.24.23_d3c58d7f.jpg",
    "https://cdn.discordapp.com/attachments/1090127722455519252/1184426842573250650/WhatsApp_Image_2023-12-13_at_16.27.23_67461e31.jpg",
    "https://cdn.discordapp.com/attachments/1090127722455519252/1184426842862665859/WhatsApp_Image_2023-12-13_at_16.26.25_faffbbcf.jpg",
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
