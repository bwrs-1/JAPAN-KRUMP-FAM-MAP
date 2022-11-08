import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "./Category.scss";
import {
  Card,
  CardContent,
  FormControl,
  ImageList,
  ImageListItem,
  Typography,
} from "@material-ui/core";
import Shop from "./Shop";

type Props = {
  data: Pwamap.ShopData[];
};

const Content = (props: Props) => {
  const { data } = props;
  const [validImageList, setValidImageList] = useState<JSX.Element[]>([]);
  const [shop, setShop] = useState<Pwamap.ShopData | undefined>();

  const navigate = useNavigate();

  const [categoryList, setCategoryList] = React.useState<string[]>([]);

  const popupHandler = (shop: Pwamap.ShopData) => {
    if (shop) {
      setShop(shop);
    }
  };

  const closeHandler = () => {
    setShop(undefined);
  };

  React.useEffect(() => {
    let categories: string[] = [];

    for (let i = 0; i < props.data.length; i++) {
      const shop = props.data[i];

      if (categories.indexOf(shop["カテゴリ"]) === -1) {
        categories.push(shop["カテゴリ"]);
      }
    }

    setCategoryList(categories);
  }, [props.data]);

  useEffect(() => {
    let imageListItems = [];

    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      if (item["画像"]) {
        imageListItems.push(
          <ImageListItem key={i} className="mui-image-list-item">
            <img
              src={item["画像"]}
              alt={item["スポット名"]}
              loading="lazy"
              onClick={() => popupHandler(item)}
              onError={(e) => {
                //@ts-ignore
                e.target.parentNode.remove();
              }}
            />
          </ImageListItem>
        );
      }
    }

    setValidImageList(imageListItems);
  }, [data]);

  return (
    <>
      {/* <div className="head"></div> */}
      <div className="category">
        <div className="container">
          <div className="category-item">
            <FormControl fullWidth>
              <Select
                onChange={(e) => {
                  if (e) {
                    navigate(`/list?category=${e.value}`);
                  }
                }}
                options={categoryList.map((category) => {
                  return {
                    value: category,
                    label: category,
                  };
                })}
              />
            </FormControl>
          </div>
          <div className="category-item">
          <Typography gutterBottom variant="h5" component="div">
                  image search
                </Typography>
            <Card
              sx={{ height: 350 }}
              style={{
                overflowY: 'auto',
              }}
            >
              <CardContent>
                <ImageList
                  id="mui-image-list"
                  sx={{ width: "100%", height: "100%" }}
                  cols={2}
                  rowHeight={164}
                >
                  {validImageList}
                </ImageList>
                {shop ? <Shop shop={shop} close={closeHandler} /> : <></>}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
