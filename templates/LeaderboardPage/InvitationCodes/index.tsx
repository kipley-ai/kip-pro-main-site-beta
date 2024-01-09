import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./InvitationCodes.module.sass";
import Image from "@/components/Image";
import Item from "./Item";
import LeaderboardTable from "../Leaderboard/LeaderboardTable";
import Icon from "@/components/Icon";

import { details } from "@/constants/detailsTechnology";
import { leaderboardAccounts } from "@/mocks/leaderboard";

type InvitationCodesProps = {
    scrollToRef: any;
};

const InvitationCodes = ({ scrollToRef }: InvitationCodesProps) => (
    <div className={cn("section", styles.section)}>
        {/* <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div> */}
        <div className={cn("container", styles.container)}>
            <div className={styles.backArrow}>
                <a
                    className={styles.apply}
                    href={"/campaigns"}
                >
                    <Icon name="arrow-right" size="26" /> BACK TO GENESIS CAMPAIGN
                </a>
            </div>
            <div className={styles.firstRow}>
                {details.map((x, index) => (
                    <Item
                        className={styles.item}
                        itemWrapClass={styles.wrap}
                        item={x}
                        key={index}
                    />
                ))}

                <div className={styles.leaderboard}>
                    <div className={cn("h2", styles.title)}>Leaderboard</div>
                    {/* <div className={cn("p", styles.subtitle)}>
                        Follow us on Twitter today and experience the power of
                        Knowledge in your life!
                    </div> */}
                    <LeaderboardTable />
                </div>
            </div>
        </div>
    </div>
);

export default InvitationCodes;
