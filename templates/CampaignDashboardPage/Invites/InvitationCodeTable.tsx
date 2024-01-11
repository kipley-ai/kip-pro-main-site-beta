import styles from "./Invites.module.sass";
import Image from "next/image";
import CopyIcon from "public/copy-icon.svg";
import CheckIcon from "public/check-icon.svg";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";
import { useState } from "react";
import { Pagination } from "../Leaderboard";

const dummyData = [
    {
        code: "CODE911102",
        expiryDate: "27/12/2023"
    },
    {
        code: "CODE911034",
        expiryDate: "01/01/2024"
    },
    {
        code: "CODE911045",
        expiryDate: "10/11/2023"
    },
    {
        code: "CODE911067",
        expiryDate: "31/08/2023"
    },
    {
        code: "CODE911078",
        expiryDate: "07/09/2023"
    },
    {
        code: "CODE911089",
        expiryDate: "16/01/2024"
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
]

const InvitationCodeTable = () => {
    const [clicked, setClicked] = useState([false, false, false, false, false, false])

    const clickHandler = (index: number) => {
        const newClicked = [...clicked];
        newClicked[index] = true;
        setClicked(newClicked);
    }

    const copyHandler = (inviteCode: string, index: number) => {
        navigator.clipboard.writeText(inviteCode);
        clickHandler(index);
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>INVITE CODE</th>
                    <th>EXPIRY DATE</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ textDecoration: clicked[index] ? 'line-through' : 'none' }}>{item.code}</td>
                                <td>{item.expiryDate}</td>
                                <td><Image src={clicked[index] ? CheckIcon : CopyIcon} alt="copy" onClick={() => copyHandler(item.code, index)} /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                    <Pagination />
            </tfoot>
        </table>
    )
}

export default InvitationCodeTable;