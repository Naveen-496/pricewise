"use client";
import { scrapeAndStoreProduct } from "@/lib/action";
import React, { useState } from "react";

const isValidAmazonProductUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    return (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.startsWith("amazon")
    );
  } catch (error) {
    return false;
  }
};

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(" Got Search input : ", searchPrompt);

    const isValidLink = isValidAmazonProductUrl(searchPrompt);

    if (!isValidLink) return alert("Please provide a valid link");

    try {
      setIsLoading(true);

      // scrape the product page

      const product = await scrapeAndStoreProduct( searchPrompt );

    } catch (error: any) {
         console.log( error.message);

    } finally {
     
      setIsLoading(false);
    
    }
  }

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
      />
      <button type="submit" 
      disabled={ searchPrompt === ""}
      className="searchbar-btn">
        { isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;
