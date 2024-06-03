export default function CategoryList() {
	const categories = ['Pizza', 'Burger', 'Pasta', 'Pohovanici'];

	return (
		<div>
			<h2>Food:</h2>
			<ul>
				{categories.map(category => (
					<li key={category}>{category}</li>
				))}
			</ul>
		</div>
	);
}

// 	return [
// 		<div>
//     <h2>Food:</h2>
//     <ul>
//       {categories.map(category => (
//         <li>{category}</li>
//       ))}
//     </ul>
//   </div>,
//   <div>uste eden</div>,
// ];
