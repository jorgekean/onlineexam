import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import ReactQuill from 'react-quill';
import Select from 'react-select';

interface EditorAdapterProps extends FieldRenderProps<string, HTMLElement> {
    placeholder?: string;
}

const EditorFinalFormAdapter: React.FC<EditorAdapterProps> = ({
    input: { value, onChange, ...restInput },
    meta,
    placeholder,
    ...rest
}) => {

    const handleQuillChange = (content: string) => {
        onChange(content);
    };

    return (
        <ReactQuill
            onChange={handleQuillChange}
            value={value}
            placeholder={placeholder}
            {...rest}
        />
    );
};

// Wrap the custom adapter to adapt it to the Field component
const EditorAdapter: React.FC<any> = ({ input, meta, ...rest }) => {
    return <EditorFinalFormAdapter input={input} meta={meta} {...rest} />;
};

export default EditorAdapter;
