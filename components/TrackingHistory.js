'use client';
import PropTypes from 'prop-types';

// helper: last fully-complete row index from segment
function doneIndex(segment, count) {
  const seg = Math.min(Math.max(Number(segment) || 0, 0), 1);
  // divide the 0..1 range across (count-1) segments
  return Math.floor(seg * Math.max(count - 1, 1) + 1e-9);
}

export default function TrackingHistory({
  rows = [],
  segment = 0, // 0..1 (same value you give TrackingProgress)
  className = '',
}) {
  const seg = Math.min(Math.max(Number(segment) || 0, 0), 1);
  const pct = seg * 100;
  const done = doneIndex(seg, rows.length);

  return (
    <section
      className={`history-section ${className}`}
      style={{ ['--progress']: `${pct}%` }}
    >
      <div className="container">
        <div className="history-card">
          <h3 className="history-card__title">Tracking History</h3>

          <div className="timeline">
            <div className="timeline__line" />
            {rows.map((r, i) => {
              const state =
                i < done ? 'is-complete' : i === done ? 'is-active' : 'is-future';
              return (
                <div className="timeline__row" key={`${r.title}-${i}`}>
                  <div className="timeline__date">
                    <h6 style={{ color: 'white' }}>{r.date}</h6>
                    <h6 style={{ color: 'white' }}>{r.time}</h6>
                  </div>

                  <div className="timeline__track">
                    <span className={`timeline__dot ${state}`} />
                  </div>

                  <div className="timeline__content">
                    <h6 className="timeline__title">{r.title}</h6>
                    <h6 className="timeline__desc">{r.desc}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

TrackingHistory.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ),
  segment: PropTypes.number,
  className: PropTypes.string,
};
