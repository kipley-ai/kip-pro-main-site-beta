import styles from "./Invites.module.sass";
import Image from "next/image";
import LoadingIcon from "public/loading-01.svg";
import CopyIcon from "public/copy-icon.svg";
import CheckIcon from "public/check-icon.svg";
import { useState } from "react";

const InvitationCodeTable = () => {
    return (
        <table className={styles.body_container}>
            <thead>
                <tr className={styles.table_row}>
                    <th className={styles.table_item}>INVITE CODE</th>
                    <th className={styles.table_item}>EXPIRY DATE</th>
                    <th className={styles.table_item}></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={styles.table_item}>CODE911102</td>
                    <td className={styles.table_item}>27/12/2023</td>
                    <td className={styles.table_item}><Image src={CopyIcon} alt="copy"/></td>
                </tr>
                <tr>
                    <td className={styles.table_item}>CODE911034</td>
                    <td className={styles.table_item}>01/01/2024</td>
                    <td className={styles.table_item}><Image src={CopyIcon} alt="copy"/></td>
                </tr>
                <tr>
                    <td className={styles.table_item}>CODE911045</td>
                    <td className={styles.table_item}>10/11/2023</td>
                    <td className={styles.table_item}><Image src={CheckIcon} alt="copy"/></td>
                </tr>
                <tr>
                    <td className={styles.table_item}>CODE911067</td>
                    <td className={styles.table_item}>31/08/2023</td>
                    <td className={styles.table_item}><Image src={CheckIcon} alt="copy"/></td>
                </tr>
                <tr>
                    <td className={styles.table_item}>CODE911078</td>
                    <td className={styles.table_item}>07/09/2023</td>
                    <td className={styles.table_item}><Image src={CheckIcon} alt="copy"/></td>
                </tr>
                <tr>
                    <td className={styles.table_item}>CODE911089</td>
                    <td className={styles.table_item}>16/01/2024</td>
                    <td className={styles.table_item}><Image src={CopyIcon} alt="copy"/></td>
                </tr>
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
            {/* <FAQs /> */}
        </div>
    )
}

export default Invites;