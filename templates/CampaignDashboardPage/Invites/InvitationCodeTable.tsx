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

const dummyData = [
    {
        code: "CODE911102",
        expiryDate: "27/12/2023",
    },
    {
        code: "CODE911034",
        expiryDate: "01/01/2024",
    },
    {
        code: "CODE911045",
        expiryDate: "10/11/2023",
    },
    {
        code: "CODE911067",
        expiryDate: "31/08/2023",
    },
    {
        code: "CODE911078",
        expiryDate: "07/09/2023",
    },
    {
        code: "CODE911089",
        expiryDate: "16/01/2024",
    },
    // {
    //     code: "CODE911090",
    //     expiryDate: "22/03/2024"
    // },
    // {
    //     code: "CODE911091",
    //     expiryDate: "05/06/2023"
    // },
    // {
    //     code: "CODE911092",
    //     expiryDate: "14/09/2023"
    // },
    // {
    //     code: "CODE911093",
    //     expiryDate: "30/11/2023"
    // },
    // {
    //     code: "CODE911094",
    //     expiryDate: "12/02/2024"
    // },
    // {
    //     code: "CODE911095",
    //     expiryDate: "19/05/2024"
    // }
];

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
                            onClick={() => {
                                return null;
                            }}
                        >
                            <Image src={ShareIcon} alt="share" />
                        </button>
                        <button
                            className={styles.copyButton}
                            onClick={() => {
                                return null;
                            }}
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
    const itemsPerPage = 20;
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
        <Card className={styles.card} color="#01F7FF">
            <div className={styles.content}>
                {codes.length > 0 ? (
                    <table className={styles.invitationCodes}>
                        <thead>
                            <tr>
                                <th>INVITE CODES</th>
                                <th>EARNED POINTS</th>
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
                        {pageCount >= 1 && (
                            <tfoot>
                                <tr>
                                    <td colSpan={4}>
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
                                                pageLinkClassName={
                                                    styles.pageLink
                                                }
                                                activeLinkClassName={
                                                    styles.activeLink
                                                }
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        )}
                    </table>
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
