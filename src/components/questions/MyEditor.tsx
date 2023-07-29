import ReactQuill from "react-quill";

type EditorContent = string | number | undefined;

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
            className="flex-grow-1 flex-shrink-1"
        />
    );
};

export default MyEditor