import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./InvitationCodes.module.sass";
import Image from "@/components/Image";
import Item from "./Item";

import { details } from "@/constants/detailsTechnology";

type InvitationCodesProps = {
    scrollToRef: any;
};

const InvitationCodes = ({ scrollToRef }: InvitationCodesProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            <div className={styles.list}>
                {details.map((x, index) => (
                    <Item
                        className={styles.item}
                        itemWrapClass={styles.wrap}
                        item={x}
                        key={index}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default InvitationCodes;
