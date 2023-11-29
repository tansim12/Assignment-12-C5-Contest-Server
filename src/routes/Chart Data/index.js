const express = require("express");
const Contest = require("../../Model/contest");
const router = express.Router();

router.get("/allChartsDataInfo", async (req, res) => {
  // const allTags = ["Article", "Business", "Gaming", "Photography", "Music"];

  try {
    const articleTag = await Contest.find({ tag: "Article" });
    const articleTagTotalJoin = articleTag?.reduce(
      (pre, item) => pre + item?.total_join,
      0
    );
    const articleTagTotalRating = articleTag?.reduce(
      (pre, item) => pre + item?.rating,
      0
    );
    const articleData = {
      tag: "Article",
      allTagTotalJoin:articleTagTotalJoin,
      allTagTotalRating:articleTagTotalRating,
    };

    // gaming  section
    const gamingTag = await Contest.find({ tag: "Gaming" });
    const gamingTagTotalJoin = gamingTag?.reduce(
      (pre, item) => pre + item?.total_join,
      0
    );
    const gamingTagTotalRating = gamingTag?.reduce(
      (pre, item) => pre + item?.rating,
      0
    );
    const gamingData = {
      tag: "Gaming",
      allTagTotalJoin: gamingTagTotalJoin,
      allTagTotalRating: gamingTagTotalRating,
    };

    // Business  section
    const businessTag = await Contest.find({ tag: "Business" });
    const businessTagTotalJoin = businessTag?.reduce(
      (pre, item) => pre + item?.total_join,
      0
    );
    const businessTagTotalRating = businessTag?.reduce(
      (pre, item) => pre + item?.rating,
      0
    );
    const businessData = {
      tag: "Business",
      allTagTotalJoin: businessTagTotalJoin,
      allTagTotalRating: businessTagTotalRating,
    };

    res.send([articleData, businessData , gamingData]);
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
