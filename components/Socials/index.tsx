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
          <svg
            width="24"
            height="24"
            viewBox="0 0 280 281"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M181.104 130.117C120.986 180.213 61.1433 230.089 0.64823 280.509C0.313192 277.533 1.85963 276.57 2.81172 275.426C47.0206 222.278 91.2498 169.148 135.486 116.024C164.165 81.5829 192.717 47.0359 221.604 12.7706C235.765 -4.02752 260.574 -3.4637 273.141 13.3988C282.719 26.249 281.768 44.8851 269.88 55.7851C257.491 67.1444 244.254 77.5818 231.337 88.3621C214.711 102.238 198.035 116.054 181.104 130.117Z"
              fill="#808080"
            />
            <path
              d="M50.4645 79.489C66.6657 57.8948 82.6181 36.5624 98.6529 15.2922C106.24 5.22746 117.594 2.51219 127.242 8.26008C140.151 15.9505 141.016 33.9629 128.762 43.181C93.6411 69.6006 58.4648 95.9465 23.252 122.243C21.215 123.765 19.6364 126.165 15.125 126.678C27.3122 110.405 38.7808 95.0906 50.4645 79.489Z"
              fill="#808080"
            />
            <path
              d="M211.268 185.293C219.882 173.83 228.28 162.652 236.656 151.457C242.095 144.189 249.421 141.364 258.156 143.148C266.552 144.863 272.189 150.198 273.91 158.664C275.709 167.519 273.1 174.977 265.566 180.61C229.447 207.616 193.401 234.72 157.328 261.788C156.284 262.572 155.383 263.625 152.32 263.8C172.327 237.147 191.685 211.359 211.268 185.293Z"
              fill="#808080"
            />
          </svg>
        ) : (
          <Icon name={social.icon} />
        )}
      </a>
    ))}
  </div>
);

export default Socials;
