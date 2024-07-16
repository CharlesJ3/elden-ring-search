import React from 'react';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Cardholder = (card: any) => {
	return (
		<>
			<Card style={{ backgroundImage: `url(${card.image})` }} className="rounded-lg shadow-lg border-4 z-10 w-1/5 bg-no-repeat bg-cover bg-center px-[1.5rem] py-[10em]">
				<CardHeader className='bg-black bg-opacity-30 rounded'>
					<CardTitle className='text-white z-10'>{card.name}</CardTitle>
					<CardDescription className='text-white z-10'>{card.description}</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-gray-600"></p>
				</CardContent>
			</Card>
			{/* Hidden by default, shown when hover or clicked */}
			<Card className="rounded-lg shadow-lg border-4 z-10 w-1/5 hidden">
				<CardHeader>
					<CardTitle>{card.name}</CardTitle>
					<CardDescription>{card.description}</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-black-600">HP: {card.healthPoints}</p>
          <br />
					<p className="text-gray-600">{card.description}</p>
				</CardContent>
				<CardFooter>
					<p className="text-gray-600">{card.region + ' - ' + card.location}</p>
				</CardFooter>
			</Card>
		</>

		// <div className="rounded-lg shadow-lg border-4 border-red-500 bg-white z-10">
		//   <div className="p-4">
		//     <h2 className="text-2xl font-bold">{card.name}</h2>
		//     <p className="text-gray-600">{card.healthPoints}</p>
		//     <p className="text-gray-600">{card.image}</p>
		//     <p className="text-gray-600">{card.region + ' - ' + card.location }</p>
		//     <p className="text-gray-600">{card.description}</p>
		//     <p className="text-gray-600">
		//       {
		//         card.drops.map((drop: any, index: any) => (
		//           <span key={index}>{drop}</span>
		//         ))
		//       }
		//     </p>
		//   </div>
		// </div>
	);
};

<Card>
	<CardHeader>
		<CardTitle>Card Title</CardTitle>
		<CardDescription>Card Description</CardDescription>
	</CardHeader>
	<CardContent>
		<p>Card Content</p>
	</CardContent>
	<CardFooter>
		<p>Card Footer</p>
	</CardFooter>
</Card>;

export default Cardholder;
