import cn from "classnames";
import styles from "./Item.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";
import Icon from "@/components/Icon";

type ItemProps = {
    className?: string;
    itemWrapClass?: string;
    item: any;
};

const Item = ({ className, itemWrapClass, item }: ItemProps) => {
    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code);
    };

    const codes = [
        { code: "ABCD1234EFG", expiryDate: "31/01/2024", used: false },
        { code: "HIJK5678LMN", expiryDate: "15/02/2024", used: true },
        { code: "OPQR9012STU", expiryDate: "28/02/2024", used: false },
        { code: "VWXZ3456YZA", expiryDate: "30/03/2024", used: true },
        { code: "BCDE7890FGH", expiryDate: "10/04/2024", used: false },
    ];

    codes.sort((a, b) => {
        if (a.code < b.code) {
            return -1;
        }
        if (a.code > b.code) {
            return 1;
        }
        return 0;
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
                                    <td>{item.code}</td>
                                    <td>{item.expiryDate}</td>
                                    <td>
                                        {item.used ? (
                                            <span
                                                className={styles.checkmarkIcon}
                                            >
                                                ✔️
                                            </span>
                                        ) : (
                                            <button
                                                className={styles.copyButton}
                                                onClick={() =>
                                                    copyToClipboard(item.code)
                                                }
                                            >
                                                Copy
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
            
            {/* <div className={styles.preview}>
                <div className={styles.inner}>
                    <Image
                        src={item.image}
                        width={497}
                        height={854}
                        alt="Technology"
                    />
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
                                    <td>{item.code}</td>
                                    <td>{item.expiryDate}</td>
                                    <td>
                                        {item.used ? (
                                            <span
                                                className={styles.checkmarkIcon}
                                            >
                                                ✔️
                                            </span>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    copyToClipboard(item.code)
                                                }
                                            >
                                                Copy
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <svg width="0" height="0" style={{ display: "block" }}>
                        <clipPath
                            id="polygonImage"
                            clipPathUnits="objectBoundingBox"
                        >
                            <path d="M0 0h.838c.017 0 .033.004.045.01l.05.028.047.026c.013.007.02.017.02.027V1H0V0z" />
                        </clipPath>
                    </svg>
                </div>
                <div
                    className={styles.square}
                    style={{ backgroundColor: item.color }}
                ></div>
            </div> */}
        </div>
    );
};

export default Item;
