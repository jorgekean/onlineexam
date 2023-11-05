import ReactQuill from "react-quill";

export type EditorContent = string | number | undefined;

interface EditorProps {
    value: EditorContent;
    onChange: (content: EditorContent) => void;
}

const MyEditor: React.FC<EditorProps> = ({ value, onChange }) => {
    // Convert the value to an empty string if it's undefined.
    const sanitizedValue: string = value === undefined ? '' : String(value);

    return (
        <ReactQuill
            value={sanitizedValue}
            onChange={onChange}
            style={{ minHeight: '1rem' }}
        />
    );
};

export default MyEditor