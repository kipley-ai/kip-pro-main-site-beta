import Faq from "@/templates/LeaderboardPage/Faq";
import styles from "./Leaderboard.module.sass";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";
import axios from "axios";
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
    }, [currentPage]);

    const handlePageClick = (event: any) => {
        // const newOffset = (event.selected * itemsPerPage) % data.length;
        setCurrentPage(event.selected);
    };

    const handleRedeemNft = async () => {
        try {
            const res = await redeemNft();
            toast.success("NFT Minted");
        } catch (error: any) {
            toast.error(error.reason);
        }
    };

    return (
        <div>
            <div className={styles.container}>
                <div>
                    {/* <div className={styles.nftContainer}>
                        <div className={styles.nftBlue} />
                        <div className={styles.nftPict}>
                            <Image
                                style={{
                                    borderRadius: "24px",
                                }}
                                width={0}
                                height={0}
                                sizes="100vw"
                                src="/images/NFT-image.png"
                                alt="NFT Image"
                            />
                        </div>
                    </div> */}
                    {/* <div className={styles.score}>Your Score: 99</div>
                    <div className={styles.redeem}>
                        REDEEM NFT
                        <svg
                            style={{
                                position: "absolute",
                                top: -3,
                                left: 0,
                            }}
                            width="234"
                            height="60"
                            viewBox="0 0 234 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5L1.5 56.5C1.5 57.6046 2.39543 58.5 3.5 58.5H6.5"
                                stroke="#01F7FF"
                                stroke-width="2"
                            />
                            <rect
                                x="6.5"
                                y="0.5"
                                width="210"
                                height="2"
                                fill="#01F7FF"
                            />
                            <rect
                                x="6.5"
                                y="57.5"
                                width="210"
                                height="2"
                                fill="#01F7FF"
                            />
                            <path
                                d="M216.5 1.5H218.086C218.732 1.5 219.338 1.81213 219.713 2.338L232.128 19.7289C232.37 20.068 232.5 20.4742 232.5 20.8909V56.5C232.5 57.6046 231.605 58.5 230.5 58.5H216.5"
                                stroke="#01F7FF"
                                stroke-width="2"
                            />
                        </svg>
                    </div> */}
                </div>
                <div className={styles.ledContainer}>
                    <div className={styles.leaderboardText}>Leaderboard</div>
                    <div className={styles.ledUpdated}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="12"
                            viewBox="0 0 13 12"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.5 0.625C6.77614 0.625 7 0.848858 7 1.125V2.375C7 2.65114 6.77614 2.875 6.5 2.875C6.22386 2.875 6 2.65114 6 2.375V1.125C6 0.848858 6.22386 0.625 6.5 0.625Z"
                                fill="#D9D9D9"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.5 8.5C6.77614 8.5 7 8.72386 7 9V11C7 11.2761 6.77614 11.5 6.5 11.5C6.22386 11.5 6 11.2761 6 11V9C6 8.72386 6.22386 8.5 6.5 8.5Z"
                                fill="#D9D9D9"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1.125 6C1.125 5.72386 1.34886 5.5 1.625 5.5H3.375C3.65114 5.5 3.875 5.72386 3.875 6C3.875 6.27614 3.65114 6.5 3.375 6.5H1.625C1.34886 6.5 1.125 6.27614 1.125 6Z"
                                fill="#D9D9D9"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.875 6C9.875 5.72386 10.0989 5.5 10.375 5.5H11.125C11.4011 5.5 11.625 5.72386 11.625 6C11.625 6.27614 11.4011 6.5 11.125 6.5H10.375C10.0989 6.5 9.875 6.27614 9.875 6Z"
                                fill="#D9D9D9"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.02145 8.52145C9.21671 8.32618 9.53329 8.32618 9.72855 8.52145L10.0821 8.875C10.2774 9.07026 10.2774 9.38684 10.0821 9.58211C9.88684 9.77737 9.57026 9.77737 9.375 9.58211L9.02145 9.22855C8.82618 9.03329 8.82618 8.71671 9.02145 8.52145Z"
                                fill="#D9D9D9"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.1857 2.35434C10.3809 2.5496 10.3809 2.86618 10.1857 3.06145L9.47855 3.76855C9.28329 3.96382 8.96671 3.96382 8.77145 3.76855C8.57618 3.57329 8.57618 3.25671 8.77145 3.06145L9.47855 2.35434C9.67382 2.15908 9.9904 2.15908 10.1857 2.35434Z"
                                fill="#D9D9D9"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.72855 7.77145C4.92382 7.96671 4.92382 8.28329 4.72855 8.47855L3.31434 9.89277C3.11908 10.088 2.8025 10.088 2.60723 9.89277C2.41197 9.6975 2.41197 9.38092 2.60723 9.18566L4.02145 7.77145C4.21671 7.57618 4.53329 7.57618 4.72855 7.77145Z"
                                fill="#D9D9D9"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.71079 2.25079C2.90605 2.05552 3.22263 2.05552 3.41789 2.25079L4.47855 3.31145C4.67382 3.50671 4.67382 3.82329 4.47855 4.01855C4.28329 4.21382 3.96671 4.21382 3.77145 4.01855L2.71079 2.95789C2.51552 2.76263 2.51552 2.44605 2.71079 2.25079Z"
                                fill="#D9D9D9"
                            />
                        </svg>
                        <h1>Updated every 12 hours</h1>
                    </div>
                    <div
                        style={{
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                right: 7,
                                top: 7,
                                background: "#01F7FF",
                                width: 105,
                                height: 80,
                                borderRadius: 24,
                            }}
                        ></div>
                        <div className={styles.ledTable}>
                            <div className={styles.tableContainer}>
                                {/* <div className={styles.ledSearch}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                        style={{
                                            marginRight: "4px",
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18 11.5C18 15.366 14.866 18.5 11 18.5C7.13401 18.5 4 15.366 4 11.5C4 7.63401 7.13401 4.5 11 4.5C14.866 4.5 18 7.63401 18 11.5ZM18.0319 17.1177C19.2635 15.578 20 13.625 20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5C13.125 20.5 15.078 19.7635 16.6177 18.5319L19.2929 21.2071C19.6834 21.5976 20.3166 21.5976 20.7071 21.2071C21.0976 20.8166 21.0976 20.1834 20.7071 19.7929L18.0319 17.1177Z"
                                            fill="#6F767E"
                                        />
                                    </svg>
                                    <input
                                        style={{
                                            background: "transparent",
                                            width: "100%",
                                        }}
                                        type="text"
                                        placeholder="Search by username or email"
                                    />
                                </div> */}
                                <div>
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
                                                myData?.map(
                                                    (myDataRank: any) => (
                                                        <tr className={styles.userData}
                                                            key={myDataRank.wallet_address}>
                                                            <td>{ myDataRank.rank }</td>
                                                            <td>
                                                                {myDataRank.wallet_address.slice(0, 6)}
                                                                ...
                                                                {myDataRank.wallet_address.slice(-6)}
                                                            </td>
                                                            <td>
                                                                <div className={styles.myScore}>
                                                                    My Points
                                                                </div>
                                                                <div className={styles.myRow}>
                                                                    { myDataRank.points }
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                )
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
                                                        <div className={styles.myRow}>0</div>
                                                    </td>
                                                </tr>
                                            )}
                                            {data.length > 0 ? (
                                                data?.map((row: any) => (
                                                    <tr key={row.wallet_address}>
                                                        <td>{row.rank}</td>
                                                        {/* <td className={styles.user}>
                                                    <td>
                                                        <div className={styles.myScore}>My Points</div>
                                                        <div className={styles.myRow}>{myDataRank.points}</div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) :
                                            <tr
                                                className={styles.userData}
                                                key={address}
                                            >
                                                <td>-</td>
                                                <td>
                                                    {address?.slice(0, 6)}...
                                                    {address?.slice(-6)}
                                                </td>
                                                <td>
                                                    <div className={styles.myScore}>My Points</div>
                                                    <div className={styles.myRow}>0</div>
                                                </td>
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
                                                            {row.wallet_address.slice(0,6)}
                                                            ...
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Faq /> */}
        </div>
    );
}

export default Leaderboard;

export function Pagination() {
    return (
        <div className={styles.pagContainer}>
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path
                        d="M12.5005 16.6L7.06719 11.1667C6.42552 10.525 6.42552 9.47503 7.06719 8.83336L12.5005 3.40002"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>...</div>
            <div>10</div>
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path
                        d="M7.42578 16.6L12.8591 11.1667C13.5008 10.525 13.5008 9.47503 12.8591 8.83336L7.42578 3.40002"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
}
