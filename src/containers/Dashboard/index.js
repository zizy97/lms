import React, { useState, useEffect } from "react";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";

import Books from "../Dashboard/Books/index";

import { getBooks } from "../../api/bookAPI";

export const Dashboard = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [book, setBook] = useState([]);

   useEffect(() => {
      setIsLoading(true);
      getBooks()
         .then((response) => {
            if (!response.error) {
               setBook(response.data);
            }
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   }, []);

   const contents = [
      { title: "Books", elements: <Books catalog={book} /> },
      { title: "Members", elements: <h1>Conetct of members go here</h1> },
   ];

   return isLoading ? (
      <Spinner />
   ) : (
     <Tabs contents={contents} />
   );
};

export default Dashboard;
