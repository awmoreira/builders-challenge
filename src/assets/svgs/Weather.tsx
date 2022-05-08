import React from 'react';
import { Animated } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface IProps {
  color?: string;
  width?: number;
  height?: number;
}

const Weather: React.FC<IProps> = ({ color = '#C6CCD2', width = 200, height = 200 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimatedPath
        d="M17.6105 169.3C17.6105 177.9 19.9511 186 24.7438 193.4C29.4251 200.8 35.8896 206.8 44.1376 211.3C52.274 215.8 61.3021 218.2 70.8876 218.4C72.1136 218.4 72.7823 217.8 72.7823 216.7V203.4C72.7823 202.2 72.1136 201.5 70.8876 201.5C61.4136 201.1 53.2771 197.7 46.5896 191.3C39.9021 184.9 36.5584 177.6 36.5584 169.2C36.5584 161 39.6792 153.8 46.0323 147.6C52.3855 141.5 60.0761 137.9 69.4386 136.9L75.3459 136.3C76.6834 136.3 77.3521 135.7 77.3521 134.4L78.2438 129.3C79.4698 118.4 84.4855 109.3 93.4021 102C102.319 94.6999 112.907 91.0999 125.168 91.0999C137.317 91.0999 147.905 94.6999 156.933 102C166.073 109.3 171.2 118.3 172.315 129L173.095 134.8C173.095 135.9 173.764 136.5 174.99 136.5H192.934C202.966 136.5 211.548 139.7 218.681 146.1C225.815 152.5 229.381 160.1 229.381 169C229.381 177.4 226.038 184.7 219.35 191.1C212.663 197.4 204.526 200.8 195.164 201.3C193.826 201.3 193.046 201.9 193.046 203.2V216.5C193.046 217.6 193.715 218.2 195.164 218.2C209.988 217.8 222.471 212.8 232.836 203.2C243.202 193.6 248.329 182.3 248.329 169.1C248.329 161.5 246.769 154.8 243.536 148.8C251.896 139.5 256.354 128.5 256.354 116C256.354 106.6 253.791 97.8999 248.552 89.8999C243.314 81.8999 236.18 75.4999 227.264 70.7999C218.347 66.0999 208.539 63.7999 198.062 63.7999C180.897 63.7999 166.519 69.5999 154.927 81.0999C145.899 76.6999 135.868 74.4999 124.945 74.4999C109.229 74.4999 95.4084 78.8999 83.2594 87.5999C71.1105 96.2999 63.4198 107.5 59.9646 121C47.4813 123.8 37.3386 129.6 29.4251 138.5C21.5115 147.5 17.6105 157.7 17.6105 169.3V169.3ZM88.2751 209.8C88.2751 212.2 89.1667 214.2 90.95 215.9C92.7334 217.6 94.8511 218.4 97.5261 218.4C100.09 218.4 102.319 217.6 104.102 215.9C105.885 214.2 106.777 212.2 106.777 209.8C106.777 207.5 105.885 205.6 104.102 204C102.319 202.4 100.201 201.6 97.5261 201.6C94.9625 201.6 92.7334 202.4 90.95 204C89.1667 205.6 88.2751 207.6 88.2751 209.8ZM88.2751 246.1C88.2751 248.2 89.1667 250.1 90.95 251.8C92.9563 253.4 95.074 254.2 97.4146 254.2C100.09 254.2 102.207 253.4 103.991 251.9C105.774 250.3 106.554 248.4 106.554 246.1C106.554 243.7 105.663 241.8 103.879 240.2C102.096 238.6 99.9782 237.9 97.3032 237.9C94.7396 237.9 92.5105 238.7 90.7271 240.2C89.1667 241.7 88.2751 243.7 88.2751 246.1V246.1ZM111.124 46.7999C111.124 49.1999 112.016 51.1999 113.799 52.6999L121.155 59.2999C122.939 60.8999 124.945 61.7999 127.063 61.7999C129.403 62.0999 131.632 61.3999 133.862 59.5999C136.091 57.7999 137.205 55.6999 137.205 53.2999C137.205 50.8999 136.314 48.6999 134.53 46.8999L127.397 40.7999C125.725 39.0999 123.607 38.2999 120.932 38.2999C118.146 38.2999 115.805 39.0999 113.91 40.7999C112.016 42.3999 111.124 44.3999 111.124 46.7999V46.7999ZM123.719 229C123.719 231.2 124.61 233.2 126.394 235C128.177 236.6 130.406 237.4 132.858 237.4C135.533 237.4 137.763 236.6 139.546 235C141.329 233.4 142.332 231.4 142.332 229C142.332 226.7 141.441 224.7 139.546 223C137.651 221.3 135.422 220.5 132.858 220.5C130.295 220.5 128.177 221.3 126.394 223C124.61 224.7 123.719 226.7 123.719 229ZM123.719 193C123.719 195.3 124.61 197.2 126.394 198.8C128.177 200.4 130.406 201.2 132.858 201.2C135.533 201.2 137.763 200.4 139.546 198.8C141.441 197.2 142.332 195.3 142.332 192.9C142.332 190.6 141.441 188.6 139.546 187C137.651 185.4 135.422 184.6 132.858 184.6C130.295 184.6 128.177 185.4 126.394 187C124.61 188.6 123.719 190.7 123.719 193ZM123.719 265.6C123.719 267.8 124.61 269.7 126.394 271.3C128.289 273 130.406 273.8 132.858 273.8C135.533 273.8 137.763 273 139.546 271.5C141.441 269.9 142.332 268 142.332 265.6C142.332 263.2 141.441 261.2 139.546 259.6C137.651 257.9 135.422 257.1 132.858 257.1C130.406 257.1 128.289 257.9 126.394 259.6C124.61 261.3 123.719 263.3 123.719 265.6ZM159.608 209.8C159.608 212.2 160.5 214.2 162.283 215.9C164.067 217.6 166.296 218.4 168.859 218.4C171.423 218.4 173.652 217.6 175.435 215.9C177.219 214.2 178.11 212.2 178.11 209.8C178.11 207.5 177.219 205.6 175.435 204C173.652 202.4 171.534 201.6 168.859 201.6C166.184 201.6 164.067 202.4 162.283 204C160.5 205.6 159.608 207.6 159.608 209.8ZM159.608 246.1C159.608 248.2 160.5 250.1 162.172 251.8C164.178 253.4 166.407 254.2 168.859 254.2C171.534 254.2 173.652 253.4 175.435 251.9C177.219 250.3 177.999 248.4 177.999 246.1C177.999 243.7 177.107 241.8 175.324 240.2C173.541 238.6 171.423 237.9 168.748 237.9C166.073 237.9 163.844 238.7 162.06 240.3C160.5 241.8 159.608 243.8 159.608 246.1V246.1ZM170.531 90.5999C178.222 83.9999 187.362 80.6999 198.062 80.6999C208.873 80.6999 218.124 84.1999 225.703 91.0999C233.394 97.9999 237.183 106.4 237.183 116C237.183 122.2 235.289 128.4 231.499 134.4C220.91 124.8 207.981 120 192.823 120H189.256C185.913 108.3 179.671 98.4999 170.531 90.5999V90.5999ZM188.365 38.3999C188.365 40.6999 189.256 42.6999 191.151 44.1999C193.046 45.6999 195.275 46.4999 197.95 46.4999C200.625 46.4999 202.743 45.6999 204.526 44.1999C206.309 42.5999 207.09 40.6999 207.09 38.3999V17.9999C207.09 15.5999 206.198 13.5999 204.415 11.8999C202.631 10.1999 200.625 9.3999 198.062 9.3999C195.498 9.3999 193.269 10.2999 191.374 11.9999C189.479 13.6999 188.476 15.6999 188.476 17.9999V38.3999H188.365ZM249.89 61.0999C249.89 63.3999 250.781 65.3999 252.676 66.9999C254.348 68.5999 256.466 69.3999 258.918 69.5999C261.37 69.7999 263.71 68.8999 265.828 66.9999L281.767 52.6999C283.773 50.8999 284.665 48.8999 284.665 46.5999C284.665 44.1999 283.661 42.1999 281.767 40.4999C279.872 38.7999 277.643 37.9999 275.079 37.9999C272.627 37.9999 270.509 38.7999 268.615 40.4999L252.676 55.0999C250.781 56.6999 249.89 58.6999 249.89 61.0999V61.0999ZM258.806 179.1C258.806 181.6 259.698 183.7 261.481 185.3L268.615 191.6C271.29 193.2 273.742 194 275.748 194C278.089 194 280.095 193.1 281.99 191.4C283.884 189.7 284.776 187.6 284.776 185.3C284.776 183 283.773 181.1 281.878 179.5L274.968 173C272.961 171.4 270.732 170.6 268.169 170.6C265.605 170.6 263.376 171.4 261.593 173.1C259.698 174.7 258.806 176.7 258.806 179.1V179.1ZM274.968 116C274.968 118.4 275.971 120.3 277.866 121.9C279.76 123.7 282.101 124.6 284.776 124.6H307.291C309.854 124.6 312.083 123.8 313.978 122.1C315.873 120.4 316.765 118.4 316.765 116C316.765 113.6 315.873 111.6 313.978 110C312.083 108.4 309.854 107.5 307.291 107.5H284.776C282.101 107.5 279.872 108.3 277.866 110C275.859 111.7 274.968 113.7 274.968 116Z"
        fill={color}
      />
    </Svg>
  );
};

export default Weather;
