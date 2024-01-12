import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import styles from "./LeaderboardTable.module.sass";
import axios from "axios";
import { User, UserSearch } from "iconsax-react";
import { useAccount } from "wagmi";
import getLeaderboardRankings from "pages/api/leaderboard";
import toast from "react-hot-toast";
import { pageExtensions } from "next.config";

const LeaderboardTable = () => {
    const { address } = useAccount();
    const [data, setData] = useState([]);
    const [itemLengths, setItemLengths] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        const handleLeaderboardRankings = async () => {
            try {
                const response = await axios.post("/api/leaderboard", {
                    page: currentPage + 1,
                    page_size: itemsPerPage,
                    wallet_address: "",
                });
                // console.log(data);
                if (response.status !== 200) {
                    throw new Error();
                }
                setData(response.data.ranking_list);
                setItemLengths(response.data.code_count);

                const myAccountData = await axios.post("/api/leaderboard", {
                    page: currentPage + 1,
                    page_size: itemsPerPage,
                    wallet_address: address,
                });
                if (response.status !== 200) {
                    throw new Error();
                }
                setMyData(myAccountData.data.ranking_list);
            } catch (error: any) {
                console.error("Error:", error.response.data.message);
                toast.error(error.response.data.message);
                throw error;
            }
        };
        handleLeaderboardRankings();
    }, [currentPage]);

    const pageCount = Math.ceil(itemLengths / itemsPerPage);
    //console.log(data)

    const handlePageClick = (event: any) => {
        // const newOffset = (event.selected * itemsPerPage) % data.length;
        setCurrentPage(event.selected);
    };
    console.log(myData);

    return (
        <table className={styles.userProfileTable}>
            <thead>
                <tr>
                    <th>RANKING</th>
                    {/* <th>Name</th>
                    <th>Twitter</th>
                    <th>Discord</th> */}
                    <th>ADDRESS</th>
                    <th>POINTS</th>
                </tr>
            </thead>
            <tbody>
                {myData.length !== 0 ? (
                    myData?.map((myDataRank: any) => (
                        <tr
                            className={styles.userData}
                            key={myDataRank.wallet_address}
                        >
                            <td>
                                <div className={styles.myScore}>My Points</div>
                                <div className={styles.myRow}>
                                    {myDataRank.rank}
                                </div>
                            </td>
                            <td>
                                {myDataRank.wallet_address.slice(0, 6)}...
                                {myDataRank.wallet_address.slice(-6)}
                            </td>
                            <td>{myDataRank.points}</td>
                        </tr>
                    ))
                ) :
                    <tr
                        className={styles.userData}
                        key={address}
                    >
                        <td>
                            <div className={styles.myScore}>My Points</div>
                            <div className={styles.myRow}>
                                -
                            </div>
                        </td>
                        <td>
                            {address?.slice(0, 6)}...
                            {address?.slice(-6)}
                        </td>
                        <td>0</td>
                    </tr>
                }
                {data.length > 0 ? (
                    data?.map((row: any) => (
                        <tr key={row.wallet_address}>
                            <td>{row.rank}</td>
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
                                {row.wallet_address.slice(0, 6)}...
                                {row.wallet_address.slice(-6)}
                            </td>
                            <td>{row.points}</td>
                        </tr>
                    ))
                ) : (
                    <></>
                )}
            </tbody>
            {pageCount >= 1 && (
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            <ReactPaginate
                                className={styles.pagination}
                                previousLabel={"<"}
                                nextLabel={">"}
                                breakLabel={"..."}
                                pageCount={pageCount}
                                onPageChange={handlePageClick}
                                forcePage={currentPage}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                pageLinkClassName={styles.pageLink}
                                activeLinkClassName={styles.activeLink}
                            />
                        </td>
                    </tr>
                </tfoot>
            )}
        </table>
    );
};

// const LeaderboardTable: React.FC<{ users: UserProfile[] }> = ({ users }) => (
//     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//     const {address, isConnected } = useAccount();

//     return (
//         <table className={styles.userProfileTable}>
//             <thead>
//                 <tr>
//                     <th></th>
//                     <th>Name</th>
//                 <th>Twitter</th>
//                 <th>Discord</th>
//                     <th>WALLET</th>
//                     <th>POINTS</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {users.map((user) => (
//                     <tr key={user.position}>
//                         <td>{user.position}</td>
//                         <td className={styles.user}>
//                         <Image
//                             src={user.profilePic}
//                             alt={user.fullName}
//                             width={55}
//                             height={55}
//                         />
//                         <div className={styles.userDetails}>
//                             <div className={styles.fullName}>
//                                 {user.fullName}
//                             </div>
//                             <div className={styles.username}>
//                                 {user.username}
//                             </div>
//                         </div>
//                     </td>
//                     <td>{user.twitter}</td>
//                     <td>{user.discord}</td>
//                         <td>
//                             {user.address.slice(0, 6)}...{user.address.slice(-6)}
//                         </td>
//                         <td>{user.loyaltyPoints}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     )
// );

export default LeaderboardTable;
