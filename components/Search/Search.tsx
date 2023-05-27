import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { useState } from 'react';
import { Button } from '../Button/Button';
import GlassIcon from './glass.svg';
import { useRouter } from 'next/router';


export const Search = ({className, ...props}: SearchProps): JSX.Element => {

	const router = useRouter();
	const [search, setSearch] = useState<string>('');

	const getToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key == 'Enter') {
			getToSearch();
		}
	};

	return (
		<div className={cn(className, styles.search)} {...props} >
			<Input
			placeholder='Поиск...'
				className={styles.input}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			>
			</Input>
			<Button
				appearance='primary'
				className={styles.btn}
				onClick={getToSearch}
			>
				<GlassIcon />
			</Button>
		</div>
	);
};