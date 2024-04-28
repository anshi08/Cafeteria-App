import React, { Component } from 'react';
import StartFirebase from './firebaseConfig/index';
import { ref, onValue } from 'firebase/database';
import { Card } from 'react-bootstrap';
import './RealtimeData.css';

class RealtimeData extends Component {
    constructor() {
        super();
        this.state = {
            tableDataArray: []
        };
    }

    componentDidMount() {
        const db = StartFirebase();
        const dbRef = ref(db, 'DevilHunter');

        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach((childSnapshot) => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({
                tableDataArray: Object.entries(records).map(([key, value]) => ({
                    key,
                    data: value
                }))
            });
        });
    }

    render() {
        return (
            <div className="cards-container">
                {JSON.stringify(this.state.tableDataArray)}
            </div>
        );
    }
}

export default RealtimeData;
