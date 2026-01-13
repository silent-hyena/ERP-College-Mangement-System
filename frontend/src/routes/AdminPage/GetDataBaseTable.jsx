import { useEffect, useState } from "react";
import AutoDismissAlert from "../../AutoDismissedAlert";
import TopProgressBar from "../../components/ProgessBar/ProgressBar";
import DisplayTable from "../../components/RenderTable/DisplayTable";

function GetDataBaseTable({ tableName }) {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  const [currentTableData, setCurrentTableData] = useState(null);

  useEffect(() => {
    if (!tableName) return;

    const getTable = async () => {
      try {
        setLoadingState(true);

        const response = await fetch(
          `/staff/admin/records?table=${tableName}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await response.json();
        console.log(data)
        if (data.alert || data.message) {
          setAlert(true);
          setAlertMessage(data.alert || data.message);
          setCurrentTableData(null);
        } else {
          setCurrentTableData(data);
        }
      } catch (err) {
        setAlert(true);
        setAlertMessage("Failed to load table data",err.message);
      } finally {
        setLoadingState(false);
      }
    };

    getTable();
  }, [tableName]); 

  return (
    <>
      <TopProgressBar loading={loadingState} />
      {alert && (
        <AutoDismissAlert
          message={alertMessage}
          onClose={() => setAlert(false)}
        />
      )}
      {currentTableData && <DisplayTable data={currentTableData} />}
    </>
  );
}

export default GetDataBaseTable;









// import { useState } from "react";
// import AutoDismissAlert from "../../AutoDismissedAlert";
// import TopProgressBar from "../../components/ProgessBar/ProgressBar";
// import DisplayTable from "../../components/RenderTable/DisplayTable";



// function GetDataBaseTable(tableName) {

//     // const [tables, setTables] = useState([]); 
//     const [alert, setAlert] = useState(false);
//     const [alertMessage, setAlertMessage] = useState(null);
//     const [loadingState, setLoadingState] = useState(false);
//     // const [currentTable,setCurrenTable] = useState(null);
//     const [currentTableData, setCurrentTableData] = useState(null);


//     async function getTable(tableName) {
//         if (tableName == null) {
//             return;
//         }
//         else {
//             setLoadingState(true);
//             const response = await fetch(`http://localhost:3000/staff/admin/records?table=${tableName}`, {
//                 method: "GET",
//                 credentials: "include",

//                 headers: { "Content-Type": "application/json" }
//             })

//             const data = await response.json();
//             setLoadingState(false);
//             if (data.alert || data.message) {
//                 setAlert(true);
//                 setAlertMessage(data.alert || data.message);
//             } else {
//                 setCurrentTableData(data); // save data in state
//             }
            
//             return;



//         }
//     }
//     getTable(tableName)
//     return <>
//         <TopProgressBar loading={loadingState} />
//         {alert && <AutoDismissAlert message={alertMessage} onClose={() => setAlert(false)} />}
//         <DisplayTable data={currentTableData} />
//     </>

// }
// export default GetDataBaseTable