'use client';

import React from "react";

import { BallCanvas } from "../components";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies?.map((technology) => (
        <div className='w-28 h-28 flex flex-col items-center' key={technology?.name}>
          <BallCanvas icon={technology?.icon} />
          <span className="font-semibold text-white">{technology?.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Tech