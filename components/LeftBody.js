import React from "react";
import styles from "../styles/LeftBody.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default LeftBody;

function LeftBody () {
  return (
    <div className={styles.left_body}>
      {feeds.map((feed) => (
        <div key={feed.id} className={styles.feed_box}>
          <div className={styles.feed_name}>
            <div className={styles.profile_box}>
              <img className={styles.profile_img} src={feed.profile_image} />
            </div>
            <span className={styles.feed_name_txt}>{feed.user_id}</span>
          </div>
          <img className={styles.feed_img} src={feed.image} />
          <div className={styles.feed_icon}>
            <div>
              <span className={styles.feed_name_txt}>{feed.user_id}</span>
            </div>
            <div>
              <img className={styles.material_icons_feed} src="leftbody/favorite.svg"/>
              <img className={styles.material_icons_feed} src="leftbody/send.svg"/>
              <img className={styles.material_icons_feed} src="leftbody/bookmark.svg"/>
            </div>
          </div>
          <div className="feed_content">
            <p className="feed_txt">
              <span className={styles.feed_txt}>{feed.content}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const feeds = [
  {
    user_id: 'john_doe',
    content: 'Hello world! 어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?어디까지 입력되는거에요?',
    profile_image: 'https://image.jtbcplus.kr/data/contents/jam_photo/202208/02/afc07921-a3d6-4a26-872a-184d7a054a42.jpg',
    image: 'https://daoift3qrrnil.cloudfront.net/content_images/images/000/127/434/original/%EC%B1%84%EC%9A%A9%EA%B3%B5%EA%B3%A0_r1.png?1658714714'
  },
  {
    user_id: 'jane_doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profile_image: 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg',
    image: 'https://post-phinf.pstatic.net/MjAxOTA2MjRfMTcg/MDAxNTYxMzUzMjkyNjIx.oP-m6lCS0OfZtmZr3EggV6SXr8lZclr0NamrgZx1AIEg.RhB9HljEXJLXfDTBC23pXcEhKDrcSyS0p9GLAEeXWosg.JPEG/IMG_3231.jpg?type=w1200'
  },
  {
    user_id: 'jane_doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profile_image: 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg',
    image: 'https://leadon-brandsite-prd-s3-seoul-img.s3.amazonaws.com/ElandCsr/editor/2022122208233310432139-dde9-498c-922b-ba943b0a3e0c.png'
  },
  {
    user_id: 'jane_doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profile_image: 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg',
    image: 'https://miricanvas.zendesk.com/hc/article_attachments/4408461715737/______1_.png'
  },
  {
    user_id: 'jane_doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profile_image: 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg',
    image: 'https://ottogi.co.kr/pds/editor/2020-10-19_517133489[2].jpg'
  },
  {
    user_id: 'jane_doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profile_image: 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg',
    image: 'https://help.jobis.co/hc/article_attachments/12711259778329'
  }
];