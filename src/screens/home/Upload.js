import React,{useState} from "react";
import UploadForm from './UploadForm'
export default function Upload() {
 let [showForm, setFrom]=useState(false)
  return (
    <div className="rght_btn">
      {" "}
      <span className="rght_btn_icon">
        <img src="images/btn_iconb.png" alt="up" />
      </span>{" "}
      <span className="btn_sep">
        <img src="images/btn_sep.png" alt="sep" />
      </span>{" "}
      <a href="javascript:void(0)" onClick={()=>setFrom(!showForm)}>Upload Post</a>{" "}
      {showForm ? (
                <UploadForm
                  closePopup={setFrom}
                />
              ) : null}
    </div>
  );
}
