import React, {useState} from 'react';
import Input from './input';
import {Card, Col, Row} from 'react-bootstrap'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({list, completeTodo, removeList, editItem}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = (value) => {
        editItem(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <Input edit={edit} onSubmit={submitUpdate} />
    }

    return list.map((lst, index) => (
        <Card body className={lst.isComplete ? 'complete' : 'todo'} key={index}>
            <Row>
                <Col>
            <div key={lst.id} onClick={() => completeTodo(lst.id)}>
                {lst.text}
            </div>
            </Col>
            <Col>
            <div className='icons'>
                <RiCloseCircleLine onClick={() => removeList(lst.id)} className='remove'/>
                <TiEdit onClick={() => setEdit({id:lst.id, value: lst.text})} />
            </div>
            </Col>
            </Row>
        </Card>
    ))
}

export default Todo
