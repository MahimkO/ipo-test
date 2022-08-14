import { Discipline, Product } from '../../../types/types';

import styles from './Module.module.scss';

type Props = {
  id: number,
  disciplines: Discipline[],
};

export function Module({id, disciplines} : Props) {
  console.log(disciplines);
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.module}>
        <div className={styles.module_number}>{id} модуль</div>
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
