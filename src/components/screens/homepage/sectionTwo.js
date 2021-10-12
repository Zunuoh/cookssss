import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "../../../styles/style.css";
import { Search, Filter } from "react-feather";
import { Button } from "react-bootstrap";
import SectionOneImage from "../../../pictures/one.jpeg";

const RamenList = [
  { id: "0", image: { SectionOneImage }, name: "Noodle" },
  { id: "1", image: { SectionOneImage }, name: "Chicken" },
  { id: "2", image: { SectionOneImage }, name: "Vegetable" },
  { id: "3", image: { SectionOneImage }, name: "Onion" },
  { id: "4", image: { SectionOneImage }, name: "Shrimp" },
  { id: "5", image: { SectionOneImage }, name: "Noodle" },
];

const SmoothieList = [
  { id: "0", image: { SectionOneImage }, name: "Banana" },
  { id: "1", image: { SectionOneImage }, name: "Kiwi" },
  { id: "2", image: { SectionOneImage }, name: "Lemon" },
  { id: "3", image: { SectionOneImage }, name: "Pear" },
  { id: "4", image: { SectionOneImage }, name: "Milk" },
  { id: "5", image: { SectionOneImage }, name: "Noodle" },
];

const SectionOne = () => {
  const [ramRecipes] = useState(RamenList);
  const [smoothieRecipes] = useState(SmoothieList);
  return (
    <div style={{ padding: 30 }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "71%",
            height: 40,
            borderRadius: 20,
            marginTop: 30,
            display: "flex",
            alignItems: "center",
            padding: 20,
            marginLeft: 10,
            boxShadow: "-6px 10px 54px -1px rgba(0,0,0,0.22)"
          }}
        >
          <Search color="#C2BFD3" size={24} />
          <p style={{ marginTop: 15, marginLeft: 10, color:"#C2BFD3" }}>Search by food name</p>
        </div>
        <div style={{ marginTop: 30, marginLeft: 70 }}>
          <Button
            variant="white"
            style={{ borderWidth: 1,  borderRadius:20, boxShadow: "-6px 10px 54px -1px rgba(0,0,0,0.22)", color:"#C2BFD3" }}
          >
            <Filter color="#9B97AD" size={20} style={{ marginRight: 8 }} />
            Primary
          </Button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#F59317",
          marginTop: 40,
          height: 160,
          borderRadius: 20,
          display: "flex",
          padding: 30,
          width: "90%",
          marginLeft: 5,
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "#FFFCED" }}> Add your own recipe</h1>
        <p style={{ color: "#FFFCED" }}>
          Upload your own home-made recipe and share it with other members of
          our community
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
        <h4>Based on the type of food you like</h4>
        <p style={{marginLeft:"43%", color:" #F59317"}}>View more</p>
      </div>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          marginTop: 20,
          marginLeft: 50,
          
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "45%",
            height: 500,
            borderRadius: 20,
            padding: 20,
            boxShadow: "-6px 10px 54px -1px rgba(0,0,0,0.22)"
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
            <img
              src={SectionOneImage}
              style={{ width: 90, height: 90, borderRadius: 20 }}
              alt=""
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginLeft: 30, fontSize: 20 }}>Spicy Ramen</div>
              <div style={{ marginLeft: 30, fontSize: 20 }}> Noodle</div>
              <div style={{ marginLeft: 30, fontSize: 20, color:"#C2BFD3" }}> 209cal</div>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <p style={{ fontSize: 20, marginLeft: 10 }}>Ingredients</p>
          </div>

          <div
            style={{
              flexWrap: "wrap",
              display: "flex",
              marginLeft: 25,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.12,
              shadowRadius: 60,
            }}
          >
            {ramRecipes &&
              ramRecipes.map((ramRecipe) => {
                return (
                  <div>
                    <div
                      style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "#FFF9F2",
                        borderRadius: 10,
                        marginRight: 20,
                        marginTop: 10,
                        display: "flex",
                        justifyContent: "center",
                        padding: 10,
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={SectionOneImage}
                        style={{ width: 40, height: 40 }} alt=""
                      />
                      <p>{ramRecipe.name}</p>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                );
              })}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            width: "45%",
            height: 500,
            borderRadius: 20,
            padding: 20,
            marginLeft:30,
            boxShadow: "-6px 10px 54px -1px rgba(0,0,0,0.22)"
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
            <img
              src={SectionOneImage}
              style={{ width: 90, height: 90, borderRadius: 20 }} alt=""
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginLeft: 30, fontSize: 20 }}>Smoothies</div>
              <div style={{ marginLeft: 30, fontSize: 20, color:"#C2BFD3" }}> 209cal</div>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <p style={{ fontSize: 20, marginLeft: 10 }}>Ingredients</p>
          </div>

          <div
            style={{
              flexWrap: "wrap",
              display: "flex",
              marginLeft: 25,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.12,
              shadowRadius: 60,
            }}
          >
            {smoothieRecipes &&
              smoothieRecipes.map((smoothieRecipe) => {
                return (
                  <div>
                    <div
                      style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "#FFF9F2",
                        borderRadius: 10,
                        marginRight: 20,
                        marginTop: 10,
                        display: "flex",
                        justifyContent: "center",
                        padding: 10,
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={SectionOneImage}
                        style={{ width: 40, height: 40 }}
                        alt=""
                      />
                      <p>{smoothieRecipe.name}</p>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                );
              })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionOne;
