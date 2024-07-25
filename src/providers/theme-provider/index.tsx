import React from "react";
import { ConfigProvider } from "antd";
function ThemeProvider({children}: Readonly<{children: React.ReactNode;}>) {
  return (
  <ConfigProvider theme={{
    token: {
      colorPrimary: "#ED4192",
    },
    components: {
      Button: {
        controlHeight: 42,
        controlOutline:'none',
      },
      Input: {
        controlHeight: 45,
        controlOutline:'none'
      }
    },
  }}
  >
    {children}
  </ConfigProvider>);
}

export default ThemeProvider;
