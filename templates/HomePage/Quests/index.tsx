import Link from "next/link";
import cn from "classnames";
import styles from "./Quests.module.sass";
import Image from "@/components/Image";
import ImageGallery from "./ImageGallery";
import Socials from "@/components/Socials";

const socials = [
    {
        icon: "discord",
        href: "https://discord.gg/Hma2Y6RgND",
    },
    {
        icon: "x",
        href: "https://x.com/KIPprotocol",
    },
];

type QuestsProps = {
    scrollToRef: any;
};

const Quests = ({ scrollToRef }: QuestsProps) => (
    <>
        <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
        <div className={cn("section", styles.section)}>
            <ImageGallery />
            <div className={styles.wrap}>
                <div className={cn("content", styles.content)}>
                    <a
                        href={
                            "https://galxe.com/KIPProtocol/campaign/GCQH3tUYcq"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("h2", styles.join)}
                    >
                        Join our Community Campaigns on Galxe
                    </a>
                    <h3>And follow us on</h3>
                    <Socials className={styles.socials} socials={socials} />
                </div>
            </div>
        </div>
    </>
);

export default Quests;
