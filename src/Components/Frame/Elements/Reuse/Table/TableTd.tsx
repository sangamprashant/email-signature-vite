interface TableTdProps {
    children: React.ReactNode;
    className?: string;
    thin?: boolean
}


const TableTd = ({ className, thin, children }: TableTdProps) => {
    return (
        <td className={`py-2 px-4 ${thin ? "font-thin" : ""} ${className}`} >{children}</td>
    )
}

export default TableTd
