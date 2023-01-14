import PropTypes from 'prop-types';
import css from './Statistics.module.css'

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}
export const Statistics = ({ title, stats }) => {
    return (
      <div className={css.statisticsContainer}>
        <section className={css.statistics}>
          {title && <h2 className={css.title}>{title}</h2>}

          <ul className={css.statList}>
                    {stats.map(stat => {
                const { label, percentage, id } = stat;
                return (
                    <li className={title ? css.statListItem : css.statListItemNoTitle}
                        style={{backgroundColor: getRandomHexColor(),
                                }}
                        key={id}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
                    </li>
                        )
                    })}
          </ul>
        </section>
      </div>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};