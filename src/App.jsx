import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Projects from "../src/pages/Projects";
import About from "../src/pages/About";
import Experience from "../src/pages/Experience";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/experience' element={<Experience />} />
			<Route path='/projects' element={<Projects />} />
		</Routes>
	);
};

export default App;
