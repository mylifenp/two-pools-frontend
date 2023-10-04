"use client";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Skills } from "./skills.component";

interface Props {}

const SkillComponent: FC<Props> = () => {
  const { data: session, status } = useSession();
  const { formatMessage } = useIntl();

  return (
    <div className="flex-grow">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input
          title="skills"
          type="radio"
          name="my-accordion-4"
          checked={true}
        />
        <div className="collapse-title text-xl font-medium">
          <h2>{formatMessage({ id: "skills" })}</h2>
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <div>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
