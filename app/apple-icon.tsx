import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#012622",
          padding: "28px"
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            background: "#ECE5F0",
            borderRadius: "24px"
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "21%",
              right: "21%",
              top: "15%",
              bottom: "16%",
              borderTopLeftRadius: "999px",
              borderTopRightRadius: "999px",
              borderStyle: "solid",
              borderColor: "#59114D",
              borderWidth: "12px 12px 0 12px"
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "35%",
              right: "35%",
              bottom: "16%",
              height: "6%",
              background: "#E98A15",
              borderRadius: "999px"
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
