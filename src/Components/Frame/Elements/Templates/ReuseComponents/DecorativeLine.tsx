import { useAppContext } from "../../../../../context";

const DecorativeLine = () => {
    const { design } = useAppContext();

    const isDefault = design.design.decorativeLine.matchWithTemplateColor;
    const color = design.design.decorativeLine.color;
    const themeColor = design.design.signatureStyle.tempColor;

    const decorativeLineOptions = [
        { value: 0, label: "None", preview: "none" },
        { value: 1, label: "Slim", preview: `1px solid ${isDefault ? themeColor : color}` },
        { value: 2, label: "Normal", preview: `2px solid ${isDefault ? themeColor : color}` },
        { value: 3, label: "Heavy", preview: `4px solid ${isDefault ? themeColor : color}` },
        { value: 4, label: "Dotted", preview: `2px dotted ${isDefault ? themeColor : color}` },
        { value: 5, label: "Dashed", preview: `2px dashed ${isDefault ? themeColor : color}` },
    ];

    const getClass = (v: number) => {
        const option = decorativeLineOptions.find((s) => s.value === v);
        return option ? option.preview : "none";
    };

    if (design.design.decorativeLine.style === 0) return null;

    return (
        <div
            style={{
                border: getClass(design.design.decorativeLine.style),
                width: "100%",
                display: "inline-block",
            }}
        ></div>
    );
};

export default DecorativeLine;
