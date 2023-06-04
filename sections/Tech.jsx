'use client';

import React from "react";

import { BallCanvas } from "../components";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10' id="tech">
      {technologies?.map((technology) => (
        <div className='w-80 h-80 flex flex-col items-center' key={technology?.name}>
          <BallCanvas icon={technology?.icon} />
          <span className="font-semibold text-white">{technology?.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Tech