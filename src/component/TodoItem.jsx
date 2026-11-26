import React, { useState } from 'react'
import './TodoItem.css'

const TodoItem = ({ id, isDone, content, onUpdate,onDelete }) => {

  const [isEdit, setIsEdit] = useState(false)
  const [editContent, setEditContent] = useState(content)

  const onChangeCheck = () => onUpdate(id, { isDone: !isDone })

  const onClickUpdate = () => {
    if (isEdit) {
      if (!editContent.trim()) return

      onUpdate(id, {
        content: editContent
      })
    }
    setIsEdit(!isEdit)
  }

  const onClickDeleteButton =()=>{
    onDelete(id)
  }

  return (
    <div className={`TodoItem ${isDone ? " isDone" : ""}`}>
      <div className="card-top">
        <input type="checkbox" aria-label="찾음 표시" checked={isDone} onChange={onChangeCheck} />
        <div className={isDone ? 'status found' : 'status lost'}>
          {isDone ? <strong>찾음</strong> : '분실'}
        </div>
      </div>

      {isEdit ? (
        <input
          type="text"
          className='content'
          onChange={(e) => setEditContent(e.target.value)}
          value={editContent}
        />
      ) : (
        <div className="content">{content}</div>
      )}

      <div className="btn-wrap">
        <button className="updateBtn" onClick={onClickUpdate}>
          {isEdit ? '저장' : '수정'}
        </button>
        <button className="deleteBtn" onClick={onClickDeleteButton}>삭제</button>
      </div>
    </div>
  )
}

export default TodoItem
