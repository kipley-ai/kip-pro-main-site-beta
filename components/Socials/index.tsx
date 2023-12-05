import cn from "classnames";
import styles from "./Socials.module.sass";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

type SocialsType = {
  icon: string;
  href: string;
};

type SocialsProps = {
  className?: string;
  socialClassName?: string;
  socials: SocialsType[];
  dark?: boolean;
  large?: boolean;
};

const Socials = ({
  className,
  socialClassName,
  socials,
  dark,
  large,
}: SocialsProps) => (
  <div
    className={cn(
      styles.socials,
      { [styles.dark]: dark, [styles.large]: large },
      className
    )}
  >
    {socials.map((social, index) => (
      <a
        className={cn(styles.social, socialClassName)}
        href={social.href}
        target="_blank"
        rel="noreferrer"
        key={index}
      >
        {social.icon === "galxe" ? (
          <Image src="/02_Galxe_B_ Symbol_White.png" width={24} height={24} />
        ) : (
          <Icon name={social.icon} />
        )}
      </a>
    ))}
  </div>
);

export default Socials;
