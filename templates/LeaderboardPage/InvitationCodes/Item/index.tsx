import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import { useWeb3Context } from "@/components/GetInvolvedButton/Web3Context";
import toast from "react-hot-toast";
import { Copy, CopySuccess } from "iconsax-react";

type ItemProps = {
    className?: string;
    itemWrapClass?: string;
    item: any;
};

const Item = ({ className, itemWrapClass, item }: ItemProps) => {
    const [codes, setCodes] = useState<any[]>([]);
    const [isCopied, setIsCopied] = useState(Array(5).fill(false));
    const { account } = useWeb3Context();

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

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are 0-based
        const year = date.getFullYear().toString();

        return `${day}/${month}/${year}`;
    };

    // const codes = [
    //     { code: "ABCD1234EFG", expiryDate: "31/01/2024", used: false },
    //     { code: "HIJK5678LMN", expiryDate: "15/02/2024", used: true },
    //     { code: "OPQR9012STU", expiryDate: "28/02/2024", used: false },
    //     { code: "VWXZ3456YZA", expiryDate: "30/03/2024", used: true },
    //     { code: "BCDE7890FGH", expiryDate: "10/04/2024", used: false },
    // ];

    // codes.sort((a, b) => {
    //     if (a.code < b.code) {
    //         return -1;
    //     }
    //     if (a.code > b.code) {
    //         return 1;
    //     }
    //     return 0;
    // });

    useEffect(() => {
        // Function to call the API
        const fetchInviteCodes = async () => {
            try {
                const response = await fetch("/api/campaigns/get-codes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ wallet_address: account }),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setCodes(data);
            } catch (err: any) {
                console.error(err.message);
                toast.error("Error fetching invite codes.");
            }
        };

        if (account) {
            fetchInviteCodes();
        }
    });

    return (
        <div className={cn(styles.item, className)}>
            <div className={cn(styles.wrap, itemWrapClass)}>
                <div className={cn("content", styles.content)}>
                    {item.content}
                </div>
            </div>

            <Card className={styles.card} url={item.url} color={item.color}>
                <div className={styles.content}>
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
                                    className={item.used ? styles.used : ""}
                                >
                                    <td>{item.invite_code}</td>
                                    <td>{formatDate(item.valid_end)}</td>
                                    <td>
                                        {false ? (
                                            <span
                                                className={styles.checkmarkIcon}
                                            >
                                                ✔️
                                            </span>
                                        ) : (
                                            <button
                                                className={styles.copyButton}
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
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Item;
