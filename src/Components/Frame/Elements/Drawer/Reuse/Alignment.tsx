import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa6";
import { handleActive } from "../../../../../functions";
import TableTd from "../../Reuse/Table/TableTd";
import TableTr from "../../Reuse/Table/TableTr";

interface Alignment_Props {
    alignment: string;
    setAlignment: (alignment: string) => void;
}

const Alignment = ({ alignment, setAlignment }: Alignment_Props) => {
    return (
        <TableTr>
            <TableTd thin>Alignment</TableTd>
            <TableTd>
                <div className="flex border rounded-md">
                    <div className={handleActive(alignment === "start")} onClick={() => setAlignment('start')}>
                        <FaAlignLeft />
                    </div>
                    <div className={handleActive(alignment === "center")} onClick={() => setAlignment('center')}>
                        <FaAlignCenter />
                    </div>
                    <div className={handleActive(alignment === "end")} onClick={() => setAlignment('end')}>
                        <FaAlignRight />
                    </div>
                </div>
            </TableTd>
        </TableTr>
    )
}

export default Alignment
