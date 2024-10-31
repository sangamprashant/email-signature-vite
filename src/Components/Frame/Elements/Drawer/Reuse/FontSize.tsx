import { Slider } from "antd"
import TableTd from "../../Reuse/Table/TableTd"
import TableTr from "../../Reuse/Table/TableTr"

interface FontSize_Props {
    fontSize: number
    setFontSize: (e: number) => void
}

const FontSize = ({ fontSize, setFontSize }: FontSize_Props) => {
    return (
        <TableTr>
            <TableTd thin>Font size</TableTd>
            <TableTd>
                <Slider defaultValue={fontSize} min={10} max={30} onChange={(e) => setFontSize(e)} />
            </TableTd>
        </TableTr>
    )
}

export default FontSize
