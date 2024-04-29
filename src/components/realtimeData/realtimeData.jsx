import StartFirebase from "../firebaseConfig";
import React from "react";
import { ref, onValue } from "firebase/database";
import { Table } from "react-bootstrap";

const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db,'CompletedOrder');

        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName,"data":data});
            });
            this.setState({tableData: records});
        });
    }

    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Fullname</th>
                        <th>Phone Number</th>
                        </tr>
                        </thead>

                        <tbody>
                            {this.state.tableData.map((row,index)=>{
                                return(
                                <tr>
                                    <td>{index}</td>
                                    <td>{row.key}</td>
                                    <td>{row.data.userName}</td>
                                    <td>{row.data.orderAccepted}</td>
                                    <td>{row.data.phoneNumber}</td>
                                    </tr>
                            )
                            })}
                            </tbody>
                            </Table>
        )
    }


}