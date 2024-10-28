import { Button } from 'antd'

interface props_UserConfirm {
    onAdd: () => void;
    onCancel: () => void
}

const UserConfirm = ({ onAdd, onCancel }: props_UserConfirm) => {
    return (
        <div className="mt-2 flex gap-1">
            <Button type="primary" onClick={onAdd}>Add</Button>
            <Button type="primary" danger onClick={onCancel} >Cancel</Button>
        </div>
    )
}

export default UserConfirm
