import getIntl from "@app/intl";
import { EmailSubscription } from "@components/miscl/email-subscription";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const footer_left = [
  { name: "Branding", link: "/branding", id: "branding" },
  { name: "Design", link: "/design", id: "design" },
  { name: "Marketing", link: "/marketing", id: "marketing" },
  { name: "Advertisement", link: "/advertisement", id: "advertisement" },
];

const footer_center = [
  { name: "About us", link: "/about", id: "about" },
  { name: "Contact", link: "/contact", id: "contact" },
  { name: "Jobs", link: "/jobs", id: "jobs" },
  { name: "Press kit", link: "/press", id: "press" },
];

const footer_right = [
  { name: "Terms of use", link: "/terms", id: "terms" },
  { name: "Privacy policy", link: "/privacy", id: "privacy" },
  { name: "Cookie policy", link: "/cookie", id: "cookie" },
];

const Footer: FC<Props> = async () => {
  const { formatMessage } = await getIntl();
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <nav>
        <header className="footer-title">
          {formatMessage({ id: "service" })}
        </header>
        {footer_left.map(({ id, link }) => (
          <Link className="link link-hover" href={link} key={link}>
            {formatMessage({ id })}
          </Link>
        ))}
      </nav>
      <nav>
        <header className="footer-title">
          {formatMessage({ id: "company" })}
        </header>
        {footer_center.map(({ id, link }) => (
          <Link className="link link-hover" href={link} key={link}>
            {formatMessage({ id })}
          </Link>
        ))}
      </nav>
      <nav>
        <header className="footer-title">
          {formatMessage({ id: "legal" })}
        </header>
        {footer_right.map(({ id, link }) => (
          <Link className="link link-hover" href={link} key={link}>
            {formatMessage({ id })}
          </Link>
        ))}
      </nav>
      <form>
        <header className="footer-title">
          {formatMessage({ id: "newsletter" })}
        </header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">
              {formatMessage({ id: "enter_your_email" })}
            </span>
          </label>
          <div className="relative">
            <EmailSubscription />
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
