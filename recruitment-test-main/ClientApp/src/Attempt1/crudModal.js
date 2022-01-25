import React, { useState } from 'react';
import Create from './createEmployee';
import Update from './updateEmployee';

export const CRUDModal = ({createOrUpdate, data}) => {
    const [createOrUpdate, setCreateOrUpdate] = useState('');
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        setCreateOrUpdate(createOrUpdate);
        if (createOrUpdate === 'create')
            setEmployee(data);
    }, []);

    return(
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{createOrUpdate === 'create' ? 'Create' : 'Update'}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {createOrUpdate === 'create' ? <Create /> : <Update employee={employee} />}
                    </div>
                </div>
            </div>
        </div>
    )
}