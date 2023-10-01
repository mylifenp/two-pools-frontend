import { Spinner, Error } from "@components/miscl";
import { Skill, SkillInput, useUpdateSkillMutation } from "@generated/types";
import {
  ChangeEventHandler,
  Dispatch,
  FC,
  FormEventHandler,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";
import { useIntl } from "react-intl";

interface Props {
  skill: Skill;
}

export const EditSkill: FC<Props> = ({ skill }) => {
  const { formatMessage } = useIntl();
  const [input, setInput] = useState<SkillInput | null>(null);
  const [updateSkillFn, { loading, error }] = useUpdateSkillMutation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!skill || !skill.id || !input) return;
    console.log("input", input);
    updateSkillFn({
      variables: { id: skill.id, input },
      onCompleted: () => setInput(null),
    });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setInput({ name: value });
  };

  const handleCancel: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setInput(null);
  };

  if (loading) return <Spinner text={formatMessage({ id: "loading" })} />;
  if (error) return <Error error={formatMessage({ id: "error" })} />;

  if (!input) {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setInput({ name: skill.name })}
      >
        Edit
      </button>
    );
  }

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            value={input.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
          <button
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
