import { Discipline, Product } from '../../../types/types';
import { Module } from '../Module';

import styles from './Program.module.scss';

export type Props = {
  title: string,
  disciplines: Discipline[],
};

export function Program({title, disciplines} : Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.modules}>
        <Module id={1} disciplines={disciplines}/>
        <Module id={2} disciplines={disciplines}/>
      </div>
    </div>
  )
}
