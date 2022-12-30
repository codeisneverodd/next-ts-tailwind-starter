import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  globalTypes: {
    darkMode: true,
  },
};

export const decorators = [
  (Story) => (
    <div className="font-sans">
      <Story />
    </div>
  ),
];
