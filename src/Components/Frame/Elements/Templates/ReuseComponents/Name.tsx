import { useAppContext } from "../../../../../context"
import { getTextScale } from "../../../../../functions";

const Name = () => {

    const { design } = useAppContext()
    const fontScaleValue = Number(design.design.signatureStyle.fontScale);
    const textScaleClass = getTextScale(fontScaleValue + 2);

    return (
        <h1
            className={`${textScaleClass} font-bold`}
            style={{ color: design.design.signatureStyle.tempColor, }}>name here</h1>
    )
}

export default Name
