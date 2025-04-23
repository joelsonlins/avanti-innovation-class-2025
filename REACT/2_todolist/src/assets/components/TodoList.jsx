import React from 'react'
import styles from "./TodoList.module.css"

function TodoList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Tarefas</h2>
      <div className={styles.inputContaienr}>
        <input 
          type="text"
          placeholder='Adicione uma tarefa'
          className={styles.input}
        />
        <button className={styles.button}>Adiconar</button>

      </div>
      <ul className={styles.taskList}>
        <li className={styles.taskItem}>Tarefa</li>

      </ul>

    </div>
  )
}

export default TodoList