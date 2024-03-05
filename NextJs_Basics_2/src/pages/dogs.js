import Image from "next/image";
import React from "react";
import img from "../../public/7.jpg";

function Dogs() {
  return (
    <div className="flex gap-20 flex-wrap p-8">
      <div>
        <Image
          src={img}
          placeholder="blur"
          alt="pet"
          quality={100}
          // fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      {["1", "2", "3", "4", "5", "6"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" />
          </div>
        );
      })}
    </div>
  );
}

export default Dogs;
