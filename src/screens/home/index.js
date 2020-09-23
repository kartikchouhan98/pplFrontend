import React, { useEffect } from "react";
import HeaderContent from "./HeaderContent";
import Footer from "../../components/Footer/footer";
import Profile from "./profile";
import List from "./List";
import Post from "./Post";
import Upload from "./Upload";
import Invite from "./Invite";
import Categories from "./Categories";
import Featured from "./Featured";
import FEAT_SEC from "./Feat_Sec";

import TIME_NAV from "./Time_Nav";
import Axios from "axios";

export default function Home(props) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      props.history.replace("/login");
    } else {
      Axios.post(
        "http://localhost:1818/verify",
        {},
        {
          headers: { authorization: token },
        }
      ).then((res) => {
        console.log("result", res.data.success);
        if (!res.data.success) props.history.replace("/login");
      });
    }
  });
  return (
    <div>
      <HeaderContent history={props.history} />
      <div className="container">
        <div className="content">
          <div class="content_rgt">
            <Upload />
            <Invite />
            <Categories />
            <div class="rght_cate">
              <Featured />
              <FEAT_SEC />
            </div>
          </div>
          <div class="content_lft">
            <div class="contnt_1">
              <List history={props.history} />
              <div class="timeline_div">
                <Profile />
                <TIME_NAV />
              </div>
            </div>
            <div class="contnt_2">
              <Post />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
