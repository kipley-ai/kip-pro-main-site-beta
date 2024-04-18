import React, { useState } from "react";
import styles from "./TelegramModal.module.sass";
import ModalBlank from "@/components/ModalBlank";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TelegramModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <ModalBlank isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <div className={styles.title}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <g clipPath="url(#clip0_5186_47011)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.5 15.5C30.5 23.7843 23.7843 30.5 15.5 30.5C7.21573 30.5 0.5 23.7843 0.5 15.5C0.5 7.21573 7.21573 0.5 15.5 0.5C23.7843 0.5 30.5 7.21573 30.5 15.5ZM16.0375 11.5737C14.5786 12.1805 11.6627 13.4365 7.28987 15.3417C6.57979 15.624 6.20782 15.9003 6.17396 16.1704C6.11673 16.6269 6.68839 16.8066 7.46684 17.0514C7.57273 17.0847 7.68244 17.1192 7.79492 17.1558C8.5608 17.4047 9.59103 17.696 10.1266 17.7075C10.6124 17.718 11.1547 17.5177 11.7533 17.1067C15.8389 14.3488 17.948 12.9548 18.0804 12.9247C18.1738 12.9035 18.3032 12.8769 18.391 12.9548C18.4787 13.0328 18.47 13.1804 18.4608 13.22C18.4041 13.4614 16.1602 15.5476 14.9989 16.6272C14.6369 16.9638 14.3801 17.2025 14.3276 17.257C14.21 17.3792 14.0902 17.4947 13.975 17.6058C13.2635 18.2917 12.7299 18.806 14.0045 19.646C14.6171 20.0496 15.1072 20.3834 15.5962 20.7164C16.1302 21.0801 16.6629 21.4428 17.352 21.8946C17.5276 22.0097 17.6953 22.1292 17.8586 22.2457C18.4801 22.6887 19.0384 23.0868 19.7282 23.0233C20.1291 22.9864 20.5431 22.6095 20.7533 21.4854C21.2503 18.8289 22.227 13.0731 22.4528 10.7012C22.4726 10.4934 22.4477 10.2275 22.4277 10.1107C22.4077 9.99397 22.366 9.82763 22.2142 9.7045C22.0345 9.55867 21.757 9.52792 21.633 9.5301C21.0688 9.54004 20.2032 9.84102 16.0375 11.5737Z"
                fill="#FFE606"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_5186_47011">
                <rect
                  width="30"
                  height="30"
                  fill="white"
                  transform="translate(0.5 0.5)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <h1>CHOOSE A COUNTRY</h1>
        </div>
        <div className={styles.telegramLinks}>
          <a
            href="https://t.me/KIPProtocol_TR"
            target="_blank"
            rel="noreferrer"
            className={styles.telegramLink}
          >
            <h5 className={styles.telegramLinkTitle}>Turkey</h5>
          </a>
          <a
            href="https://t.me/KIPProtocol_VN"
            target="_blank"
            rel="noreferrer"
            className={styles.telegramLink}
          >
            <h5 className={styles.telegramLinkTitle}>Vietnam</h5>
          </a>
          <a
            href="https://t.me/KIPProtocol_CN"
            target="_blank"
            rel="noreferrer"
            className={styles.telegramLink}
          >
            <h5 className={styles.telegramLinkTitle}>China</h5>
          </a>
          <a
            href="https://t.me/KIPProtocol_IN"
            target="_blank"
            rel="noreferrer"
            className={styles.telegramLink}
          >
            <h5 className={styles.telegramLinkTitle}>India</h5>
          </a>
          <a
            href="https://t.me/KIPProtocol_KR"
            target="_blank"
            rel="noreferrer"
            className={styles.telegramLink}
          >
            <h5 className={styles.telegramLinkTitle}>Korea</h5>
          </a>
        </div>
      </div>
    </ModalBlank>
  );
};

export default TelegramModal;
