import { toPng } from 'html-to-image';
import React, { useEffect, useRef, useState } from 'react';
import AppContentMouseEvent from './AppContentMouseEvent';

const AppComponentRender: React.FC = () => {

    const [signature, setSignature] = useState<string>('');
    const [font, setFont] = useState<string>('Dancing Script, cursive');
    const [imageSrc, setImageSrc] = useState<string>("");
    const signatureRef = useRef<HTMLDivElement | null>(null); // Define ref type

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSignature(e.target.value);
    const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFont(e.target.value);

    useEffect(() => {
        const updateImage = async () => {
            if (signatureRef.current) {
                try {
                    const imageUrl = await toPng(signatureRef.current); // Convert to base64 image
                    setImageSrc(imageUrl);
                } catch (error) {
                    console.error("Could not convert signature to image", error);
                }
            }
        };
        updateImage();
    }, [signature, font]);

    return (
        <div>
            {/*  */}
            <AppContentMouseEvent />
            {/*  */}
            <div className="flex flex-col justify-center items-center py-2">
                <input
                    type="text"
                    placeholder="Type your signature"
                    value={signature}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded mb-4"
                />

                <select
                    value={font}
                    onChange={handleFontChange}
                    className="mb-4 p-2 border border-gray-300 rounded"
                >
                    <option value="Dancing Script, cursive">Dancing Script</option>
                    <option value="Pacifico, cursive">Pacifico</option>
                    <option value="Great Vibes, cursive">Great Vibes</option>
                    <option value="Lobster, cursive">Lobster</option>
                    <option value="Roboto, sans-serif">Roboto</option>
                    <option value="Satisfy, cursive">Satisfy</option>
                    <option value="Courgette, cursive">Courgette</option>
                    <option value="Sacramento, cursive">Sacramento</option>
                    <option value="Allura, cursive">Allura</option>
                    <option value="Alex Brush, cursive">Alex Brush</option>
                </select>

                <div
                    ref={signatureRef}
                    style={{ fontFamily: font, padding: '10px' }}
                    className="text-4xl font-bold text-black"
                >
                    {signature || 'Your Signature'}
                </div>

                {/* {imageSrc && <img src={imageSrc} alt="Signature Preview" className="my-4 border border-gray-300 rounded-lg" />} */}
            </div>
            <AppContentMouseEvent />
        </div>
    );
};

export default AppComponentRender;
