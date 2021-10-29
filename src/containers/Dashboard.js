import React, { useState, useEffect } from "react";

import Tabs from "../components/Tabs";
import Spinner from "../components/Spinner"

import  { getBooks }  from "../api/bookAPI";

export const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
       setIsLoading(true);
       getBooks()
          .then((response) => {
             if (!response.error) {
                console.log(response.data);
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
       { title: "Books", elements: <h1>Content of books go here</h1> },
       { title: "Members", elements: <h1>Content of members go here</h1> },
    ];
 
    return(
       isLoading ? <Spinner/> : <Tabs contents={contents} />
    );
 };
 
 export default Dashboard;