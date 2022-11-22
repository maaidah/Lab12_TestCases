const request = require("supertest");
const {connect} = require("superagent");
const app = require("./routes/User");
const {response} = require("express");
const mongoose = require("mongoose");
const { config } = require("dotenv");


describe ("test the root path ", () => {
    test ("It should response the POST method", () =>{
        const response = request (app).post("http://localhost:8000/User/add")
        .send({
            "Name": "Maaidah",
            "Email":"maaidaharif",
            "Age": 12,
            "Contact":123
        })
        expect(response.statusCode).toBe(200);

    })        

})

describe ("test the user deleted ", () => {
    test ("It should response the POST method", () =>{
        const response = request (app).delete("http://localhost:8000/User/:id")
        .send({
            "Name": "Maaidah",
            "Email":"maaidaharif",
            "Age": 12,
            "Contact":123
        })
           expect(response.statusCode).toBe(200);
    })

})


describe("Test the user added ", () => {
    test("It should response the UserAdded method", () => {
      const response = request(app).get("http://localhost:8000/User/:id")
        .send({
            "Name": "Maaidah",
            "Email":"maaidaharif",
            "Age": 12,
            "Contact":123
        });
      expect(response.body.toEqual("Maaidah").statusCode).toBe(200);
    });
  });
  