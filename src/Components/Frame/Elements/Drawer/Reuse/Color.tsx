import { ColorPicker } from "antd";
import { AggregationColor } from "antd/es/color-picker/color";
import { FaCircle, FaRegCircleDot } from "react-icons/fa6";
import { GiWaterDrop } from 'react-icons/gi';
import TableTd from "../../Reuse/Table/TableTd";
import TableTr from "../../Reuse/Table/TableTr";
import { colorsDisclamier } from "../Code_2_Disclaimer";

interface Color_props {
    color: string
    customColor: string | undefined;
    setColor: (s: string) => void
    setCustomColor: (c: string | undefined) => void
}

const Color = ({ color, setColor, setCustomColor, customColor }: Color_props) => {
    const handleColorChange = (colorName: string) => {
        setColor(colorName);
        setCustomColor(undefined);
    };

    const handleCustomColorChange = (_: AggregationColor, hex: string) => {
        setCustomColor(hex);
    };

    return (
        <TableTr>
            <TableTd thin>Color</TableTd>
            <TableTd>
                <div className="flex gap-1 flex-wrap items-center justify-around ">
                    {colorsDisclamier.map((c, i) => (
                        <div
                            className={`flex items-center justify-center cursor-pointer`}
                            key={i}
                            onClick={() => handleColorChange(c.name)}
                        >
                            {color === c.name ? (
                                <FaRegCircleDot fontSize={20} className={c.class} />
                            ) : (
                                <FaCircle fontSize={20} className={c.class} />
                            )}
                        </div>
                    ))}
                    <div className="flex items-center">
                        <ColorPicker value={customColor}
                            onChange={handleCustomColorChange}
                        >
                            <div className={`flex items-center justify-center cursor-pointer bg-black hover:bg-gray-700 p-1 rounded-full`} style={{
                                backgroundColor: customColor
                            }}>
                                <GiWaterDrop fontSize={15} className="text-white" />
                            </div>
                        </ColorPicker>
                    </div>
                </div>
            </TableTd>
        </TableTr>
    )
}

export default Color
