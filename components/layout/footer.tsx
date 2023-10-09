import getIntl from "@app/intl";
import { EmailSubscription } from "@components/miscl/email-subscription";
import Link from "next/link";
import { FC } from "react";

interface Props {}

interface FooterItem {
  link: string;
  id: string;
}

interface FooterItemProps {
  header: string;
  items: FooterItem[];
}

const footer_left = [
  { link: "/branding", id: "branding" },
  { link: "/design", id: "design" },
  { link: "/marketing", id: "marketing" },
  { link: "/advertisement", id: "advertisement" },
];

const footer_center = [
  { link: "/about", id: "about" },
  { link: "/contact", id: "contact" },
  { link: "/jobs", id: "jobs" },
  { link: "/press", id: "press" },
];

const footer_right = [
  { link: "/terms", id: "terms" },
  { link: "/privacy", id: "privacy" },
  { link: "/cookie", id: "cookie" },
];

const FooterItem: FC<FooterItemProps> = async ({ header, items }) => {
  const { formatMessage } = await getIntl("footer");
  return (
    <nav>
      <header className="footer-title">
        {formatMessage({ id: `${header}` })}
      </header>
      {items.map(({ id, link }) => (
        <Link className="link link-hover" href={link} key={link}>
          {formatMessage({ id: `${id}` })}
        </Link>
      ))}
    </nav>
  );
};

const Footer: FC<Props> = async () => {
  const { formatMessage } = await getIntl("footer");
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <FooterItem header="service" items={footer_left} />
      <FooterItem header="company" items={footer_center} />
      <FooterItem header="legal" items={footer_right} />
      <form>
        <header className="footer-title">
          {formatMessage({ id: "miscl.newsletter" })}
        </header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">
              {formatMessage({ id: "email.provide" })}
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
