import { FETCHING_DATA, INSERTING_DATA_SUCCESS, INSERTING_DATA_FAILURE } from '../constants'
import SQLiteProvider from '../providers/SQLiteProvider';
var SQLiteObj = SQLiteProvider.getInstance();


// INSERTING_DATA
export function insertData(data){
  return dispatch => {
    SQLiteObj.transaction((tx)=>{
      console.log("Inside the insertdataSQL transaction...");
      tx.executeSql('CREATE TABLE IF NOT EXISTS CUSTOMERS (id integer primary key, name varchar, title varchar, corporation varchar, address1 varchar, address2 varchar,city varchar, state varchar, zip varchar, ofcTele integer, cellTele integer, email varchar, url varchar, type varchar)');
      tx.executeSql('INSERT INTO CUSTOMERS (name, title, corporation, address1, address2, city, state, zip, ofcTele, cellTele, email, url, type) VALUES (?, ?, ?, ?, ?, ?,?, ?, ?,?, ?, ?,?)',[data.name, data.title, data.corporation, data.address1, data.address2, data.city, data.state, data.zip, data.ofcTele, data.cellTele, data.email, data.url, data.type],(tx,results)=>{
        console.log("Insert Results : "+JSON.stringify(results));
        if(results.rowsAffected > 0){
          dispatch({
            type : INSERTING_DATA_SUCCESS,
            payload : results
          })
        }else{
          alert("Failed to insert data")
          dispatch({
            type : INSERTING_DATA_FAILURE,
            payload : results
          })
        }    
      })
    })
  }
}

// FETCHING_DATA
export function fetchData() {
  return dispath => {
    SQLiteObj.transaction((tx)=>{
      console.log("inside the retrieveSQL Transaction");
      tx.executeSql('SELECT * FROM CUSTOMERS',[],(tx,results)=>{
        var len = results.rows.length;
        var rows = [];
        for(let i=0;i<len;i++){
          let row = results.rows.item(i);
          rows.push(row);
          console.log(`Result is : ${row.name}`);
        }
        dispath({
          type : FETCHING_DATA,
          payload : rows
        })
      })
    })
  }
}