import styles from './test.module.css';
console.log(styles)

export default function Test() {
  return (
    <div className={styles.title}>Hello</div>
  )
}
