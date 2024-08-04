'use client'

import React, { useState } from 'react';
import { FaTrash, FaCheck, FaPlus } from 'react-icons/fa';
import styles from './EditableList.module.scss';

import { Trash, Add, Like1 } from 'iconic-react';

interface EditableListProps {
    title: string;
    items: string[];
    onAdd: (item: string) => void;
    onRemove: (index: number) => void;
}

const EditableList: React.FC<EditableListProps> = ({ title, items, onAdd, onRemove }) => {
    const [newItem, setNewItem] = useState<string>('');
    const [isAdding, setIsAdding] = useState<boolean>(false);

    const handleAdd = () => {
        if (newItem.trim()) {
            onAdd(newItem);
            setNewItem('');
            setIsAdding(false);
        }
    };

    return (
        <div className={styles.editableList}>
            <div className={styles.header}>
                <h3>{title}</h3>
                <button onClick={() => setIsAdding(true)}><Add /></button>
            </div>
            {isAdding && (
                <div className={styles.newItem}>
                    <input
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="Enter new item"
                    />
                    <button onClick={handleAdd}><Like1 /></button>
                </div>
            )}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => onRemove(index)}><Trash /></button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EditableList;
