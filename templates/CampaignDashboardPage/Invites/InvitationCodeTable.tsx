import styles from "./Invites.module.sass";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

type TableRowProps = {
    item: any;
    index: number;
    itemsPerPage: number;
};

const TableRow = ({ item, index, itemsPerPage }: TableRowProps) => {
    const [isCopied, setIsCopied] = useState(Array(itemsPerPage).fill(false));

    const copyToClipboard = (code: string, index: number) => {
        navigator.clipboard.writeText(code);
        setIsCopied((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
        setTimeout(() => {
            setIsCopied((prevState) => {
                const newState = [...prevState];
                newState[index] = false;
                return newState;
            });
        }, 2000);
    };

    const shareText = (code: string) => {
        const text = `GM Farmoors. I got an extra KIP code for you to start farming $KIP on KIP Protocol.\nGo to https://kip.pro/campaigns and enter the invite code:\n\n👉🏻 ${code}\n\nEach code is only available for a single use.\nStay Smort. Stay Knawligible🧠`;

        navigator.clipboard.writeText(text);
        toast.success("Copy Invite Link Successfully");
    };

    const shareX = (code: string) => {
        const text = `GM Farmoors. I got an extra KIP code for you to start farming $KIP on KIP Protocol.\nGo to https://kip.pro/campaigns and enter the invite code:\n\n👉🏻 ${code}\n\nEach code is only available for a single use.\nStay Smort. Stay Knawligible🧠`;
        const twitterIntentText = encodeURIComponent(text);
        const link = `https://twitter.com/intent/tweet?text=${twitterIntentText}`;
        window.open(link, "_blank");
    };

    const isDateExpired = (
        validStart: string,
        validEnd: string | number,
    ): boolean => {
        const validStartDate = new Date(validStart);
        const validEndDate = new Date(validEnd);
        const currentDate = new Date().toLocaleString(undefined, {
            timeZone: "UTC",
        });
        const validStartTimestamp = new Date(validStartDate).getTime();
        const validEndTimestamp = new Date(validEndDate).getTime();
        const currentTimestamp = new Date(currentDate).getTime();

        if (!validEnd) {
            if (currentTimestamp < validStartTimestamp) {
                return true;
            }
            return false;
        }

        return (
            currentTimestamp < validStartTimestamp ||
            currentTimestamp > validEndTimestamp
        );
    };

    const truncateAddress = (address: string): string => {
        return `${address.slice(0, 6)}...${address.slice(-6)}`;
    };

    return (
        <tr className={item.used ? styles.used : ""}>
            <td>{item.invite_code}</td>
            <td>{item.earned_points}</td>
            <td>
                {item.used_by_address && truncateAddress(item.used_by_address)}
            </td>
        </tr>
    );
};

const InvitationCodeTable = () => {
    const itemsPerPage = 10;
    const [codes, setCodes] = useState<any[]>([]);
    const { address, isConnected } = useAccount();
    const router = useRouter();
    const [itemLengths, setItemLengths] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const pageCount = Math.ceil(itemLengths / itemsPerPage);

    const handlePageClick = (event: any) => {
        setCurrentPage(event.selected);
    };

    useEffect(() => {
        const fetchInviteCodes = async () => {
            try {
                const response = await fetch("/api/campaigns/get-codes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        page: currentPage + 1,
                        page_size: itemsPerPage,
                        wallet_address: address,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setCodes(data.code_list);
                setItemLengths(data.code_count);
            } catch (err: any) {
                console.error(err.message);
                toast.error(err.message);
            }
        };

        if (isConnected) {
            fetchInviteCodes();
        } else {
            router.push("/");
            toast.error("Please connect your wallet first.", {
                id: "not-connected",
            });
        }
    }, [isConnected, address, router, currentPage]);

    return (
            <div className={styles.content}>
                {codes.length > 0 ? (
                    <>
                        <table className={styles.invitationCodes}>
                            <thead>
                                <tr>
                                    <th>Invite Codes</th>
                                    <th>Earned Points*</th>
                                    <th>Invitee</th>
                                </tr>
                            </thead>
                            <tbody>
                                {codes.map((item, index) => (
                                    <TableRow
                                        key={index}
                                        item={item}
                                        index={index}
                                        itemsPerPage={itemsPerPage}
                                    />
                                ))}
                            </tbody>
                        </table>
                        <p className={styles.asteriskNote}>
                            *Invite codes with no earned points will be converted to 50 points per code.
                        </p>
                        {pageCount >= 1 && (
                            <>
                                <ReactPaginate
                                    className={styles.pagination+ " pagination__leaderboard"}
                                    previousLabel={
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 16.6004L7.5667 11.1671C6.92503 10.5254 6.92503 9.47539 7.5667 8.83372L13 3.40039" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    }
                                    nextLabel={
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.9248 16.6004L13.3581 11.1671C13.9998 10.5254 13.9998 9.47539 13.3581 8.83372L7.9248 3.40039" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    }
                                    breakLabel={"..."}
                                    pageCount={pageCount}
                                    onPageChange={handlePageClick}
                                    forcePage={currentPage}
                                    pageRangeDisplayed={3}
                                    marginPagesDisplayed={1}
                                    pageLinkClassName={styles.pageLink}
                                    activeLinkClassName={styles.activeLink}
                                />
                            </>
                        )}
                    </>
                ) : (
                    <div className={styles.completeTasks}>
                        <p>
                            Genesis Campaign has ended. Stay tuned for next season! 
                        </p>
                    </div>
                )}
            </div>
    );
};

export default InvitationCodeTable;
