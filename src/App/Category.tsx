import React from "react";
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import './Category.scss'
import { FormControl } from "@material-ui/core";

type Props = {
  data: Pwamap.ShopData[];
}

const Content = (props: Props) => {

  const navigate = useNavigate();

  const [categoryList, setCategoryList] = React.useState<string[]>([]);

  React.useEffect(() => {

    let categories: string[] = []

    for (let i = 0; i < props.data.length; i++) {
      const shop = props.data[i];

      if (categories.indexOf(shop['カテゴリ']) === -1) {

        categories.push(shop['カテゴリ'])
      }

    }

    setCategoryList(categories)

  }, [props.data])


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
              options={
                categoryList.map(category => {
                  return {
                    value: category,
                    label: category
                  }
                })
              }
            />
            </FormControl>
          </div>

        </div>
      </div>
    </>
  );
};

export default Content;
