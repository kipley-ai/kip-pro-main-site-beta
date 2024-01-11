import styles from "./Invites.module.sass";
import Image from "next/image";
import LoadingIcon from "public/loading-01.svg";
import InvitationCodeTable from "./InvitationCodeTable";

const Invites = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_container}>
                <h1>Invitation Code</h1>
                <div className={styles.header_description}>
                    <Image className={styles.loading_icon} src={LoadingIcon} width={12} height={12} alt="loading" />&nbsp;&nbsp;
                    <h6>Updated every 15 mins</h6>
                </div>
            </div>
            <InvitationCodeTable />
        </div>
    )
}

export default Invites;