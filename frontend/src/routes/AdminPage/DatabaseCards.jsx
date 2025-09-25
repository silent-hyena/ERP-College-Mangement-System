import { useState, useEffect } from "react";
import AutoDismissAlert from "../../AutoDismissedAlert";
import TopProgressBar from "../../components/ProgessBar/ProgressBar";

function DatbaseTables() {
    const [tables, setTables] = useState([]); // store fetched data
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [loadingState, setLoadingState] = useState(false);

    // Function to fetch data (call on component mount)
    const fetchTables = async () => {
        try {
            setLoadingState(true);
            const response = await fetch("staff/admin/showtables", {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" }
                
            });

            const data = await response.json();
            setLoadingState(false)
            if (data.alert || data.message) {
                setAlert(true);
                setAlertMessage(data.alert || data.message);
            } else {
                setTables(data); // save data in state
            }
        } catch (err) {
            setAlert(true);
            setAlertMessage(err.message);
            // console.error(error);
        }
    };

    // UseEffect hook to fetch tables when the component mounts
    useEffect(() => {
        fetchTables();
    }, []); // Empty dependency array ensures this runs only once on mount

    // Synchronous render function for cards
    const renderCards = () => {
        return (
            <> <TopProgressBar loading={loadingState}/>
                {tables.map((table, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div
                            className="card border-1"
                            style={{
                                width: "100%",
                                height: "250px",
                                overflowY: "auto",
                                overflowX: "hidden",
                            }}
                        >
                            <div className="card-header fw-bold">{table.table_name}</div>
                            <div className="card-body p-2">
                                {table.columns.map((name, i) => (
                                    <p key={i} className="mb-1">
                                        {i + 1}: {name}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    return (
        <>
            {/* {alert && <AutoDismissAlert message={alertMessage} />} */}
             {alert && <AutoDismissAlert message={alertMessage} onClose={() => setAlert(false)} />}
            <div className="container mt-3">
                <div className="row">{renderCards()}</div>
            </div>
        </>
    );
}

export default DatbaseTables;
