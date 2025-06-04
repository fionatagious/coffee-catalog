"use client";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// json data
import coffeeData from "../../public/data/coffee_varieties.json";
import filterData from "../../public/data/filter_options.json";
// components
import Dropdown from "@/app/components/Dropdown";
import Footer from "@/app/components/navigation/Footer";
// utilities
import formatLabels from "../utils/formatLabels";

export default function Home() {
  // format keys to be more readable, e.g. "optimal_altitude" to "Optimal altitude"
  const labelsArray = formatLabels(Object.keys(coffeeData[0]));

  // delay rendering until on the client, prevents "document is not defined" error
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  return (
    <BrowserRouter>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1>Coffee catalog</h1>
          <div className="flex flex-wrap gap-2">
            {filterData.map((filter) => (
              <Dropdown
                key={filter.id}
                label={filter.filterName}
                paramKey={filter.paramKey}
                options={filter.options}
              />
            ))}
          </div>
          {/* display search results below */}
          {coffeeData.map((variety) => (
            <div
              key={variety.id}
              className="bg-orange-50 p-4 rounded-xl shadow-md w-full"
            >
              <div className="flex flex-col my-2">
                <h2>{variety.variety_name}</h2>
                <p>{variety.summary}</p>
              </div>
              <div className="has-tooltip font-semibold cursor-help">
                <span className="tooltip rounded-lg shadow-lg p-1 bg-white -mt-8">
                  how the plant performs in terms of yield, growth, and farming
                  requirements
                </span>
                Argonomic traits
              </div>
              <p>
                {labelsArray[7]}: ⛰️ {variety.optimal_altitude}
              </p>
              <p>
                {labelsArray[12]}: {variety.nutrition_requirement}
              </p>
              <p>
                {labelsArray[6]}: {variety.quality_potential_at_high_altitude}
              </p>
              <p>
                {labelsArray[13]}: 🕓 {variety.ripening_of_fruit}
              </p>
              <p>
                {labelsArray[11]}: 🗓️ {variety.year_of_first_production}
              </p>
              <p>
                {labelsArray[5]}: {variety.yield_potential}
              </p>
              <p>
                {labelsArray[14]}: 🫘 {variety.cherry_to_green_bean_outturn}
              </p>
              <p>
                {labelsArray[15]}: {variety.planting_density}
              </p>
              <p>
                {labelsArray[16]}: {variety.additional_argonomic_information}
              </p>

              <hr className="my-4 text-slate-200" />
              <div className="flex justify-between">
                <div className="flex flex-col my-2">
                  <div className="has-tooltip font-semibold cursor-help">
                    <span className="tooltip rounded-lg shadow-lg p-1 bg-white -mt-8">
                      the plant&apos;s structure and appearance
                    </span>
                    🌱 Physical characteristics
                  </div>
                  <p>
                    {labelsArray[2]}: {variety.stature}
                  </p>
                  <p>
                    {labelsArray[3]}: {variety.leaf_tip_color}
                  </p>
                  <p>
                    {labelsArray[4]}: {variety.bean_size}
                  </p>
                </div>
                <div className="flex flex-col my-2">
                  <div className="has-tooltip font-semibold cursor-help">
                    <span className="tooltip rounded-lg shadow-lg p-1 bg-white -mt-8">
                      the variety&apos;s resistance or vulnerability to pests
                      and diseases
                    </span>
                    🦠 Disease susceptibility
                  </div>
                  <p>
                    {labelsArray[9]}: {variety.nematode}
                  </p>
                  <p>
                    {labelsArray[8]}: {variety.coffee_leaf_rust}
                  </p>
                  <p>
                    {labelsArray[10]}: {variety.coffee_berry_disease}
                  </p>
                </div>
                <div className="flex flex-col my-2">
                  <div className="has-tooltip font-semibold cursor-help">
                    <span className="tooltip rounded-lg shadow-lg p-1 bg-white -mt-8">
                      the variety&apos;s lineage and breeding background
                    </span>
                    🧬 Genetic background
                  </div>
                  <p>
                    {labelsArray[17]}: {variety.type}
                  </p>
                  <p>
                    {labelsArray[18]}: {variety.genetic_description}
                  </p>
                  <p>
                    {labelsArray[19]}: {variety.lineage}
                  </p>
                  <p>
                    {labelsArray[20]}: {variety.breeder}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
