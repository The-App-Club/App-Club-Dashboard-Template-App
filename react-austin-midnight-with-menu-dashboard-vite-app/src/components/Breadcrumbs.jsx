import {Link} from 'react-router-dom';
import {memo, useMemo} from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {css, cx} from '@emotion/css';

const Breadcrumbs = ({className = css``, notifier}) => {
  const routes = useMemo(() => {
    return [
      {
        path: `/`,
        breadcrumb: `Top`,
        props: {
          pageName: `/`,
          notifier,
        },
      },
      {
        path: `/about`,
        breadcrumb: `About`,
        props: {
          pageName: `/about`,
          notifier,
        },
      },
      {
        path: `/contact`,
        breadcrumb: `Contact`,
        props: {
          pageName: `/contact`,
          notifier,
        },
      },
      {
        path: `/work`,
        breadcrumb: `Work`,
        props: {
          pageName: `/work`,
          notifier,
        },
      },
      {
        path: `/analytics`,
        breadcrumb: `Analytics`,
        props: {
          pageName: `/analytics`,
          notifier,
        },
      },
      {
        path: `/moment`,
        breadcrumb: `Moment`,
        props: {
          pageName: `/moment`,
          notifier,
        },
      },
      {
        path: `/newsletters`,
        breadcrumb: `Newsletters`,
        props: {
          pageName: `/newsletters`,
          notifier,
        },
      },
      {
        path: `/settings`,
        breadcrumb: `Settings`,
        props: {
          pageName: `/settings`,
          notifier,
        },
      },
      {
        path: `/logout`,
        breadcrumb: `Logout`,
        props: {
          pageName: `/logout`,
          notifier,
        },
      },
    ];
  }, [notifier]);

  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className={cx(css``, className)}>
      {breadcrumbs.map(({match, breadcrumb}, index) => {
        return (
          <span
            key={match.pathname}
            className={css`
              display: inline-flex;
              align-items: center;
              gap: 0.6rem;
              @media (max-width: 768px) {
                gap: 0.5rem;
              }
            `}
          >
            {index === 0 ? null : (
              <span
                className={css`
                  display: inline-block;
                  width: 10px;
                `}
              >
                >
              </span>
            )}
            <Link
              to={match.pathname}
              className={css`
                color: black;
                text-decoration: none;
              `}
            >
              {breadcrumb}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default memo(Breadcrumbs);
