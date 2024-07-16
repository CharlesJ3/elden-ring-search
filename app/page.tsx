'use client';
import { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Cards from '@/components/Cards';

export default function Home() {
	const inputRef = useRef<HTMLInputElement>(null);

	const [search, setSearch] = useState([]);

	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		// Fetch the data from the API when the searchTerm is not empty.
		// Fetch data when the user has typed something to save the API from being overloaded.
		searchTerm !== '' &&
			fetch('https://eldenring.fanapis.com/api/bosses?name=' + searchTerm + '&limit=5')
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					console.log(data);
					setSearch(data);
				});
	}, [searchTerm]);

	const handleInputChange = () => {
		// Get the input value of the inputRef we created.
		setSearchTerm(inputRef.current?.value !== undefined ? inputRef.current?.value : '');
	};

	const searchBarProps = {
		term: search,
	};

	return (
		<>
			<div className="bg-[url('../public/images/temp-bg.jpg')] items-center h-screen flex flex-col flex-nowrap justify-top">
				<div className="bg-opacity-60 bg-black absolute w-screen h-screen top-0 left-0 pointer-events-none z-0"></div>
				<h1 className="text-[4rem] m-5 z-10 text-[white] text-center">ELDEN RING</h1>
				{/* <h2 className="text-[1.8rem] m-5 z-10 text-[gold] text-center">Find Information on Enemies in Elden Ring</h2> */}
				<Input ref={inputRef} className="w-2/6 m-5 z-10" placeholder="Start typing to find an enemy"></Input>
				<Button
					variant="default"
					size="lg"
					className="text-red-400 bg-black text-slate-300 m-5 z-10"
					onClick={handleInputChange}
				>
					Search
				</Button>
				{
					// If we do not have a search term there is no need to display the Cards.
					searchTerm !== '' && <Cards {...searchBarProps} />
				}
			<Footer />
			</div>
		</>
	);
}
