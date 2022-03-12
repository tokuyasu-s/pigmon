
import {React, useState} from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import {Body} from './components/Body';
import {Footer} from './components/Footer';
import {Test} from './components/test';


export const App = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const testAPI = (user, password) => {
        const query = `?name=${user}&password=${password}`
        axios.get('http://localhost/api/test'+query)
        .then(function (response) {
        // handle success(axiosの処理が成功した場合に処理させたいことを記述)
            console.log(response);
        })
        .catch(function (error) {
        // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
            console.log(error);
        })
        .finally(function () {
        // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
        });
    }

    const changeUser = (event) => {
        setUser(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
    <>
        <Header />
        {/* <Body /> */}
        <Test user={user} onClick={testAPI} onChangeUer={changeUser} password={password} changePassword={changePassword}/>
        <Footer />
    </>
    );
}
