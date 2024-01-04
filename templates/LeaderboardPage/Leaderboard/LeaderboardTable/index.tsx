import React from "react";
import Image from "next/image";
import styles from "./LeaderboardTable.module.sass";

type UserProfile = {
    position: number;
    profilePic: string;
    fullName: string;
    username: string;
    twitter: string;
    discord: string;
    address: string;
    loyaltyPoints: number;
};

const LeaderboardTable: React.FC<{ users: UserProfile[] }> = ({ users }) => (
    <table className={styles.userProfileTable}>
        <thead>
            <tr>
                <th></th>
                {/* <th>Name</th>
                <th>Twitter</th>
                <th>Discord</th> */}
                <th>WALLET</th>
                <th>POINTS</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user.position}>
                    <td>{user.position}</td>
                    {/* <td className={styles.user}>
                        <Image
                            src={user.profilePic}
                            alt={user.fullName}
                            width={55}
                            height={55}
                        />
                        <div className={styles.userDetails}>
                            <div className={styles.fullName}>
                                {user.fullName}
                            </div>
                            <div className={styles.username}>
                                {user.username}
                            </div>
                        </div>
                    </td>
                    <td>{user.twitter}</td>
                    <td>{user.discord}</td> */}
                    <td>
                        {user.address.slice(0, 6)}...{user.address.slice(-6)}
                    </td>
                    <td>{user.loyaltyPoints}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default LeaderboardTable;
