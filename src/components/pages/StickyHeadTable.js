import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/contact.css';

const ViewContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();
    const [uid, setUid] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const storedUid = localStorage.getItem('uid');
        console.log("cont list uid "+storedUid);
        if (storedUid) {
            setUid(storedUid);
            fetchContacts(storedUid);
        } else {
            // Handle the case where uid is not available, maybe redirect to login
            toast.error('User not logged in.', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }, []);

    const fetchContacts = async (uid) => {
        try {
            const response = await axios.get(`http://localhost:9090/contact/getAllContacts/${uid}`);
            setContacts(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching contacts:', error);
            setLoading(false);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset to first page when changing rows per page
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:9090/contact/delete/${id}`);

            // Remove the deleted contact from the local state
            setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));

            toast.success('Contact deleted successfully!', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setSuccess('Contact deleted successfully!');
            setError(null);
            fetchContacts(uid); // Reload the contact list after successful deletion
        } catch (error) {
            toast.error('There was an error deleting the contact.', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setError('There was an error deleting the contact.');
            setSuccess(null);
            console.error('Error deleting contact:', error);
        }
    };

    return (
        <div className='container-contacts'>
            {loading ? (
                <CircularProgress />
            ) : contacts.length === 0 ? (
                <div>No contact records found.</div>
            ) : (
                <>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>ID</b></TableCell>
                                    <TableCell><b>First Name</b></TableCell>
                                    <TableCell><b>Last Name</b></TableCell>
                                    <TableCell><b>Email</b></TableCell>
                                    <TableCell><b>Phone</b></TableCell>
                                    <TableCell><b>Description</b></TableCell>
                                    <TableCell><b>Edit</b></TableCell>
                                    <TableCell><b>Delete</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact, index) => (
                                    <TableRow key={contact.id}>
                                        <TableCell>{page * rowsPerPage + index + 1}</TableCell> {/* Auto-incrementing ID */}
                                        <TableCell>{contact.firstName}</TableCell>
                                        <TableCell>{contact.lastName}</TableCell>
                                        <TableCell>{contact.email}</TableCell>
                                        <TableCell>{contact.phone}</TableCell>
                                        <TableCell>{contact.description}</TableCell>
                                        <TableCell>
                                            <IconButton aria-label="edit" onClick={() => handleEdit(contact.id)}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </IconButton>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton aria-label="delete" onClick={() => handleDelete(contact.id)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <ToastContainer
                        position="top-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce}
                    />
                </>
            )}
        </div>
    );
};

export default ViewContactList;
