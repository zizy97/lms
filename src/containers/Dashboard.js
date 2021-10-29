import Tabs from "../components/Tabs"
import {  } from "../components/Tabs"

const DashBoard = () =>{
    const contents = [
        {title:"Books",elements:<h1>This is Books</h1>},
        {title:"Member",elements:<h1>This is Members</h1>}
    ]

    return(
        <>
            <Tabs contents={contents}/>
        </>
    )
}

export default DashBoard;