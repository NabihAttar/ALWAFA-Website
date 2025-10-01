'use client';

export default function TrackingProgress({
  steps = [],
  current = 0,     // kept for labels if you need
  segment = 0,     // 0..1
  showEndLabels = true,
  className = '',
}) {
  const seg = Math.min(Math.max(Number(segment) || 0, 0), 1); // clamp 0..1
  const pct = seg * 100;                                      // 0..100 only from segment

  return (
    <div className={`tp ${className}`} style={{ ['--progress']: `${pct}%` }}>
      {steps.map((label, i) => (
        <div className="tp-item" key={`${i}-${label}`}>
          {showEndLabels && (i === 0 || i === steps.length - 1) && (
            <p className={`tp-label ${i === 0 ? 'tp-label--start' : 'tp-label--end'}`}>
              <em>{i === 0 ? 'FROM' : 'TO'}</em>
              <strong>{label}</strong>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
 