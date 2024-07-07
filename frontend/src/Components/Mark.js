import "../Style/Score.css"

function Marks(){

    var Scores=[["1st Semester","IAT1",[["Tamil",90],["English",50]]],["2nd Semester","IAT1",[["Tamil",80],["English",80]]],["2nd Semester","Final",[["Artifical interlligence",80],["Mathematics",80]]]]
    return(
        <>
                <div className="Mark-IO">
                    <p className="Mark-Tit">Performance</p>
                    <div className="Mark-Container">
                    {Scores && Scores.map((score)=>(
                        <div className="Mark-Card">
                            <div className="Mark-Top">
                                <p>{score[0]}</p>
                                <p>{score[1]}</p>
                            </div>
                            <div className="Mark-Bottom">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Mark</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {score[2] && score[2].map((info) => (
                                        <tr>
                                            <td>{info[0]}</td>
                                            <td>{info[1]}</td>
                                            <td>{info[1]>=60?"Pass":"Fail"}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                    
        </>
    )
}

export default Marks