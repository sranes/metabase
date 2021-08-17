import React from "react";
import { Box } from "grid-styled";

import Heading from "metabase/components/type/Heading";
import Subhead from "metabase/components/type/Subhead";
import Text from "metabase/components/type/Text";

import { RenderChart } from "../../static-viz/";

export default function StaticVizPage() {
  return (
    <Box py={4}>
      <Box className="wrapper wrapper--trim">
        <Heading>Static Visualisations</Heading>
        <Text>
          These visualizations are used in dashboard subscriptions. They have no
          interactivity and get generated by the backend to be sent to Slack or
          in emails. You can use this playground to work on the source code in
          /static-viz/ and see the effects. You might need to hard refresh to
          see updates.
        </Text>
        <Box py={3}>
          <Subhead>Bar chart with timeseries data</Subhead>
          <Box
            dangerouslySetInnerHTML={{
              __html: RenderChart("timeseries/bar", {
                data: [["2010-11-07", 20], ["2020-11-07", 30]],
                accessors: {
                  x: row => new Date(row[0]).valueOf(),
                  y: row => row[1],
                },
              }),
            }}
          ></Box>
        </Box>
        <Box py={3}>
          <Subhead>Line chart with timeseries data</Subhead>
          <Box
            dangerouslySetInnerHTML={{
              __html: RenderChart("timeseries/line", {
                data: [
                  ["2010-11-07", 20],
                  ["2020-11-07", 30],
                  ["2021-11-07", 31],
                ],
                accessors: {
                  x: row => new Date(row[0]).valueOf(),
                  y: row => row[1],
                },
              }),
            }}
          ></Box>
        </Box>
        <Box py={3}>
          <Subhead>Donut chart showing categorical data</Subhead>
          <Box
            dangerouslySetInnerHTML={{
              __html: RenderChart("categorical/donut", {
                data: [["donut", 20], ["cronut", 31]],
                colors: {
                  donut: "red",
                  cronut: "blue",
                },
                accessors: {
                  dimension: row => row[0],
                  metric: row => row[1],
                },
              }),
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
