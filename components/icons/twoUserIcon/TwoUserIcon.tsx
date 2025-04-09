import React, { FC } from "react";

interface TwoUserIconProps {
  size: "small" | "base";
}

const TwoUserIcon: FC<TwoUserIconProps> = ({ size }) => {
  return size === "small" ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.10671 7.24658C6.04004 7.23992 5.96004 7.23992 5.88671 7.24658C4.30004 7.19325 3.04004 5.89325 3.04004 4.29325C3.04004 2.65992 4.36004 1.33325 6.00004 1.33325C7.63337 1.33325 8.96004 2.65992 8.96004 4.29325C8.95337 5.89325 7.69337 7.19325 6.10671 7.24658Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9401 2.66675C12.2334 2.66675 13.2734 3.71341 13.2734 5.00008C13.2734 6.26008 12.2734 7.28675 11.0267 7.33341C10.9734 7.32675 10.9134 7.32675 10.8534 7.33341"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.77335 9.70675C1.16002 10.7867 1.16002 12.5467 2.77335 13.6201C4.60669 14.8467 7.61335 14.8467 9.44669 13.6201C11.06 12.5401 11.06 10.7801 9.44669 9.70675C7.62002 8.48675 4.61335 8.48675 2.77335 9.70675Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2267 13.3333C12.7067 13.2333 13.16 13.0399 13.5334 12.7533C14.5734 11.9733 14.5734 10.6866 13.5334 9.90659C13.1667 9.62659 12.72 9.43992 12.2467 9.33325"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3401 20C19.0601 19.85 19.7401 19.56 20.3001 19.13C21.8601 17.96 21.8601 16.03 20.3001 14.86C19.7501 14.44 19.0801 14.16 18.3701 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TwoUserIcon;
