import React from 'react';
import Select from 'react-select';

interface SelectAdapterProps {
    input: {
        name: string;
        onChange: (value: string) => void;
        value: string;
    };
    meta: any;
    options: { value: string; label: string }[];
    isDisabled?: boolean;
}

const SelectFinalFormAdapter: React.FC<SelectAdapterProps> = ({ input, meta, options, isDisabled, ...rest }) => {
    return (
        <Select
            {...rest}
            options={options}
            isDisabled={isDisabled}
            value={options ? options.find((option) => option.value === input.value) : null}
            onChange={(selectedOption) => input.onChange(selectedOption ? selectedOption.value : '')}
        />
    );
};

// Wrap the custom adapter to adapt it to the Field component
const SelectAdapter: React.FC<any> = ({ input, meta, ...rest }) => {
    return <SelectFinalFormAdapter input={input} meta={meta} {...rest} />;
};

export default SelectAdapter;
