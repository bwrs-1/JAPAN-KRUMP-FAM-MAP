import { Fab, Typography } from "@material-ui/core";
import "./AboutUs.scss";
import config from "../config.json";
import { FaPlus } from "react-icons/fa";
// import AddIcon from "@mui/icons-material/Add";

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url;
    }
  };

  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}/icon-pwamap.svg`} alt="" />
          </div>
          <div className="logo"></div>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            color="common.white"
          >
            KRUMP FAM MAP
          </Typography>
        </div>

        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="common.white"
        >
          <p>こちらのサービスはGeolonia PWAマップで作成しています</p>
        </Typography>

        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="common.white"
        >
          <h2> Geolonia PWAマップについて</h2>
        </Typography>

        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="common.white"
        >
          <p>
            <a
              href="https://blog.geolonia.com/2022/05/17/pwamap-beta.html"
              target="_blank"
              rel="noreferrer"
            >
              https://blog.geolonia.com/2022/05/17/pwamap-beta.html
            </a>
          </p>
        </Typography>

        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="common.white"
        >
          <h2>当サイトについて</h2>
        </Typography>

        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="common.white"
        >
          <p>
            Geoloia
            PWAマップのサービスが終了した場合、こちらのサービスも終了する可能性があります。
          </p>
          <p>
            スマートフォンから見た場合、画像の表示が遅れる もしくは
            表示されない可能性があります。
          </p>
        </Typography>

        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="common.white"
        >
          <h2>掲載情報について</h2>
        </Typography>

        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="common.white"
        >
          <p>
            入力フォームの入力内容に不備があった場合、データが反映されない場合があります。
          </p>
          <p>データの反映が少し遅れる場合があります。ご了承ください。</p>
          <p>掲載情報の修正、削除については BWRS#1 までご連絡ください。</p>
        </Typography>

        {config.form_url ? (
          <>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              color="common.white"
            >
              <h2>データの更新について</h2>
            </Typography>

            <Typography
              gutterBottom
              variant="h4"
              component="div"
              color="common.white"
            >
              <p>
                このアプリのデータを更新するには下の「 +
                」ボタンを押してフォームに必要な情報を入力してください。
              </p>
            </Typography>
            <div className="goto-form">
              <Fab color="primary" aria-label="add" onClick={clickHandler}>
                <FaPlus color="#FFFFFF" />
              </Fab>
              {/* <button>
                <AddIcon />
              </button> */}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Content;
