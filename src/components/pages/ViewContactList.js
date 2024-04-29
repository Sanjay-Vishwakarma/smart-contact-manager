import React from 'react';
import '../../styles/contact.css';
import StickyHeadTable from '../pages/StickyHeadTable';

const ViewContactList = () => {
    return (
        <div className='container-contacts'>
            {/* Use the StickyHeadTable component here */}
            <StickyHeadTable />
        </div>
    );
};

export default ViewContactList;
