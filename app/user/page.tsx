import getIntl from "@app/intl";
import { User } from "@components/user.component";

export default async function UserPage() {
  const intl = await getIntl();
  return (
    <div className="page-bg min-h-screen">
      <div>
        <p>{intl.formatMessage({ id: "about_header" })}</p>
      </div>
      <div className="py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <User />
        </div>
      </div>
    </div>
  );
}
