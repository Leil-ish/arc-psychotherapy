import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e0f",
          padding: "82px"
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            background: "#995531"
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "18%",
              right: "18%",
              top: "18%",
              height: "7%",
              background: "#fffdf7"
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "18%",
              bottom: "16%",
              width: "7%",
              height: "54%",
              background: "#fffdf7"
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "18%",
              bottom: "16%",
              width: "7%",
              height: "54%",
              background: "#fffdf7"
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
