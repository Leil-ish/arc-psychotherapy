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
          background: "#0a0e0f",
          color: "#fffdf7",
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
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontFamily: "serif", fontSize: 64, letterSpacing: "-0.05em", lineHeight: 0.84 }}>ARC</div>
              <div
                style={{
                  fontSize: 20,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(255, 253, 247, 0.72)"
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
            background: "#995531",
            marginTop: 10,
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
