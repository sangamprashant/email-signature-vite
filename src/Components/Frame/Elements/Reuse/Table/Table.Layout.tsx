interface TableLayoutProps {
    children: React.ReactNode;
}

const TableLayout = ({ children }: TableLayoutProps) => {
    return (
        <table className='table-auto w-full border-collapse'>{children}</table>
    )
}

export default TableLayout
