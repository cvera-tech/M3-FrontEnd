// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import ProductCard from "./ProductCard";

function App() {
	const products = [
		{
			name: 'FORTRAN Lubricant',
			vote: '',
			upvotes: 20,
			downvotes: 6
		},
		{
			name: 'C++ Grease',
			vote: '',
			upvotes: 129,
			downvotes: 11
		},
		{
			name: 'Java Beans',
			vote: 'down',
			upvotes: 367,
			downvotes: 60
		},
		{
			name: 'JavaScript Oil',
			vote: 'up',
			upvotes: 297,
			downvotes: 31
		}
	];
	const output = [];
	products.forEach(product => output.push(<ProductCard name={product.name} vote={product.vote} upvotes={product.upvotes} downvotes={product.downvotes} /> )
	// products.forEach(product => output.push(<ProductCard {...product} /> )
	);
	return (
		<div>
			{output}
			{/* <ProductCard name='FORTRAN Lubricant' vote='' upvotes={20} downvotes={2} /> */}
		</div>
	)
}

export default App;
