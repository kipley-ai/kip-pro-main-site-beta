import Card from "@/components/Card";
import Faq from "@/templates/LeaderboardPage/Faq";
import styles from "./Leaderboard.module.sass";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";
import axios from "axios";
import LoadingIcon from "public/loading-01.svg";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { redeemNft, setMinter } from "@/smart-contract/KipAirdrop";

function Leaderboard() {
    const { address } = useAccount();
    const [itemLengths, setItemLengths] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const pageCount = Math.ceil(itemLengths / itemsPerPage);
    const [data, setData] = useState([]);
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
                    page: 1,
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
    }, [currentPage, address]);

    const handlePageClick = (event: any) => {
        setCurrentPage(event.selected);
    };

    return (
        <div className={styles.container}>
            <div className={styles.ledContainer}>
                <div className={styles.leaderboardText}>Leaderboard</div>
                <div className={styles.ledUpdated}>
                    <Image
                        className={styles.loading_icon}
                        src={LoadingIcon}
                        width={12}
                        height={12}
                        alt="loading"
                    />
                    &nbsp;&nbsp;
                    <h1>Updated every 12 hours</h1>
                </div>
                <Card
                    className={styles.card}
                    innerCardClass={styles.inner}
                    color="#01F7FF"
                >
                    <div className={styles.content}>
                        <>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>RANKING</th>
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
                                                <td>{myDataRank.rank}</td>
                                                <td>
                                                    {myDataRank.wallet_address.slice(
                                                        0,
                                                        6,
                                                    )}
                                                    ...
                                                    {myDataRank.wallet_address.slice(
                                                        -6,
                                                    )}
                                                </td>
                                                <td>
                                                    <div
                                                        className={
                                                            styles.myScore
                                                        }
                                                    >
                                                        My Points
                                                    </div>
                                                    <div
                                                        className={styles.myRow}
                                                    >
                                                        {myDataRank.points}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr
                                            className={styles.userData}
                                            key={address}
                                        >
                                            <td>-</td>
                                            <td>
                                                {address?.slice(0, 6)}
                                                ...
                                                {address?.slice(-6)}
                                            </td>
                                            <td>
                                                <div className={styles.myScore}>
                                                    My Points
                                                </div>
                                                <div className={styles.myRow}>
                                                    0
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                    {data.length > 0 ? (
                                        data?.map((row: any) => (
                                            <tr key={row.wallet_address}>
                                                <td>{row.rank}</td>
                                                <td>
                                                    {row.wallet_address.slice(
                                                        0,
                                                        6,
                                                    )}
                                                    ...
                                                    {row.wallet_address.slice(
                                                        -6,
                                                    )}
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
                                                    className={
                                                        styles.pagination
                                                    }
                                                    previousLabel={"<"}
                                                    nextLabel={">"}
                                                    breakLabel={"..."}
                                                    pageCount={pageCount}
                                                    onPageChange={
                                                        handlePageClick
                                                    }
                                                    forcePage={currentPage}
                                                    pageRangeDisplayed={3}
                                                    marginPagesDisplayed={1}
                                                    pageLinkClassName={
                                                        styles.pageLink
                                                    }
                                                    activeLinkClassName={
                                                        styles.activeLink
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    </tfoot>
                                )}
                            </table>
                        </>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Leaderboard;
