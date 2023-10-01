import { User } from "@components/user.component";
import { Locale } from "@lib/i18n/i18n-config";
import { getDictionary } from "@lib/i18n/get-dictionary";

export default async function UserPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="page-bg min-h-screen">
      <div>
        <p>{dictionary["server-component"].user}</p>
      </div>
      <div className="py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <User />
        </div>
      </div>
    </div>
  );
}
