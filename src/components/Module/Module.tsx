import Image from 'next/image';

import { Discipline, Product } from '../../../types/types';

import styles from './Module.module.scss';

type Props = {
  id: number,
  disciplines: Discipline[],
  isActive: boolean,
};

export function Module({id, disciplines, isActive = false} : Props) {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.module}>
        <div className={styles.module_number}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1V19M18.9706 10H1" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{id} модуль</span>
        </div>
        <div className={styles.disciplines}>
          <ul>
            {disciplines.map((discipline) => {
              return <li key={discipline._id}>{discipline.string}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
