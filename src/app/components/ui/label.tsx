import { type FC } from 'react';
import _ from 'lodash';

interface Props {
  name: string;
  required?: boolean;
  isLoading?: boolean;
}

const Label: FC<Props> = ({ name, isLoading = false, required = false }) => {
  return (
    <label
      className="text-secondary my-1 flex justify-between gap-1 text-[#6b7baa] ml-[6px] mb-[6px] text-xs font-medium"
      htmlFor={name}
    >
      <span>
        {_.startCase(_.last(name.split('.'))) + (required ? '*' : '')}
      </span>
    </label>
  );
};

export default Label;