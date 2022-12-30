import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box } from "./";

const meta = {
  component: Box,
  title: "UI/Box",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Box>;

export default meta;

export const Default: ComponentStory<typeof Box> = (args) => (
  <Box className="bg-gray" {...args}>
    새로운 내용
  </Box>
);

Default.args = {};
