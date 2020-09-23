import React from 'react'

export default function footer() {
  return (
    <div>
      <div className="clear" />
        <div className="footr">
          <div className="footr_lft">
            <div className="footer_div1">
              Copyright © Pet-Socail 2014 All Rights Reserved
            </div>
            <div className="footer_div2">
              <a href="/#">Privacy Policy </a>|{" "}
              <a href="/#"> Terms &amp; Conditions</a>
            </div>
          </div>
          <div className="footr_rgt">
            <ul>
              <li>
                <a href="/#">
                  <img src="images/social_1.png" alt="social_1" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <img src="images/social_2.png" alt="social_3" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <img src="images/social_3.png" alt="social_2" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <img src="images/social_4.png" alt="social_4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
