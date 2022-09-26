import "./Home.css";
import Table from './../../components/Table';
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
const auth = getAuth();

const configs = {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
}

const url = "https://onedhan-finance-prod.azurewebsites.net/api/HomeRequest?code=L9C5JQ1DC8FkrIaatOln9p_SiHZw9EcuiH-mQ1VX_UczAzFu6kmtRQ==";
const dev_url = "http://localhost:7071/api/HomeRequest";

function App() {
  const [user] = useAuthState(auth);

  const [data, setData] = useState([]);
    useEffect(() => { 
      
      const getData = async () => {
        const token = await user.getIdToken();
        axios
          .get(url, {'Access-Control-Allow-Origin': "*", Authorization: "Bearer " + token, 'Content-Type': 'application/json', })
          .then(data => {
            setData(data.data);
          })
          .catch(error => console.log(error));
      }

      getData();

    },[]);

    const columns = [
        {
            name: 'code',
            displayName: 'Code',
            className: 'Table-center ',
            type: 'text'
        },
        {
            name: 'name',
            displayName: 'Name',
            className: 'Table-lText',
            type: 'text'
        },
        {
            name: 'value',
            displayName: 'Value',
            className: 'Table-center ',
            type: 'numeric'
        },
        {
            name: 'last_value',
            displayName: '% Change',
            className: 'Table-center ',
            type: 'numeric',
            displayFormat: (record) => {
                const oldValue = record.last_value;
                const newValue = record.value;
                if(oldValue) {

                    const changePct = ( (newValue/oldValue) - 1 ) * 100;
                    const changePctText = changePct.toPrecision(2) + "%";
                
                    return <p class={changePct > 0 ? "text-success" : "text-danger"}>{changePctText}</p>
                }
                else {
                    return <></>
                }
                 
            },
            sortBy: 'function'
        },
        {
            name: 'score',
            displayName: 'Prediction',
            className: 'Table-center ',
            displayFormat: (record) => {
                const value = record.score
                if(value <= 0.20) {
                    return 'Strongly Sell'
                }
                if( value > 0.20 && value <= 0.40 ) {
                    return 'Sell'
                }
                if( value > 0.40 && value <= 0.60 ) {
                    return 'Hold'
                }
                if( value > 0.60 && value <= 0.80 ) {
                    return 'Buy'
                }
                if( value > 0.80 ) {
                    return 'Strongly Buy'
                }
            },
            type: 'numeric'
        },
        {
            name: 'posted_on',
            displayName: 'Date',
            className: 'Table-center ',
            displayFormat: (record) => {
                const value = record.posted_on;
                return value.substring(0, 10);
            },
            type: 'date'
        },
    ]
    return (
        <Table columns={columns} data={data} />
    );
}

export default App;