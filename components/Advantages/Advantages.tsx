import styles from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import CheckIcon from './check.svg';


export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map(a => (
				<div key={a._id} className={styles.advantage}>
					<CheckIcon/>
					<div className={styles.title}>{a.title}</div>
					<div className={styles.vline}></div>
					<div className={styles.descr}>{a.description}</div>
				</div>
			))}
			
		</>
	);
};