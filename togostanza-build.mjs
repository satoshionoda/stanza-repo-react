import styles from 'rollup-plugin-styles';

export default function config(environment) {
  return {
    rollup: {
      plugins: [
	styles()
      ],
    },
  };
}
