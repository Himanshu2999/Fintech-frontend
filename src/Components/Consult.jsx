import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Consult = () => {
    const { idk } = useSelector((state) => state);
    const [conlt, setconslt] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getconsult = (idk) => {
        // Guard: don't call the API if idk is missing/empty
        if (!idk) {
            setError("No ID provided");
            setconslt([]);
            return;
        }

        setLoading(true);
        setError(null);

        fetch(`http://localhost:9000/api/getconslt/${idk}`)
            .then((resp) => {
                if (!resp.ok) {
                    setError(`Request failed with status ${resp.status}`);
                    return null;
                }
                return resp.json();
            })
            .then((res) => {
                if (!res) return; // already handled above
                if (res.statuscode === 1) {
                    setconslt(res.advdt);
                } else {
                    setError(res.message || "Failed to fetch consultation data");
                }
            })
            .catch((err) => {
                setError(err.message || "Something went wrong");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getconsult(idk);
    }, [idk]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            
            
        </>
    );
};

export default Consult;