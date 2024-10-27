import { Button } from 'antd'

const UserConfirm = () => {
    return (
        <div className="mt-2 flex gap-1">
            <Button type="primary">Add</Button>
            <Button type="primary" danger >Cancel</Button>
        </div>
    )
}

export default UserConfirm
