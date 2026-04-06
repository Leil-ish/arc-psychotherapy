import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          background: "#012622",
          color: "#f6f2f8",
          padding: "56px 64px",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                width: 76,
                height: 76,
                background: "#ECE5F0",
                borderRadius: 18
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
                  borderWidth: "10px 10px 0 10px"
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
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontFamily: "serif", fontSize: 64, letterSpacing: "-0.05em", lineHeight: 0.84 }}>Arc</div>
              <div
                style={{
                  fontSize: 20,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(233, 138, 21, 0.9)"
                }}
              >
                Psychotherapy
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ fontSize: 34, lineHeight: 1.25, maxWidth: 720 }}>
              Direct, structured psychotherapy for perfectionism, overcontrol, and religious harm.
            </div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 252,
            height: 252,
            background: "#ECE5F0",
            borderRadius: 52,
            marginTop: 10,
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
              borderWidth: "26px 26px 0 26px"
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
