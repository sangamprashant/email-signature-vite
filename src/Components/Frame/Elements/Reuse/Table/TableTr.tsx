interface TableTrProps {
    children: React.ReactNode;
}

const TableTr = ({ children }: TableTrProps) => {
    return (
        <tr>{children}</tr>
    )
}

export default TableTr
