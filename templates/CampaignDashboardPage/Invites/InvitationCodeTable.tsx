import styles from "./Invites.module.sass";
import Image from "next/image";
import CopyIcon from "public/copy-icon.svg";
import CheckIcon from "public/check-icon.svg";
import ShareIcon from "public/share-icon.svg";
import XIcon from "public/x-icon.svg";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { Pagination } from "../Leaderboard";
import Card from "@/components/Card";
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
        const currentDate = new Date().toLocaleString("en-GB", {
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
        <tr
            className={
                item.used || isDateExpired(item.valid_start, item.valid_end)
                    ? styles.used
                    : ""
            }
        >
            <td>{item.invite_code}</td>
            <td>{item.earned_points}</td>
            <td>
                {item.used_by_address && truncateAddress(item.used_by_address)}
            </td>
            <td>
                {item.used ||
                isDateExpired(item.valid_start, item.valid_end) ? null : (
                    <div className={styles.actionButtons}>
                        <button
                            className={styles.copyButton}
                            onClick={() =>
                                copyToClipboard(item.invite_code, index)
                            }
                        >
                            <Image
                                src={isCopied[index] ? CheckIcon : CopyIcon}
                                alt="copy"
                            />
                        </button>
                        <button
                            className={styles.copyButton}
                            onClick={() => shareText(item.invite_code)}
                        >
                            <Image src={ShareIcon} alt="share" />
                        </button>
                        <button
                            className={styles.copyButton}
                            onClick={() => shareX(item.invite_code)}
                        >
                            <Image src={XIcon} alt="X" />
                        </button>
                    </div>
                )}
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
            router.push("/campaigns");
            toast.error("Please connect your wallet first.");
        }
    }, [isConnected, address, router, currentPage]);

    return (
        <Card
            className={styles.card}
            innerCardClass={styles.inner}
            color="#01F7FF"
        >
            <div className={styles.content}>
                {codes.length > 0 ? (
                    <>
                        <table className={styles.invitationCodes}>
                            <thead>
                                <tr>
                                    <th>INVITE CODES</th>
                                    <th>EARNED POINTS*</th>
                                    <th>INVITEE</th>
                                    <th>ACTION</th>
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
                            *Points are distributed upon completion of tasks
                        </p>
                        {pageCount >= 1 && (
                            <div className={styles.pagination}>
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
                            </div>
                        )}
                    </>
                ) : (
                    <div className={styles.completeTasks}>
                        <p>
                            Please complete Activation and Cycle Tasks to claim
                            invite codes to share
                        </p>
                    </div>
                )}
            </div>
        </Card>
    );
};

export default InvitationCodeTable;
