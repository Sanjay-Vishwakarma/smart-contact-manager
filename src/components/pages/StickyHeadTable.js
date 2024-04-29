import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TablePagination } from '@mui/material';

const ViewContactList = () => {
    // Sample data to be replaced with your actual contact data
    const contacts = [
        { id: 1, firstName: 'Mark', lastName: 'Otto', work: 'Developer', email: 'mark@example.com', phone: '1234567890', description: 'Lorem ipsum dolor sit amet' },
        { id: 2, firstName: 'Jacob', lastName: 'Thornton', work: 'Designer', email: 'jacob@example.com', phone: '9876543210', description: 'Lorem ipsum dolor sit amet' },
        { id: 3, firstName: 'Larry', lastName: 'Bird', work: 'Manager', email: 'larry@example.com', phone: '5678901234', description: 'Lorem ipsum dolor sit amet' }
    ];

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Number of rows per page

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset to first page when changing rows per page
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Work</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact) => (
                            <TableRow key={contact.id}>
                                <TableCell>{contact.id}</TableCell>
                                <TableCell>{contact.firstName}</TableCell>
                                <TableCell>{contact.lastName}</TableCell>
                                <TableCell>{contact.work}</TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell>{contact.phone}</TableCell>
                                <TableCell>{contact.description}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="edit">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton aria-label="delete">
                                        <i className="fa-solid fa-trash"></i>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]} // Options for rows per page
                component="div"
                count={contacts.length} // Total number of rows
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default ViewContactList;
