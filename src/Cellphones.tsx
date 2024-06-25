import React, { useEffect, useState } from 'react';
import { fetchCellphones } from './api';
import styles from './Cellphones.module.css';

interface Cellphone {
    id: string;
    name: string;
    data: {
        [key: string]: any;
    } | null;
}

const Cellphones: React.FC = () => {
    const [cellphones, setCellphones] = useState<Cellphone[]>([]);
    const [sortById, setSortById] = useState(true);
    const [filter, setFilter] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        async function loadCellphones() {
            const data = await fetchCellphones();
            setCellphones(data);
        }

        loadCellphones();
    }, []);

    const handleSortChange = () => {
        setSortById(!sortById);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setFilter({});
        setSortById(true);
    };

    const uniqueValues = (key: string) => {
        const values = cellphones
            .filter(cellphone => cellphone.data && cellphone.data[key])
            .map(cellphone => cellphone.data![key]);
        return Array.from(new Set(values));
    };

    const filteredCellphones = cellphones
        .filter(cellphone =>
            Object.entries(filter).every(([key, value]) =>
                value === '' || (cellphone.data && cellphone.data[key] === value)
            )
        )
        .sort((a, b) => (sortById ? parseInt(a.id) - parseInt(b.id) : a.name.localeCompare(b.name)));

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Cellphone Devices</h1>
            <div className={styles.filters}>
                <div className={styles.filter}>
                    <label htmlFor="color">Color:</label>
                    <select name="color" id="color" onChange={handleFilterChange} value={filter.color || ''}>
                        <option value="">All</option>
                        {uniqueValues('color').map(value => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.filter}>
                    <label htmlFor="capacity">Capacity:</label>
                    <select name="capacity" id="capacity" onChange={handleFilterChange} value={filter.capacity || ''}>
                        <option value="">All</option>
                        {uniqueValues('capacity').map(value => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.filter}>
                    <label htmlFor="price">Price:</label>
                    <select name="price" id="price" onChange={handleFilterChange} value={filter.price || ''}>
                        <option value="">All</option>
                        {uniqueValues('price').map(value => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles['sort-button']} onClick={handleSortChange}>
                    Sort by {sortById ? 'Name' : 'ID'}
                </button>
                <button className={styles['reset-button']} onClick={handleReset}>
                    Reset Filters
                </button>
            </div>
            <ul className={styles.list}>
                {filteredCellphones.map(cellphone => (
                    <li key={cellphone.id} className={styles['list-item']}>
                        <strong>{cellphone.id}:</strong> {cellphone.name}
                        {cellphone.data && (
                            <ul className={styles.details}>
                                {Object.entries(cellphone.data).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key}:</strong> {value}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cellphones;
