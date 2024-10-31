import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
    label: string
    value: string;
    onChange: (value: string) => void;
    open: boolean
}

const TextEditor: React.FC<TextEditorProps> = ({ label, value, onChange, open }) => {
    if (!open) return null
    return (
        <div className="mt-6">
            <label htmlFor="customDisclaimer" className="block font-medium text-gray-700 mb-2">{label}</label>
            <ReactQuill
                value={value}
                onChange={onChange}
                className="bg-white border border-gray-300 rounded-md"
                placeholder="Type your custom disclaimer here..."
            />
        </div>
    );
};

export default TextEditor;
