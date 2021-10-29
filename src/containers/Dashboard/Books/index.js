import React, { useState } from "react";

import { IoAddSharp } from "react-icons/io5";

import Table from "../../../components/Table";
import {
   FluidContainer,
   Button,
   Container,
} from "../../../components/CommonComponents";

import Book from "./Book";
import AddBookDialog from "./AddBookDialog";

import { addBook } from "../../../api/bookAPI";

const Books = ({ catalog }) => {
   const [selectedBookId, setselectedBookId] = useState(null);
   const [showAddBookDialog, setShowAddBookDialog] = useState(false);

   const handleTableRowClick = (id) => {
      setselectedBookId(id);
   };

   const handleBookViewBackClick = () => {
      setselectedBookId(null);
   };

   const handleAddBook = (confirmed, data) => {
      if (confirmed) {
         addBook(data);
      }
      setShowAddBookDialog(false);
   };

   return selectedBookId == null ? (
      <>
         <FluidContainer>
            <Container
               flexDirection="row"
               justifyContent="flex-end"
               alignItems="flex-start"
            >
               <Button rounded onClick={() => setShowAddBookDialog(true)}>
                  <IoAddSharp/>
               </Button>
            </Container>
            <Table
               data={catalog}
               handleRowClick={handleTableRowClick}
               instruction="Click row to view book"
            />
         </FluidContainer>
         <AddBookDialog show={showAddBookDialog} handleClose={handleAddBook} />
      </>
   ) : (
      <Book id={selectedBookId} handleBackClick={handleBookViewBackClick} />
   );
};

export default Books;
