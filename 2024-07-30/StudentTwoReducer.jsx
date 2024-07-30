import React, { useReducer } from 'react';

function StudentTwoReducer(props) {

    const [attendanceStudent, attendanceDispatch] = useReducer(attendanceReducer, 0);
    const [absenceStudent, absenceDispatch] = useReducer(absenceReducer, 10);

    function attendanceReducer(state, action) {
        switch(action.type) {
            case 'attendance' :
                return state + 1;
            case 'absence' :
                return state > 0 ? state - 1 : 0;
            default :
                return state;
        }
    }

    function absenceReducer(state, action) {
        switch(action.type) {
            case 'absence' :
                return state + 1;
            case 'attendance' :
                return state > 0 ? state - 1 : 0;
            default :
                return state;
        }
    }

    return (
        <div>
            <div>출석 명부</div>
            <div>출석 : {attendanceStudent}명</div>
            <div>결석 : {absenceStudent}명</div>
            <div>출석률 : {(attendanceStudent / (attendanceStudent + absenceStudent) * 100).toFixed(1)}%</div>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>출석여부</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="StudentList">
                        <td>1</td>
                        <td>김그린</td>
                        <td>
                            <input
                                type="radio"
                                name="radioButton01"
                                onChange={(e) => {
                                    attendanceDispatch({type : 'attendance'});
                                    absenceDispatch({type : 'attendance'});
                                }}>
                            </input>
                            <label>출석</label>
                            <input
                                type="radio"
                                name="radioButton01"
                                defaultChecked
                                onChange={(e) => {
                                    absenceDispatch({type : 'absence'});
                                    attendanceDispatch({type : 'absence'});
                                }}>
                            </input>
                            <label>결석</label>
                        </td>
                    </tr>
                    <tr className="StudentList">
                        <td>2</td>
                        <td>김블루</td>
                        <td>
                            <input
                                type="radio"
                                name="radioButton02"
                                onChange={(e) => {
                                    attendanceDispatch({type : 'attendance'});
                                    absenceDispatch({type : 'attendance'});
                                }}>
                            </input>
                            <label>출석</label>
                            <input
                                type="radio"
                                name="radioButton02"
                                defaultChecked
                                onChange={(e) => {
                                    absenceDispatch({type : 'absence'});
                                    attendanceDispatch({type : 'absence'});
                                }}>
                            </input>
                            <label>결석</label>
                        </td>
                    </tr>
                    <tr className="StudentList">
                        <td>3</td>
                        <td>김핑크</td>
                        <td>
                            <input
                                type="radio"
                                name="radioButton03"
                                onChange={(e) => {
                                    attendanceDispatch({type : 'attendance'});
                                    absenceDispatch({type : 'attendance'});
                                }}>
                            </input>
                            <label>출석</label>
                            <input
                                type="radio"
                                name="radioButton03"
                                defaultChecked
                                onChange={(e) => {
                                    absenceDispatch({type : 'absence'});
                                    attendanceDispatch({type : 'absence'});
                                }}>
                            </input>
                            <label>결석</label>
                        </td>
                    </tr>
                    <tr className="StudentList">
                        <td>4</td>
                        <td>김옐로</td>
                        <td>
                            <input
                                type="radio"
                                name="radioButton04"
                                onChange={(e) => {
                                    attendanceDispatch({type : 'attendance'});
                                    absenceDispatch({type : 'attendance'});
                                }}>
                            </input>
                            <label>출석</label>
                            <input
                                type="radio"
                                name="radioButton04"
                                defaultChecked
                                onChange={(e) => {
                                    absenceDispatch({type : 'absence'});
                                    attendanceDispatch({type : 'absence'});
                                }}>
                            </input>
                            <label>결석</label>
                        </td>
                    </tr>
                    <tr className="StudentList">
                        <td>5</td>
                        <td>김초코</td>
                        <td>
                            <input
                                type="radio"
                                name="radioButton05"
                                onChange={(e) => {
                                    attendanceDispatch({type : 'attendance'});
                                    absenceDispatch({type : 'attendance'});
                                }}>
                            </input>
                            <label>출석</label>
                            <input
                                type="radio"
                                name="radioButton05"
                                defaultChecked
                                onChange={(e) => {
                                    absenceDispatch({type : 'absence'});
                                    attendanceDispatch({type : 'absence'});
                                }}>
                            </input>
                            <label>결석</label>
                        </td>
                    </tr>
                    <tr className="StudentList">
                        <td>6</td>
                        <td>김쿠키</td>
                        <td>
                            <input
                                type="radio"
                                name="radioButton06"
                                onChange={(e) => {
                                    attendanceDispatch({type : 'attendance'});
                                    absenceDispatch({type : 'attendance'});
                                }}>
                            </input>
                            <label>출석</label>
                            <input
                                type="radio"
                                name="radioButton06"
                                defaultChecked
                                onChange={(e) => {
                                    absenceDispatch({type : 'absence'});
                                    attendanceDispatch({type : 'absence'});
                                }}>
                            </input>
                            <label>결석</label>
                        </td>
                    </tr>
                    <tr className="StudentList">
                        <td>7</td>
                        <td>김버거</td>
                        <td>
                            <input
                                type="radio"
                                name="radioButton07"
                                onChange={(e) => {
                                    attendanceDispatch({type : 'attendance'});
                                    absenceDispatch({type : 'attendance'});
                                }}>
                            </input>
                            <label>출석</label>
                            <input
                                type="radio"
                                name="radioButton07"
                                defaultChecked
                                onChange={(e) => {
                                    absenceDispatch({type : 'absence'});
                                    attendanceDispatch({type : 'absence'});
                                }}>
                            </input>
                            <label>결석</label>
                        </td>
                    </tr>
                    <tr className="StudentList">
                        <td>8</td>
                        <td>김음료</td>
                        <td>
                            <input
                                type="radio"
                                name="radioButton08"
                                onChange={(e) => {
                                    attendanceDispatch({type : 'attendance'});
                                    absenceDispatch({type : 'attendance'});
                                }}>
                            </input>
                            <label>출석</label>
                            <input
                                type="radio"
                                name="radioButton08"
                                defaultChecked
                                onChange={(e) => {
                                    absenceDispatch({type : 'absence'});
                                    attendanceDispatch({type : 'absence'});
                                }}>
                            </input>
                            <label>결석</label>
                        </td>
                    </tr>
                    <tr className="StudentList">
                        <td>9</td>
                        <td>김건물</td>
                        <td>
                            <input
                                type="radio"
                                name="radioButton09"
                                onChange={(e) => {
                                    attendanceDispatch({type : 'attendance'});
                                    absenceDispatch({type : 'attendance'});
                                }}>
                            </input>
                            <label>출석</label>
                            <input
                                type="radio"
                                name="radioButton09"
                                defaultChecked
                                onChange={(e) => {
                                    absenceDispatch({type : 'absence'});
                                    attendanceDispatch({type : 'absence'});
                                }}>
                            </input>
                            <label>결석</label>
                        </td>
                    </tr>
                    <tr className="StudentList">
                        <td>10</td>
                        <td>김빌라</td>
                        <td>
                            <input
                                type="radio"
                                name="radioButton10"
                                onChange={(e) => {
                                    attendanceDispatch({type : 'attendance'});
                                    absenceDispatch({type : 'attendance'});
                                }}>
                            </input>
                            <label>출석</label>
                            <input
                                type="radio"
                                name="radioButton10"
                                defaultChecked
                                onChange={(e) => {
                                    absenceDispatch({type : 'absence'});
                                    attendanceDispatch({type : 'absence'});
                                }}>
                            </input>
                            <label>결석</label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default StudentTwoReducer;