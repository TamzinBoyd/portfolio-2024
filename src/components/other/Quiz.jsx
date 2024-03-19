import { useEffect, useState } from "react";

const Quiz = () => {
	const [question, setQuestion] = useState(null);
	const [answer, setAnswer] = useState(null);
	const [loading, setLoading] = useState(true);
	const answerEl = document.querySelector('#quiz-answer')
	const fetchData = async () => {
		setLoading(true);

		const apiKey = "jhItmWRFY/48udF8QF3gmQ==3aoRgMJ1wH88BpWK";

		try {
			const response = await fetch(
				"https://api.api-ninjas.com/v1/trivia?category=music",
				{
					method: "GET",
					headers: {
						"X-Api-Key": apiKey,
						"Content-Type": "application/json",
					},
				},
			);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const result = await response.json();
			setQuestion(result[0].question);
			setAnswer(result[0].answer);
		} catch (error) {
			console.error("Error:", error);
		} finally {
			setLoading(false);
			answerEl?.classList.add("hidden");
		}
	};

	useEffect(() => {
		fetchData();
		if (answerEl) {
			answerEl.classList.add("hidden");
		}
	}, []);

	const showAnswer = () => {
		if (answerEl) {
			answerEl.classList.remove("hidden");
		}
	};

	return (
		<div className='bg-primary relative overflow-visible left-1/2 w-screen transform -translate-x-1/2 p-4 py-12 text-secondary text-center flex flex-col items-center'>
			<h6 className='font-bold text-3xl'>Let&apos;s have some fun!</h6>
			{loading ? (
				<p className='text-xl pt-8 min-h-24'>Loading...</p>
			) : (
				<p className='text-xl pt-8 min-h-24'>{question}</p>
			)}
			<div className='w-full md:w-[700px] grid md:grid-cols-3 gap-4 md:gap-12 pb-6 items-center'>
				<button
					aria-label='Get cat fact'
					onClick={showAnswer}
					className='p-4 bg-accent rounded w-full md:w-48 h-16 hover:bg-secondary hover:text-accent'
				>
					Reveal Answer
				</button>
				<div className='flex items-center justify-center w-full h-full min-h-[50px] bg-white rounded m-0'>
					<p id="quiz-answer" className='answer hidden m-0 break-word p-2 text-center'>
						{answer}
					</p>
				</div>
				<button
					aria-label='Get cat fact'
					onClick={fetchData}
					className='w-full md:w-48 h-16 p-4 bg-secondary rounded text-primary hover:bg-accent'
				>
					New Question
				</button>
			</div>
		</div>
	);
};

export default Quiz;
