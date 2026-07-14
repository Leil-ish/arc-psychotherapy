import { ImageResponse } from "next/og";
import { ArcSymbol } from "@/components/arc-symbol";

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
          padding: "20px"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            background: "#005B54",
            borderRadius: "26px",
            padding: "18px"
          }}
        >
          <ArcSymbol outer="#F5F0F7" sweep="#012622" opening="#E98A15" />
        </div>
      </div>
    ),
    size
  );
}
