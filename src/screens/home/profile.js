import React from "react";

export default function profile() {
  
  return (
    <div className="timeline_div1">
      <div className="profile_pic">
        <img src="images/timeline_img1.png" alt="timeline_img1" />
        <div className="profile_text">
          <a href="/#">Change Profile Pic</a>
        </div>
      </div>
      <div className="profile_info">
        <div className="edit_div">
          <a href="/#">
            Edit <img src="images/timeline_img.png" alt="timeline_img" />
          </a>
        </div>
        <div className="profile_form">
          <ul>
            <li>
              <div className="div_name1">Name :</div>
              <div className="div_name2">Stefiney Gibbs</div>
            </li>
            <li>
              <div className="div_name1">Sex :</div>
              <div className="div_name2">Female</div>
            </li>
            <li>
              <div className="div_name1">Description :</div>
              <div className="div_name3">
                This is an example of a comment. You can create as many comments
                like this one or sub comments as you like and manage all of your
                content inside Account.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
