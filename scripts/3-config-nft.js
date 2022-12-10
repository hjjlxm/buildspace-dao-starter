import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x64d0cC91e6Cf6Fa4C297dB70422402402d4d1552", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Cool Banana",
        description: "This NFT will give you access to CoolDAO!",
        image: readFileSync("scripts/assets/cool.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();