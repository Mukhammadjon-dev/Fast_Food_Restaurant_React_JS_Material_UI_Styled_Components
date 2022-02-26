import React from "react";
import {
  H1,
  P1,
  FeatureButton,
  FeatureContainer1,
  FeatureContainer2,
  FeatureContainer3,
  FeatureContainer4,
  FeatureContainer5,
} from "./FeatureElements";

export const Feature = () => {
  return (
    <div>
      <FeatureContainer1>
        <H1> Shaurma of the Day </H1>
        <P1>
          {" "}
          It is made by stacking thinly sliced meat, typically lamb, beef, or
          chicken, on a large rotating skewer or cone.{" "}
        </P1>
        <FeatureButton> Get 20% Discount </FeatureButton>
      </FeatureContainer1>
    </div>
  );
};
export const Feature2 = () => {
  return (
    <div>
      <FeatureContainer2>
        <H1> Gamburger of the Day </H1>
        <P1>
          {" "}
          A hamburger is a food consisting of one or more cooked patties—usually
          ground meat, typically beef{" "}
        </P1>
        <FeatureButton> Get 15% Discount </FeatureButton>
      </FeatureContainer2>
    </div>
  );
};
export const Feature3 = () => {
  return (
    <div>
      <FeatureContainer3>
        <H1> Club Sandwich of the Day </H1>
        <P1>
          {" "}
          It is a sandwich of bread, sliced cooked poultry, ham or fried bacon,
          lettuce, tomato, and mayonnaise.{" "}
        </P1>
        <FeatureButton> Get 20% Discount </FeatureButton>
      </FeatureContainer3>
    </div>
  );
};

export const Feature4 = () => {
  return (
    <div>
      <FeatureContainer4>
        <H1> Lavash of the Day </H1>
        <P1>
          {" "}
          Lavash is a traditional thin, unleavened, Armenian flatbread made in a
          tandoor oven.{" "}
        </P1>
        <FeatureButton> Get 15% Discount </FeatureButton>
      </FeatureContainer4>
    </div>
  );
};

export const Feature5 = () => {
  return (
    <div>
      <FeatureContainer5>
        <H1> Xot Dog of the Day </H1>
        <P1>
          {" "}
          A hot dog is a food consisting of a grilled or steamed sausage served
          in the slit of a partially sliced bun.{" "}
        </P1>
        <FeatureButton> Get 25% Discount </FeatureButton>
      </FeatureContainer5>
    </div>
  );
};
