import React from 'react'
import './css/Divider.css'

const wave1 =
  "M0,0V52.17c50.12,25.43,108.75,30.9,160,33,75.22-3.15,142.5-30.12,209.1-35.7C440.22,28.5,515.9,59.12,590,75.5c72.8,15,145.1,22.55,215,12.9,39.1-5.5,72.45-18,110-27.25C993.44,20.12,1110-10,1195,55.15V0Z";

const wave2 =
  "M0,0V18.25C15.5,40.12,30.64,58.9,53.19,74.25,104.1,115.5,170,109,228.6,94.75c32.5-9.5,62-24.2,93.15-38.6,42.5-18,88.2-44.5,137.3-47.8,38.5-3.2,75.8,10.5,103.2,33,33.1,27.2,65,60,108,71.5,42,11.5,85-5,124-23.5s78-37.5,120.3-42c61.5-6,118,25,175.5,40.6,31.8,9.8,61.5,5.7,91-6.8,24.5-11.3,50.5-28.5,64.2-51V0Z";

const wave3 =
  "M0,0V8.72C150.5,62,320.1,73.5,480.2,44c45-8,90.1-18,135-23.5,63-9,120,14,180,40C830,80,890,98,960,92c90-8.5,180-42,260-80V0Z";
export default function Divider({ alt = false, height = 200 }) {
  return (
    <svg
      className="wave-animation"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '200%',
        height,
        transformOrigin: '0 0',
        transform: 'scaleY(0.5)',
      }}
      viewBox="0 0 2400 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {[
        { d: wave1, opacity: 0.25 },
        { d: wave2, opacity: 0.5 },
        { d: wave3, opacity: 1 },
      ].map((w, i) => (
        <g key={i} opacity={w.opacity}>
          {/* first copy at x=0 */}
          <path d={w.d} />
          {/* second copy at x=1200 (wave width) */}
          <path d={w.d} transform="translate(1200,0)" />
        </g>
      ))}

      {/* One layer in “alt” mode */}
      {alt && (
        <g opacity={1}>
          <path d={wave1} />
          <path d={wave1} transform="translate(1200,0)" />
        </g>
      )}
    </svg>
  )
}
