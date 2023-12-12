import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";
import Image from "@/components/Image";

type LogoProps = {
    className?: string;
    onClick?: () => void;
};

const Logo = ({ className, onClick }: LogoProps) => (
    <Link href="/">
        <a className={cn(styles.logo, className)} onClick={onClick}>
            <Image
                src="/images/KIP.svg"
                width={150}
                height={40}
                alt="KIP Logo"
                priority
            />
        </a>
    </Link>
);

export default Logo;
