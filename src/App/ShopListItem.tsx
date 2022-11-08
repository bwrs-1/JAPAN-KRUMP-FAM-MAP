import "./ShopListItem.scss";
import { Link } from "react-router-dom";
import { makeDistanceLabelText } from "./distance-label";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

type Props = {
  data: Pwamap.ShopData;
  popupHandler: Function;
  queryCategory: string | null;
};

const Content = (props: Props) => {
  const clickHandler = () => {
    props.popupHandler(props.data);
  };

  const distanceTipText = makeDistanceLabelText(props.data.distance);
  const category = props.data["カテゴリ"];
  const image = props.data["画像"];

  const isCategoryPage = props.queryCategory ? true : false;

  return (
    <>
      <div className="shop-link">
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "#282828",
          }}
        >
          <CardActionArea onClick={clickHandler}>
            {image && (
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt={props.data["スポット名"]}
              />
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.data["スポット名"]}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="nowrap">
                  {distanceTipText && (
                    <span className="distance">
                      現在位置から {distanceTipText}
                    </span>
                  )}
                </span>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                {" "}
                <Link to={`/list?category=${category}`}>
                  {!isCategoryPage && (
                    <span className="category">{category}</span>
                  )}
                </Link>
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default Content;
