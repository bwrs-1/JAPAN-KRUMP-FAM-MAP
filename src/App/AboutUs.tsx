import './AboutUs.scss'
// import config from '../config.json'
// import { FaPlus } from 'react-icons/fa';

const Content = () => {
  // const clickHandler = () => {
  //   if (config.form_url) {
  //     window.location.href = config.form_url
  //   }
  // }


  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image"><img src={`${process.env.PUBLIC_URL}/icon-pwamap.svg`} alt=""/></div>
          <div className="logo">JAPAN KRUMP FAM MAP</div>
        </div>

        <p>こちらのサービスはGeolonia PWAマップで作成しています</p>

        <h2> Geolonia PWAマップについて</h2>
        <p><a href="https://blog.geolonia.com/2022/05/17/pwamap-beta.html" target='_blank' rel="noreferrer">https://blog.geolonia.com/2022/05/17/pwamap-beta.html</a></p>

        <h2>掲載情報について</h2>
        <p>掲載情報の修正、削除については BWRS#1 までご連絡ください</p>

        {/* {config.form_url?
          <>

            <h2>データの更新について</h2>
            <p>このアプリのデータを更新するには下の「 + 」ボタンを押してフォームに必要な情報を入力してください。</p>
            <div className="goto-form"><button><FaPlus color="#FFFFFF" onClick={clickHandler} /></button></div>
          </>
          :
          <></>
        } */}
      </div>
    </div>
  );
};

export default Content;
