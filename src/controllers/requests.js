import React from "react";
import axios from "axios";
import { databaseUrl } from "../config";

export const postQuotes = async (body) => {
  const res = await axios.post(`${databaseUrl}/quotes.json`, body);
  return res;
};

export const getQuotes = async () => {
  const ideas = [];
  const res = await axios.get(`${databaseUrl}/quotes.json`);
  for (const keys in res.data) {
    const ideasObj = {
      ownerName: res.data[keys].userName,
      phoneNumber: res.data[keys].phoneNumber,
      title: res.data[keys].title,
      desc: res.data[keys].description,
      email : res.data[keys].email, 
    };
    ideas.push(ideasObj);
  }

  return { data: res, idea: ideas };
};
