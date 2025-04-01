import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "跨境贸易合规政策智能助手"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to bottom right, #f0f9ff, #bfdbfe)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "linear-gradient(to bottom right, #3b82f6, #1e40af)",
          color: "white",
          fontSize: 64,
          marginBottom: 48,
        }}
      >
        贸
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: "bold",
          color: "#1e3a8a",
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        跨境贸易合规政策智能助手
      </div>
      <div
        style={{
          fontSize: 32,
          color: "#475569",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        深度解读全球贸易法规，降低企业合规风险
      </div>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}

