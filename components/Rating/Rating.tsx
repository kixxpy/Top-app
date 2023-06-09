import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from 'react';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {

	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updateRating = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
				className={cn(styles.star, {
					[styles.filled]: i < currentRating,
					[styles.editeble]: isEditable,
				})}
				onMouseEnter={() => changeDisplay(i + 1)}
				onMouseLeave={() => changeDisplay(rating)}
				onClick={() => onClick(i + 1)}
				>
					<StarIcon

					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
				/>

				</span>

			);
		});
		setRatingArray(updateRating);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code != 'Space' && e.code != 'Enter' || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
		</div>
	);
};