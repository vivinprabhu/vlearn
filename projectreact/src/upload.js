import React from "react";
import {Link} from "react-router-dom";
import image from './Upload.png';
import './upload.css' ;

class Upload extends React.Component{

    render(){
     const mystyle={
         backgroundImage:`url('${image}')`,
         height:'100vh',
         width:'300vh',
         marginTop:'0px',
         backgroundSize:'contain',
         backgroundRepeat:'no-repeat',
         backgroundPosition:'left',
     };

    return(
        <div style={mystyle}>

    <div>

        <div class="back2">
        <div class="h10">
            <p>UPLOAD DOCUMENTS</p>
        </div>
        
        <div class='input0'>
            <input class='input-field3' type="text" placeholder="Uploader Name" required/>
        </div>

        <div class='input1'>
            <select class="input-field4">
                <option value="Select Department"></option>
                <option>AERONAUTICAL ENGINEERING</option>
                <option>ARTIFICAL INTELLIGENCE</option>
                <option>BIOMEDICAL ENGINEERING</option>
                <option>CHEMICAL ENGINEERING</option>
                <option>CIVIL ENGINEERING</option>
                <option>COMPUTER SCIENCE AND ENGINEERING</option>
                <option>ELECTRONICS AND COMMUNICATION ENGINEERING</option>
                <option>ELECTRICAL AND ELECTRONICS ENGINEERING</option>
                <option>INFORMATION TECHNOLOGY</option>
                <option>MECHANICAL ENGINEERING</option>
            </select>
        </div>

        <div class='input2'>
            <select class="input-field5">
                <option value="Select Department"></option>
                <option>SUBJECT NOTES</option>
                <option>QUESTION PAPERS</option>
                <option>VIDEO LECTURES</option>
                <option>REFERENCE BOOKS</option>
            </select>
        </div>

        <div class='input3'>
             <input class="input-field6" type="file" placeholder='Upload Files'/>
        </div>

        <div>
            <Link to="/homepage"><input class='btn8' type='submit' value='Upload'></input></Link>
        </div>

        <div>
        <Link to="/homepage"><input class='btn9' type='submit' value='Back'></input></Link>
        </div>

        </div>

    </div>
    </div>

    );
}
}

export default Upload;