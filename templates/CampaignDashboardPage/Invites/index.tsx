import styles from "./Invites.module.sass";
import Image from "next/image";
import LoadingIcon from "public/loading-01.svg";
import CopyIcon from "public/copy-icon.svg";
import CheckIcon from "public/check-icon.svg";
import { useState } from "react";

const InvitationCodeTable = () => {
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
        }
    ]
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
        </table>
    )
}

// const FAQs = () => {
//     return (
//         <div className={styles.faq_container}>
//             <div className={styles.faq_header}>
//                 <h1>FAQs</h1>
//             </div>
//             <div className={styles.faq_body}>
//                 <div className={styles.faq_item}>
//                     <div className={styles.faq_item_header}>
//                         <h1>Who can join the project?</h1>
//                         <Image src={CollapseIcon} alt="collapse"/>
//                     </div>
//                     <h5 className={styles.faq_item_description}>Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes. Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystokres. Stay current on the latest KIP project developments, news, and content, updated daily. Stay current on the latest KIP project developments, news, and content, updated daily.</h5>
//                 </div>
//                 <div className={styles.faq_item}>
//                     <div className={styles.faq_item_header}>
//                         <h1>What is On-point service</h1>
//                         <Image src={ExpandIcon} alt="expand"/>
//                     </div>
//                     <h5 className={styles.faq_item_description}></h5>
//                 </div>
//                 <div className={styles.faq_item}>
//                     <div className={styles.faq_item_header}>
//                         <h1>How to apply?</h1>
//                         <Image src={ExpandIcon} alt="expand"/>
//                     </div>
//                     <h5 className={styles.faq_item_description}></h5>
//                 </div>
//             </div>
//         </div>
//     )
// }

const Invites = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_container}>
                <h1>Invitation Code</h1>
                <div className={styles.header_description}>
                    <Image className={styles.loading_icon} src={LoadingIcon} width={12} height={12} alt="loading" />&nbsp;&nbsp;
                    <h6>Updated every 15 mins</h6>
                </div>
            </div>
            <InvitationCodeTable />
        </div>
    )
}

export default Invites;