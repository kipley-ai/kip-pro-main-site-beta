import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import toast from "react-hot-toast";
import { Copy, CopySuccess } from "iconsax-react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

type ItemProps = {
    className?: string;
    itemWrapClass?: string;
    item: any;
};

const Item = ({ className, itemWrapClass, item }: ItemProps) => {
    
    const itemsPerPage = 20;
    const [codes, setCodes] = useState<any[]>([]);
    const [isCopied, setIsCopied] = useState(Array(itemsPerPage).fill(false));
    const { address, isConnected } = useAccount();
    const router = useRouter();
    const [itemLengths, setItemLengths] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const pageCount = Math.ceil(itemLengths / itemsPerPage);

    const handlePageClick = (event: any) => {
        setCurrentPage(event.selected);
    }

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

    const formatDate = (dateString: string): string => {
        if (!dateString) {
            return "";
        }
        const givenDate = new Date(dateString);
        const formattedDate = givenDate.toLocaleDateString("en-GB");
        return formattedDate;
    };

    const isDateExpired = (validStart: string, validEnd: string | number): boolean => {
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

    useEffect(() => {
        const fetchInviteCodes = async () => {
            try {
                const response = await fetch("/api/campaigns/get-codes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ page: currentPage + 1, page_size: itemsPerPage, wallet_address: address }),
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
        <div className={cn(styles.item, className)}>
            <div className={cn(styles.wrap, itemWrapClass)}>
                <div className={cn("content", styles.content)}>
                    <h2>Invite Code</h2>
                    <p className={styles.updateNotice}>
                        Updated every 15 min
                    </p>
                </div>
            </div>

            <Card className={styles.card} url={item.url} color={item.color}>
                <div className={styles.content}>
                    {codes.length > 0 ? (
                        <table className={styles.invitationCodes}>
                            <thead>
                                <tr>
                                    <th>INVITE CODE</th>
                                    <th>EXPIRY DATE</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {codes.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            item.used ||
                                            isDateExpired(
                                                item.valid_start,
                                                item.valid_end,
                                            )
                                                ? styles.used
                                                : ""
                                        }
                                    >
                                        <td>{item.invite_code}</td>
                                        <td>{formatDate(item.valid_end)}</td>
                                        <td>
                                            {item.used ||
                                            isDateExpired(
                                                item.valid_start,
                                                item.valid_end,
                                            ) ? null : (
                                                <button
                                                    className={
                                                        styles.copyButton
                                                    }
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            item.invite_code,
                                                            index,
                                                        )
                                                    }
                                                >
                                                    {isCopied[index] ? (
                                                        <CopySuccess
                                                            size="32"
                                                            color="#01F7FF"
                                                            variant="Bold"
                                                        />
                                                    ) : (
                                                        <Copy
                                                            size="32"
                                                            color="#01F7FF"
                                                            variant="Bold"
                                                        />
                                                    )}
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            {
                                pageCount >= 1 && (
                                    <tfoot>
                                        <tr>
                                            <td colSpan={3}>
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
                                            </td>
                                        </tr>
                                    </tfoot>
                                )
                            }
                        </table>
                    ) : (
                        <div className={styles.completeTasks}>
                            <p>
                                Please complete Activation and Cycle Tasks to claim invite codes to share
                            </p>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default Item;
