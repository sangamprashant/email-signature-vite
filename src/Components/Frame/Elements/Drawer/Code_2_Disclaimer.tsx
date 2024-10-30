import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { DisclamierString } from '../../../../Strings/AppString';
import { Disclamier } from '../../../../types/AppPart';
import { useAppContext } from '../../../../context';

const Code_2_Disclaimer = () => {
    const { website } = useAppContext()
    const [selectedDisclaimer, setSelectedDisclaimer] = useState<string>('Confidentiality');
    const [customDisclaimer, setCustomDisclaimer] = useState<string>('');

    const handleDisclaimerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDisclaimer(e.target.value);
    };

    const handleCustomChange = (content: string) => {
        setCustomDisclaimer(content);
    };

    const displayedText =
        selectedDisclaimer === 'Custom'
            ? customDisclaimer
            : DisclamierString[selectedDisclaimer as keyof typeof DisclamierString];

    useEffect(() => {
        onLiveContentChnage()
    }, [displayedText])   

    return (
        <div className="max-w-xl mx-auto bg-white rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Add a Disclaimer</h2>
            <p className="text-gray-600 mb-6">Choose a disclaimer type or add a custom one below:</p>
            <div className="space-y-3">
                {Object.keys(DisclamierString).map((key) => (
                    <label key={key} className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            name="disclaimer"
                            value={key}
                            checked={selectedDisclaimer === key}
                            onChange={handleDisclaimerChange}
                            className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 cursor-pointer"
                        />
                        <span className="text-gray-800">{key}</span>
                    </label>
                ))}
            </div>
            {selectedDisclaimer === 'Custom' && (
                <div className="mt-6">
                    <label htmlFor="customDisclaimer" className="block font-medium text-gray-700 mb-2">
                        Enter your custom disclaimer:
                    </label>
                    <ReactQuill
                        value={customDisclaimer}
                        onChange={handleCustomChange}
                        className="bg-white border border-gray-300 rounded-md"
                        placeholder="Type your custom disclaimer here..."
                    />
                </div>
            )}
        </div>
    );

    async function onLiveContentChnage() {
        const data: Disclamier = {
            "website-detiles": {
                code: 2,
                time: new Date()
            },
            text: displayedText
        }
        website.addDrawersContentOnChange(data)
    }
};

export default Code_2_Disclaimer;
