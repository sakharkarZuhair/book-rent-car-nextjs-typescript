"use client";
import React from "react";
import Image from "next/image";
import { customButtomProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: customButtomProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
