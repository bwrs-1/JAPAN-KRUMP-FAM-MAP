import React from "react";
import Links from "./Links";
import "./Shop.scss";
import { Link } from "react-router-dom";
import { makeDistanceLabelText } from "./distance-label";
import { IconButton, Typography } from "@material-ui/core";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  shop: Pwamap.ShopData;
  close: Function;
};

const Content = (props: Props) => {
  const mapNode = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<any>(null);
  const { shop } = props;

  const clickHandler = () => {
    props.close();
    if (mapNode.current) {
      mapNode.current.remove();
      map.remove();
    }
  };

  React.useEffect(() => {
    if (!mapNode.current) {
      return;
    }

    // @ts-ignore
    const nextMap = new window.geolonia.Map({
      container: mapNode.current,
      interactive: false,
      zoom: 14,
      // style: `geolonia/gsi`,
      // style:
      //   "https://api.maptiler.com/maps/52fe0485-5021-4bcb-9bb1-7ccecdbe11e4/style.json?key=pNZ57kRwS9dOIeGPTCct",
      style:
        "https://api.maptiler.com/maps/52fe0485-5021-4bcb-9bb1-7ccecdbe11e4/style.json?key=pNZ57kRwS9dOIeGPTCct",
    });
    setMap(nextMap);
  }, [shop, mapNode]);

  const distanceTipText = makeDistanceLabelText(shop.distance);
  const category = shop["カテゴリ"];
  const content = shop["紹介文"];

  const toBreakLine = (text: string) => {
    let result: any = "";
    if (text !== void 0) {
      return text.split(/(\r\n)|(\n)|(\r)/g).map((line, i) => {
        if (line === "\r\n" || line === "\n" || line === "\r") {
          result = <br key={i} />;
        } else if (line !== undefined) {
          result = line;
        }

        return result;
      });
    }
    return result;
  };

  return (
    <div className="shop-single">
      <div className="head">
        <IconButton onClick={clickHandler} aria-label="close" color="secondary">
          <AiOutlineClose size="16px" color="#FFFFFF" />
        </IconButton>
      </div>
      <div className="container">
        {shop ? (
          <>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              color="common.white"
            >
              {shop["スポット名"]}
            </Typography>
            <div>
              <span className="nowrap">
                <Link to={`/list?category=${category}`}>
                  <span onClick={clickHandler} className="category">
                    {category}
                  </span>
                </Link>
              </span>
              <span className="nowrap">
                {distanceTipText && (
                  <span className="distance">
                    現在位置から {distanceTipText}
                  </span>
                )}
              </span>
            </div>

            <div style={{ margin: "24px 0" }}>
              <Links data={shop} />
            </div>

            {shop["画像"] && (
              <img
                src={shop["画像"]}
                alt={shop["スポット名"]}
                style={{ width: "100%" }}
              />
            )}

            {/* <p style={{ margin: "24px 0", wordBreak: "break-all" }}>
              {toBreakLine(content)}
            </p> */}
            <Typography
              style={{ margin: "24px 0", wordBreak: "break-all" }}
              gutterBottom
              variant="button"
              display="block"
              color="common.white"
            >
              {toBreakLine(content)}
            </Typography>

            <div
              ref={mapNode}
              style={{ width: "100%", height: "200px", marginTop: "24px" }}
              data-lat={shop["緯度"]}
              data-lng={shop["経度"]}
              data-navigation-control="off"
            ></div>

            <p>
              <a
                className="small"
                href={`http://maps.apple.com/?q=${shop["緯度"]},${shop["経度"]}`}
              >
                スポットまでの道順
              </a>
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Content;
