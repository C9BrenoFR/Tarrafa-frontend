'use client';

import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/tabela';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Column {
    label: string;
    name: string;
    cell?: (row: any) => React.ReactNode;
    options?: {
        sort?: boolean;
        headerClassName?: string;
        cellClassName?: string;
        sticky?: boolean;
    };
}

interface DataTableProps {
    rowsPerPage: number;
    data: any[];
    columns: Column[];
    searchTerm: string;
}

const normalizeString = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};

const DataTable: React.FC<DataTableProps> = ({ rowsPerPage, data, columns, searchTerm }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = data.filter(item =>
        normalizeString(item.nome).includes(normalizeString(searchTerm))
    );

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const currentData = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const renderPaginationButtons = () => {
        const buttons = [];
        const maxVisiblePages = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        if (startPage > 1) {
            buttons.push(1);
            if (startPage > 2) buttons.push('...');
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) buttons.push('...');
            buttons.push(totalPages);
        }

        return buttons;
    };

    return (
        <div className="overflow-x-auto max-h-[800px]">
            <Table>
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        {columns.map((column, idx) => (
                            <TableHead
                                key={idx}
                                className={`min-w-40 ${column.options?.headerClassName || ''
                                    } ${column.options?.sticky ? 'sticky left-0 z-40 bg-inherit font-semibold text-left pl-6' : 'text-sm/tight text-center'
                                    }`}
                            >
                                {column.label}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentData.map((row, rowIndex) => (
                        <TableRow key={rowIndex} className="odd:bg-white even:bg-gray-50">
                            {columns.map((column, colIndex) => (
                                <TableCell
                                    key={colIndex}
                                    className={`transition-colors px-6 ${column.options?.cellClassName || ''
                                        } ${column.options?.sticky
                                            ? 'sticky bg-inherit left-0 z-30 shadow-cell font-medium text-left pl-6 border-r-[1.5px] border-gray-100'
                                            : ''
                                        }`}
                                >
                                    {column.cell
                                        ? column.cell(row)
                                        : row[column.name]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-between p-2 text-sm text-zinc-500 font-medium z-50 bg-white">
                <div className="flex gap-2 font-medium">

                    {currentPage > 1 && (
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            className="rounded-lg border-1 w-7 h-7 flex items-center justify-center hover:cursor-pointer hover:bg-gray-100 transition-colors focus:text-white focus:outline-none focus:border-[#374DAA] focus:bg-[#374DAA]"
                        >
                            <FaChevronLeft className='text-xs' />
                        </button>
                    )}
                    {renderPaginationButtons().map((page, i) =>
                        typeof page === 'number' ? (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(page)}
                                className={`rounded-lg text-center justify-center border-1 w-7 h-7 hover:cursor-pointer hover:bg-gray-100 transition-colors focus:text-white focus:outline-none focus:border-[#374DAA] focus:bg-[#374DAA] ${currentPage === page
                                    ? 'text-white border-[#374DAA] bg-[#374DAA]'
                                    : ''
                                    }`}
                            >
                                {page}
                            </button>
                        ) : (
                            <span key={i} className="w-7 h-7 flex items-center justify-center">
                                {page}
                            </span>
                        )
                    )}

                    {currentPage < totalPages && (
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            className="rounded-lg border-1 w-7 h-7 flex items-center justify-center hover:cursor-pointer hover:bg-gray-100 transition-colors focus:text-white focus:outline-none focus:border-[#374DAA] focus:bg-[#374DAA]"
                        >
                            <FaChevronRight className='text-xs' />
                        </button>
                    )}
                </div>
                <span>
                    Mostrando {(currentPage - 1) * rowsPerPage + 1} –{' '}
                    {Math.min(currentPage * rowsPerPage, filteredData.length)} de {filteredData.length} entradas
                </span>
            </div>
        </div>
    );
};

export default DataTable;