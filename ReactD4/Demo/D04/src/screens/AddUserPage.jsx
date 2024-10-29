import React from 'react';
import AddUser from '../components/AddUser';

const AddUserPage = ({addUserFun ,disabled}) => {
    return (
        <div>
            <AddUser addUserFun={addUserFun} disabled={disabled}></AddUser>
        </div>
    );
}

export default AddUserPage;
