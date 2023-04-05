import React from "react";
import styles from "../styles/RightBody.module.css";

export default function RightBody() {
  return (
    <div className={styles.right_body}>
      <div className={styles.feed_name}>
        <div className={styles.flex_center}>
          <div className={styles.big_profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileIU.jpg" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> IUCOMPANY</span>
            <span className={styles.name_content_txt}> 고치기 귀찮다 이제는</span>
          </div>
        </div>
        <a className={styles.link_txt}>지원</a>
      </div>
      <div className={styles.recommend_box}>
      </div>
      <div>
        <div className={styles.feed_name}>
          <div className={styles.profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileJjang.jpg" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> 사실 이 사이에도 있는데</span>
            <span className={styles.name_content_txt}> 오늘은 귀찮다</span>
          </div>
          <a className={styles.link_txt}>지원</a>
        </div>
        <div className={styles.feed_name}>
          <div className={styles.profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileLuffy.jpg" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> 백수</span>
            <span className={styles.name_content_txt}> 돈없는 백수는 싫어</span>
          </div>
          <a className={styles.link_txt}>지원</a>
        </div>
        <div className={styles.feed_name}>
          <div className={styles.profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileSponge.webp" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> 집게리아</span>
            <span className={styles.name_content_txt}> 헬기업</span>
          </div>
          <a className={styles.link_txt}>지원</a>
        </div>
      </div>
    </div>
  );
}
