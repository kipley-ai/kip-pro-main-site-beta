import styles from "./Invites.module.sass";
import Image from "next/image";
import InvitationCodeTable from "./InvitationCodeTable";

const Invites = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_container}>
                <h1>INVITE CODES</h1>
            </div>
            <InvitationCodeTable />
        </div>
    )
}

export default Invites;