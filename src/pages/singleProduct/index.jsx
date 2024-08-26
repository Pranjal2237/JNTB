import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { singleProductLayout } from "../../constants";
import { PrimaryLayout, SecondaryLayout } from "../../components";

const SingleProduct = () => {
  const { singleProduct } = useParams();
  return (
    <div>
      {singleProductLayout.map(
        ({
          firstLayout,
          link,
          heading,
          picture,
          description,
          marketDemand,
          specifications,
          ingredients,
          varieties,
          varietyHeading,
          verietyDesc,
          outro,
          benifits,
        }) => {
          return (
            <>
              {link === singleProduct &&
                (firstLayout ? (
                  <PrimaryLayout
                    heading={heading}
                    picture={picture}
                    description={description}
                    marketDemand={marketDemand}
                    specifications={specifications}
                    ingredients={ingredients}
                    outro={outro}
                    benifits={benifits}
                  />
                ) : (
                  <SecondaryLayout
                    heading={heading}
                    picture={picture}
                    description={description}
                    varieties={varieties}
                    varietyHeading={varietyHeading}
                    varitetyDesc={verietyDesc}
                    outro={outro}
                    ingredients={ingredients}
                  />
                ))}
            </>
          );
        }
      )}
    </div>
  );
};

export default SingleProduct;
