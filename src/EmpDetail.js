import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();
  const [empdata, setEmpdata] = useState({});

  useEffect(() => {
    fetch("https://68ddd07fd7b591b4b78d8a2d.mockapi.io/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Employee Create</h2>
        </div>
        <div className="card-body"></div>
        {empdata && (
          <div>
            <h2>
              The Employee name is : <b>{empdata.name}</b> ({empdata.id})
            </h2>
            <h3>Contact Details</h3>
            <h5>
              Email is : <b>{empdata.email}</b>
            </h5>
            <h5>
              Phone is : <b>{empdata.phone}</b>
            </h5>
            <h5>
              Age is : <b>{empdata.age}</b>
            </h5>
            <Link className="btn btn-danger" to="/">
              Back to List
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmpDetail;
