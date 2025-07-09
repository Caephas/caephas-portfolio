"use client";
import { useEffect, useRef } from "react";

interface InstagramReelEmbedProps {
  reelUrl: string; // e.g. "https://www.instagram.com/reel/CfPHWbXAf80/"
}

export default function InstagramReelEmbed({
  reelUrl,
}: InstagramReelEmbedProps) {
  const embedContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).instgrm) {
      // Tells Instagram to process this embed
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <div ref={embedContainerRef} style={{ maxWidth: "600px" }}>
      {/* 
        The reelUrl must be placed in 'data-instgrm-permalink' with
        no extra query params. 
      */}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={reelUrl}
        data-instgrm-version="12"
        style={{ margin: 0 }}
      />
    </div>
  );
}
